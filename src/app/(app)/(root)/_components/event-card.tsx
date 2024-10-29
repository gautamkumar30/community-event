import { Event } from '@/payload-types'
import Link from 'next/link'

// export interface EventType {
//   name: string
//   organizerName: string
//   location: string
//   date: string
//   description: string
//   category: 'music' | 'dance' | 'audiolaunch' | 'fansmeet' | ''
// }

interface Props {
  event: Event
}
export const EventCard = ({ event }: Props) => {
  return (
    <Link href={'/eventdetails/' + event.id}>
      <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
        <div className="w-full h-[200px] bg-primary/80 overflow-hidden">
          <img src={event.imageUrl} alt="" />
        </div>
        <div className="py-6 px-8">
          <div className="flex justify-between">
            <p className="opacity-70">{event.title}</p>
            <p className="opacity-70">{event.location}</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="mt-2 text-lg font-semibold capitalize">{event.title}</p>
            <p className="font-semibold text-pink-400 ">{'Vibe, Concert'}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
