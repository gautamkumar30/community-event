'use client'

import { useState } from 'react'
import { EventCard } from './event-card'
import { Event } from '@/payload-types'

interface Props {
  events: Event[]
}

export const UpcomingEvents = ({ events }: Props) => {
  // const data: Event[] = [
  //   {
  //     name: 'HipHop Concert',
  //     organizerName: 'Balasubramaniya V',
  //     location: 'Bangalore',
  //     date: '09/10/2024',
  //     description: "This is a great event don't miss it",
  //     category: 'music',
  //   },
  //   {
  //     name: 'HipHop Fans Meet',
  //     organizerName: 'Balasubramaniya V',
  //     location: 'Bangalore',
  //     date: '09/10/2024',
  //     description: "This is a great event don't miss it",
  //     category: 'fansmeet',
  //   },
  //   {
  //     name: 'HipHop Audio Launch',
  //     organizerName: 'Balasubramaniya V',
  //     location: 'Bangalore',
  //     date: '09/10/2024',
  //     description: "This is a great event don't miss it",
  //     category: 'audiolaunch',
  //   },
  //   {
  //     name: 'HipHop Dance 1',
  //     organizerName: 'Balasubramaniya V',
  //     location: 'Bangalore',
  //     date: '09/10/2024',
  //     description: "This is a great event don't miss it",
  //     category: 'dance',
  //   },
  //   {
  //     name: 'HipHop Dance 2',
  //     organizerName: 'Balasubramaniya V',
  //     location: 'Bangalore',
  //     date: '09/10/2024',
  //     description: "This is a great event don't miss it",
  //     category: 'dance',
  //   },
  // ]

  const [category, setCategory] = useState('all')

  const [name, setName] = useState('')

  return (
    <section className="mt-10">
      <div className="flex justify-between">
        <h1>Upcoming Events</h1>

        {/* <div className="flex gap-4">
          <input
            type="text"
            className="rounded-xl px-4 py-3 bg-gray-100"
            placeholder="Event Name"
            onChange={(e) => {
              //   console.log(e.target.value);
              setName(e.target.value)
            }}
          />

          <select
            name=""
            id=""
            onChange={(e) => {
              setCategory(e.target.value)
            }}
          >
            <option value="all">All</option>
            <option value="music">Music</option>
            <option value="dance">Dance</option>
            <option value="audiolaunch">Audio Launch</option>
            <option value="fansmeet">Fans Meet</option>
          </select>
        </div> */}
      </div>

      <section
        className="grid grid-cols-2 gap-x-20 mt-10 gap-y-20
        "
      >
        {events.map((item, idx) => {
          if (category == 'all') {
            if (name == '') {
              //   console.log("not");

              return (
                <div key={idx}>
                  {' '}
                  <EventCard event={item} />
                </div>
              )
            } else {
              //   console.log(name);
              //   console.log(item.name);

              if (item.title.includes(name)) {
                console.log(item.title)
              }
              if (item.title.includes(name)) {
                return <EventCard event={item} key={idx} />
              }
            }
          } else {
            if (category == item.title) {
              if (name == '') {
                // console.log("not");
                return <EventCard event={item} key={idx} />
              } else {
                console.log(name)
                if (item.title.includes(name)) {
                  return <EventCard event={item} key={idx} />
                }
              }
            }
          }
        })}
      </section>
    </section>
  )
}
