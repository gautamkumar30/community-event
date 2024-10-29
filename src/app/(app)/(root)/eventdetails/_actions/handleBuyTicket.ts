'use server'

import { getUser } from '@/lib/payload/getUser'
import { getPayloadUtil } from '@/lib/payload/payload-utils'
import { Customer, Event } from '@/payload-types'
import { revalidatePath } from 'next/cache'
import { headers } from 'next/headers'

interface Props {
  event: Event
  ticket: any
}

export const handleBuyTicket = async ({ event, ticket }: Props) => {
  const payload = await getPayloadUtil()

  const user = await getUser(headers())
  try {
    // Update the event's ticket options
    const updatedTicketOptions = event?.ticketOptions?.map((t: any) => {
      if (t.type === ticket.type) {
        return {
          ...t,
          quantity: t.quantity - 1,
          sold: t.sold + 1,
        }
      }
      return t
    })

    // Update the event in the database
    await payload.update({
      collection: 'events',
      id: event.id,
      data: {
        ticketOptions: updatedTicketOptions,
      },
    })

    // Create a new booking in the bookings collection
    await payload.create({
      collection: 'bookings',
      data: {
        event: event.id,
        user: user?.id ?? 0,
        ticketType: ticket.type,
        quantity: 1,
        status: 'confirmed',
      },
    })

    revalidatePath(`/eventdetails/${event.id}`)
  } catch (error) {
    console.error('Error purchasing ticket:', error)
    revalidatePath(`/eventdetails/${event.id}`)
  }
}
