'use server'

import { getPayloadUtil } from '@/lib/payload/payload-utils'
import { loginSchema } from '../_forms/schema'
import { cookies } from 'next/headers'

export async function loginUser(email: string, password: string) {
  const data = loginSchema.parse({
    email,
    password,
  })

  const payload = await getPayloadUtil()
  const res = await payload.login({
    collection: 'customers',
    data: {
      email: data.email,
      password: data.password,
    },
    // data: {
    //   email: 'dummy@gmail.com',
    //   password: 'password',
    // },
  })

  // // console.log(res)

  cookies().set('hackathon-token', res.token ?? '', {
    // secure: false,
    // sameSite: 'strict',
    // expires: new Date(res.exp ?? 1 * 1000),
    // httpOnly: false,
  })

  // console.log(res)
  // redirect('/')
}
