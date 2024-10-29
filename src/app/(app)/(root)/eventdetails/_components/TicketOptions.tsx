'use client'

import { Button } from '@/components/ui/button'
import { Event } from '@/payload-types'
import React from 'react'
import { handleBuyTicket } from '../_actions/handleBuyTicket'
import { toast } from 'sonner'

interface Props {
  event: Event
}

const TicketOptions = ({ event }: Props) => {
  const handleSubmit = async (event: Event, ticket: any) => {
    try {
      await handleBuyTicket({ event, ticket })

      toast.success('Ticket purchased successfully')
    } catch (error) {
      console.log(error)
      toast.error('Some error occurred')
    }
  }

  return (
    <>
      <h2 className="text-2xl font-bold">Ticket Options</h2>
      <div className="mt-6 flex flex-col gap-6">
        {event.ticketOptions?.map((ticket, idx) => (
          <div key={idx} className="flex justify-between items-center border p-4 rounded-lg">
            <div>
              <p className="font-semibold">{ticket.type}</p>
              <p className="opacity-70">Price: ${ticket.price}</p>
              <p className="opacity-70">Quantity: {ticket.quantity}</p>
              <p className="opacity-70">Sold: {ticket.sold}</p>
            </div>
            <Button className="bg-pink-400 text-white" onClick={() => handleSubmit(event, ticket)}>
              Buy Ticket
            </Button>
          </div>
        ))}
      </div>
    </>
  )
}

export default TicketOptions
