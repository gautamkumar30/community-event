// 'use server'

// import { headers } from 'next/headers'
// import { getPayloadUtil } from './payload-utils'
// import { Customer } from '@/payload-types'
// import { unstable_cache } from 'next/cache'

// export const getUser = async (header: ReturnType<typeof headers>) => {
//   // console.log(header)

//   const payload = await getPayloadUtil()
//   const auth = await payload.auth({
//     headers: header,
//   })

//   // console.log(auth)

//   // // console.log(auth.user)

//   if (auth.user) {
//     if (auth.user.collection == 'customers') {
//       auth.user.cart?.items?.sort((a, b) => {
//         if (typeof a.product == 'object' && typeof b.product == 'object') {
//           return a.product.id - b.product.id
//         } else if (typeof a.product == 'number' && typeof b.product == 'number') {
//           return a.product - b.product
//         } else {
//           return -1
//         }
//       })
//       // // console.log(auth.user.cart)
//     }
//     // console.log(auth.user)

//     return auth.user as Customer
//   } else {
//     return null
//   }
// }

// export const getCachedUser = unstable_cache(
//   (header: ReturnType<typeof headers>) => getUser(header),
//   ['customers'],
//   {
//     revalidate: 1,
//     tags: ['customers'],
//   },
// )
