'use server'

import { getPayloadUtil } from '@/lib/payload/payload-utils'
import { Event } from '@/payload-types'

export const createEventAction = async (eventdata: Event) => {
  const payload = await getPayloadUtil()

  const event = await payload.create({
    collection: 'events',
    data: eventdata,
  })
}
