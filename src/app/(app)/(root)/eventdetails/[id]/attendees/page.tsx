import React from 'react'
import { Booking } from '@/payload-types' // Assuming the Booking interface is in payload-types.ts
import { getPayloadUtil } from '@/lib/payload/payload-utils'

const Page = async () => {
  const payload = await getPayloadUtil()

  const bookingsCol = await payload.find({
    collection: 'bookings',
    // where: {
    //   and: [
    //     {
    //       'event.id': {
    //         equals: 1,
    //       },
    //     },
    //   ],
    // },
  })

  const bookings = bookingsCol.docs as Booking[]

  if (!bookings) {
    return <div>No Bookings Found</div>
  }

  return (
    <div className="font-bricolage w-full flex flex-col items-center justify-start py-10 px-10 bg-gray-100 min-h-screen">
      <h1 className="font-custom font-bri text-4xl mb-10 text-gray-800">
        Attendees and Booking Details
      </h1>
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead className="bg-primary text-white">
            <tr>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Event</th>
              <th className="py-3 px-4 text-left">User</th>
              <th className="py-3 px-4 text-left">Ticket Type</th>
              <th className="py-3 px-4 text-left">Quantity</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Booked On</th>
              {/* <th className="py-3 px-4 text-left">Price</th> */}
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-gray-100 transition-colors">
                <td className="py-3 px-4 border-b border-gray-200">{booking.id}</td>
                <td className="py-3 px-4 border-b border-gray-200">
                  {typeof booking.event === 'number' ? booking.event : booking.event.title}
                </td>
                <td className="py-3 px-4 border-b border-gray-200">
                  {typeof booking.user === 'number' ? booking.user : booking.user.email}
                </td>
                <td className="py-3 px-4 border-b border-gray-200">{booking.ticketType}</td>
                <td className="py-3 px-4 border-b border-gray-200">{booking.quantity}</td>
                <td className="py-3 px-4 border-b border-gray-200">{booking.status}</td>
                <td className="py-3 px-4 border-b border-gray-200">
                  {new Date(booking.createdAt).toLocaleDateString()}
                </td>
                {/* <td className="py-3 px-4 border-b border-gray-200">
                  {new Date(booking.ticketType).toLocaleDateString()}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Page
