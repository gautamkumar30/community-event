'use client'

import { Button } from '@/components/ui/button'
import { Event } from '@/payload-types'
import Link from 'next/link'
import React from 'react'
import { createEventAction } from '../_actions/create-event-action'
import { toast } from 'sonner'

export const CreateEventForm = () => {
  const [data, setData] = React.useState<Event | null>(null)

  const handleSubmit = async () => {
    try {
      if (!data) {
        toast.error('Please fill all the fields')
        return
      }

      console.log(data)
      await createEventAction(data)

      toast.success('Event Created Successfully')
    } catch (error) {
      console.log(error)
      toast.error('Failed to create event')
    }
  }
  return (
    <section className="py-10 grow px-10">
      <h1>Create Event</h1>
      <section className=" mt-10 grid grid-cols-2 gap-x-10 gap-y-10 w-full ">
        <div className="flex flex-col gap-3 ">
          <label>Event Name</label>
          <input
            type="text"
            className="rounded-xl px-4 py-3 bg-gray-100"
            placeholder="HipHop Concert"
            required
            onChange={(e) => {
              setData({ ...data, title: e.target.value })
            }}
          />
        </div>{' '}
        <div className="flex flex-col gap-3">
          <label>Organizer Name</label>
          <input
            type="text"
            className="rounded-xl px-4 py-3 bg-gray-100"
            placeholder="Balasubramaniya V"
            required
            onChange={(e) => {
              setData({ ...data, organizedBy: e.target.value })
            }}
          />
        </div>{' '}
        <div className="flex flex-col gap-3">
          <label>Event Date</label>
          <input
            type="date"
            className="rounded-xl px-4 py-3 bg-gray-100"
            required
            onChange={(e) => {
              setData({ ...data, date: e.target.value })
            }}
          />
        </div>{' '}
        <div className="flex flex-col gap-3">
          <label>Venue</label>
          <input
            type="text"
            className="rounded-xl px-4 py-3 bg-gray-100"
            placeholder="Bangalore"
            onChange={(e) => {
              setData({ ...data, location: e.target.value })
            }}
            required
          />
        </div>{' '}
        <div className="flex flex-col gap-3">
          <label>Event Description</label>
          <input
            type="text"
            className="rounded-xl px-4 py-3 bg-gray-100"
            placeholder="great event"
            required
            onChange={(e) => {
              setData({ ...data, description: e.target.value })
            }}
          />
        </div>{' '}
        <div className="flex flex-col gap-3">
          <label>Event Category</label>
          <select
            name=""
            id=""
            className="rounded-xl px-4 py-3 bg-gray-100"
            defaultValue={'music'}
            required
            onChange={(e) => {
              setData({
                ...data,
                category: e.target.value as 'music' | 'dance' | 'audiolaunch' | 'fansmeet',
              })
            }}
          >
            <option value="music">Music</option>
            <option value="dance">Dance</option>
            <option value="audiolaunch">Audio Launch</option>
            <option value="fansmeet">Fans Meet</option>
          </select>
        </div>{' '}
        <Link href={'/createsuccess'} className="w-fit">
          <Button className="bg-primary text-white font-semibold text-lg" onClick={handleSubmit}>
            Create Event
          </Button>
        </Link>
      </section>
    </section>
  )
}

export default CreateEventForm
