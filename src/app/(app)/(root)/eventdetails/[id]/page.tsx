import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Event } from '@/payload-types' // Assuming the Event interface is in payload-types.ts
import { getPayloadUtil } from '@/lib/payload/payload-utils'

interface Props {
  params: {
    id: string
  }
}
const EventDetails = async ({ params: { id } }: Props) => {
  const payload = await getPayloadUtil()

  const event = await payload.findByID({ collection: 'events', id })

  if (!event) {
    return <div>Loading...</div>
  }

  return (
    <div className="font-bricolage w-full flex items-start justify-start">
      <Navbar />
      <section className="py-10 px-10 grow">
        <h1 className="font-custom font-bri">Event Details</h1>

        <section className="mt-10">
          <div className="w-full h-[200px] overflow-hidden">
            <img src={event.imageUrl} alt={event.title} className="rounded-tl-3xl rounded-tr-3xl" />
          </div>

          <div>
            <div className="py-6 px-8">
              <div className="flex justify-between">
                <p className="opacity-70">{new Date(event.date).toLocaleDateString()}</p>
                <p className="opacity-70">{event.location}</p>
              </div>

              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">{event.title}</h1>
                <p className="text-pink-400 font-semibold">
                  {event.tags?.map((tag) => tag.tag).join(', ')}
                </p>
              </div>

              <div className="w-[800px]">
                <p className="mt-4 opacity-70">{event.description}</p>
              </div>

              <div className="mt-8 flex justify-between">
                <div className="flex items-center gap-4">
                  <p className="text-lg font-semibold">Interested in the event?</p>

                  <Link href={'/registersuccess'}>
                    <Button className={'bg-pink-400 text-white px-10'}>Register</Button>
                  </Link>
                </div>
                <p className="text-4xl font-bold -translate-y-2">4/5</p>
              </div>
            </div>
          </div>

          <section className="px-8 mt-20">
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
                  <Button className="bg-pink-400 text-white">Buy Ticket</Button>
                </div>
              ))}
            </div>
          </section>

          <section className="px-8 mt-20 flex gap-4 items-center">
            <h2 className="text-2xl font-bold">Rate Now?</h2>
            <input
              type="number"
              className="rounded-xl px-4 py-3 bg-gray-100"
              placeholder="4.5/5"
              required
            />
            <Button className="px-10 text-white">Rate</Button>
          </section>

          <section className="px-8 mt-20">
            <h2 className="text-2xl font-bold">Public opinions</h2>

            <section className="mt-6 flex flex-col gap-6">
              {[1, 2, 3, 4, 5].map((item, idx) => {
                return (
                  <div className="flex gap-6 items-center" key={item}>
                    <div className="w-[40px] h-[40px] bg-gray-300 rounded-full"></div>

                    <div className="flex flex-col gap-1">
                      <p className="opacity-80">
                        "The concert is great and too good to hear."
                        <span className="font-semibold text-lg">*4.5*</span>
                      </p>
                      <p>
                        Organized by <span className="font-semibold">Balasubramaniya V</span>
                      </p>
                    </div>
                  </div>
                )
              })}
            </section>
          </section>
        </section>
      </section>
    </div>
  )
}

export default EventDetails