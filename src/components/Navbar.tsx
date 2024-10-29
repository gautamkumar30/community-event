import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <div className="w-[200px] px-5 h-[200vh] bg-pink-100 ">
      <div className="flex flex-col gap-4 font-semibold text-start  py-20">
        <Link href={'/'}>
          <Button className="h-auto text-lg py-2 font-bold px-6 w-full">Home</Button>
        </Link>
        <Link href={'/createevent'}>
          <Button className="h-auto text-lg py-2 font-bold px-6 w-full">Create Event</Button>
        </Link>
        <Link href={'/logout'}>
          <Button className="h-auto text-lg py-2 font-bold px-6 w-full">Log Out</Button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
