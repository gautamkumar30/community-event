'use server'

import { getPayloadUtil } from '@/lib/payload/payload-utils'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function SignupUser(email: string, password: string) {
  // console.log(email, password)
  const payload = await getPayloadUtil()
  await payload.create({
    collection: 'customers',
    data: {
      email,
      password,
      role: 'customer',
    },
  })
  const res = await payload.login({
    collection: 'customers',
    data: {
      email,
      password,
    },
  })
  cookies().set('hackathon-token', res.token ?? '', {
    // secure: false,
    // sameSite: 'strict',
    // expires: new Date(res.exp ?? 1 * 1000),
    // httpOnly: true,
  })

  redirect('/')
}
