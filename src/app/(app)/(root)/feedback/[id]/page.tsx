import React from 'react'
import FeedbackForm from './_component/FeedbackForm'
import Navbar from '@/components/Navbar'

const page = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="w-full py-20">
        <FeedbackForm />
      </div>
    </div>
  )
}

export default page
