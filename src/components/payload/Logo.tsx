import React from 'react'
import Image from 'next/image'
export default function Logo() {
  return (
    <Image
      src={'/cms/logo.jpg'}
      style={{
        maxWidth: '20rem',
        borderRadius: '2%',
      }}
      alt="icon"
      height={800}
      width={800}
    />
  )
}
