import { Product } from '@/payload-types'

export type CartValue = {
  itemTotal: number
  deliveryFee: number
  platformFee: number
  gst: number
  overallTotal: number
}

export type CartItem = {
  id?: string | null
  quantity: number
  product: Product | number
}
