import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function getPayloadUtil() {
  return await getPayload({
    config: configPromise,
  })
}
