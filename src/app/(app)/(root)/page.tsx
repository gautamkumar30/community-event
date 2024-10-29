import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { UpcomingEvents } from './_components/upcoming-events'
import { Metrics } from './_components/metrics'
import { getPayloadUtil } from '@/lib/payload/payload-utils'

const page = async () => {
  const paylaod = await getPayloadUtil()

  const events = await paylaod.find({
    collection: 'events',
  })

  console.log(events.docs)

  return (
    <div className="font-bricolage w-full flex items-start justify-start">
      <Navbar />

      <section className="py-10 flex-grow px-10">
        <header className="w-full flex justify-between">
          <h1>Dashboard</h1>
          {/* <Link href={'/createevent'}>
            <Button
              className={cn(
                'text-white text-lg px-10 py-6 rounded-xl hover:-translate-y-2    duration-500 transition-all',
              )}
            >
              Create Event
            </Button>
          </Link> */}
        </header>

        <Metrics />

        <UpcomingEvents events={events.docs} />
      </section>
    </div>
  )
}

export default page
