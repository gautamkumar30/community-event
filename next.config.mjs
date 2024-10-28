import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here

  images: {
    domains: ['assets.aceternity.com'],
  },
}

export default withPayload(nextConfig)
