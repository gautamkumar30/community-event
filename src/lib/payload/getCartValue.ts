import { Customer } from '@/payload-types'
import { CartValue } from '@/types'
import { getUser } from './getUser'
import { unstable_cache } from 'next/cache'
import { headers } from 'next/headers'

export const getCartValue = async (header: ReturnType<typeof headers>) => {
  // // console.log(header)

  const cartValue: CartValue = {
    itemTotal: 0,
    deliveryFee: 0,
    platformFee: 0,
    gst: 0,
    overallTotal: 0,
  }
  try {
    const user: Customer | null = (await getUser(header)) as Customer

    // // console.log(user)

    // // console.log(user?.cart)

    // // console.log(user.cart?.items)
    if (user && user.cart?.items) {
      // // console.log(user.cart?.items)

      user.cart.items.map((item) => {
        cartValue.itemTotal +=
          item.quantity * (typeof item.product == 'object' ? item.product.discountedPrice : 0)
      })

      cartValue.deliveryFee = cartValue.itemTotal * 0.05
      cartValue.platformFee = cartValue.itemTotal * 0.05
      cartValue.gst = cartValue.itemTotal * 0.05

      cartValue.overallTotal =
        cartValue.itemTotal + cartValue.deliveryFee + cartValue.platformFee + cartValue.gst

      // // console.log(cartValue)
    }

    // // console.log(cartValue)

    return cartValue
  } catch (error) {
    console.log(error)
    return cartValue
  }
}

export const getCachedCart = unstable_cache(
  (header: ReturnType<typeof headers>) => getCartValue(header),
  ['user-cart'],
  { revalidate: 1, tags: ['user-cart'] },
)
