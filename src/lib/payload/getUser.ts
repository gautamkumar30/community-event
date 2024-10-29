'use server'

import { headers } from 'next/headers'
import { getPayloadUtil } from './payload-utils'
import { Customer } from '@/payload-types'

export const getUser = async (header: ReturnType<typeof headers>) => {
  // console.log(header)

  const payload = await getPayloadUtil()
  const auth = await payload.auth({
    headers: header,
  })

  if (auth.user) {
    return auth.user as Customer
  } else {
    return null
  }
}

// export const getCachedUser = unstable_cache(
//   (header: ReturnType<typeof headers>) => getUser(header),
//   ['customers'],
//   {
//     revalidate: 1,
//     tags: ['customers'],
//   },
// )
