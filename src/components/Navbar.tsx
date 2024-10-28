import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="w-[300px] h-[200vh] bg-pink-100 ">
      <div className="flex flex-col gap-4 font-semibold text-center py-20">
        <Link href={'/'}>HOME</Link>
        <Link href={'/createevent'}>CREATE EVENT</Link>
        <Link href={'/logout'}>LOG OUT</Link>
      </div>
    </div>
  )
}

export default Navbar
