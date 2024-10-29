import Navbar from '@/components/Navbar'
import React from 'react'
import FeedbackDisplay from './_component/FeedbackDisplay'
import { getPayloadUtil } from '@/lib/payload/payload-utils'

const page = async () => {
  const paylaod = await getPayloadUtil()

  const feedbacks = await paylaod.find({
    collection: 'feedback',
  })

  console.log(feedbacks.docs)
  return (
    <div className="flex">
      <Navbar />
      <div className="py-10 px-10">
        <p className="text-center text-4xl font-semibold pb-5 font-sans">Feedbacks</p>
        <FeedbackDisplay feedbackItems={feedbacks.docs} />
      </div>
    </div>
  )
}

export default page
