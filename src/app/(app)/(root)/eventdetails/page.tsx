/* eslint-disable react/no-unescaped-entities */
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { getPayloadUtil } from '@/lib/payload/payload-utils'
import Image from 'next/image'
import Link from 'next/link'

const EventDetails = async () => {
  const paylaod = await getPayloadUtil()

  const events = await paylaod.find({
    collection: 'events',
  })

  const eventIdToShow = 1
  const event = events.docs.find((event) => event.id === eventIdToShow)

  console.log(event)

  return (
    <div className="font-bricolage w-full flex  items-start justify-start">
      <Navbar />
      <section className="py-10 px-10 grow">
        <h1 className="font-custom font-bri">Event Details</h1>

        <section className="mt-10">
          <div className="w-full h-[200px] relative overflow-hidden">
            <Image src={'/public/one-image.jpg'} fill alt="image" className="object-cover" />
          </div>

          <div>
            <div className="py-6 px-8">
              <div className="flex justify-between">
                <p className="opacity-70">09/10/2024</p>
                <p className="opacity-70">Bangalore</p>
              </div>

              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">{event?.title}</h1>
                <p className="text-pink-400 font-semibold">{}</p>
              </div>

              <div className="w-[800px]">
                <p className="mt-4 opacity-70">
                  This is a great event don't miss it.This is a great event don't miss it.This is a
                  great event don't miss it.This is a great event don't miss it.This is a great
                  event don't miss it.This is a great event don't miss it.This is a great event
                  don't miss it.This is a great event don't miss it.This is a great event don't miss
                  it.This is a great event don't miss it.This is a great event don't miss it.This is
                  a great event don't miss it.This is a great event don't miss it.This is a great
                  event don't miss it.This is a great event don't miss it.This is a great event
                  don't miss it.This is a great event don't miss it.
                </p>
              </div>

              <div className="mt-8 flex justify-between ">
                <div className="flex items-center gap-4">
                  <p className="text-lg font-semibold">Interested for the event?</p>

                  <Link href={'/registersuccess'}>
                    <Button className={'bg-pink-400 text-white px-10'}>Register</Button>
                  </Link>
                </div>
                <p className="text-4xl font-bold -translate-y-2  ">4/5</p>
              </div>
            </div>
          </div>

          <section className="px-8 mt-20 flex gap-4 items-center">
            <h2 className="text-2xl font-bold ">Rate Now?</h2>
            <input
              type="number"
              className="rounded-xl px-4 py-3 bg-gray-100"
              placeholder="4.5/5"
              required
            />
            <Button className="px-10 text-white">Rate</Button>
          </section>

          <section className="px-8 mt-20">
            <h2 className="text-2xl font-bold ">Public opinions</h2>

            <section className="mt-6 flex flex-col gap-6">
              {[1, 2, 3, 4, 5].map((item, idx) => {
                return (
                  <div className="flex gap-6 items-center" key={idx}>
                    <div className="w-[40px] h-[40px] bg-gray-300 rounded-full"></div>

                    <div className="flex flex-col gap-1">
                      <p className="opacity-80">
                        "The concert is great and too good to hear."
                        <span
                          className="font-semibold text-lg
                        "
                        >
                          *4.5*
                        </span>
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
