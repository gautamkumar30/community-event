import Navbar from '@/components/Navbar'
import CreateEventForm from './_components/create-event-form'

const page = () => {
  return (
    <div className="font-bricolage w-full flex items-start justify-start ">
      <Navbar />

      <CreateEventForm />
    </div>
  )
}

export default page
