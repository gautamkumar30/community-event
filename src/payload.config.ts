// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { s3Storage } from '@payloadcms/storage-s3'
import { env } from './env'

import { Users, Customer, Events } from './collections'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,

    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      graphics: {
        Icon: {
          path: '@/components/payload/Icon',
        },
        Logo: {
          path: '@/components/payload/Logo',
        },
      },
    },
  },
  collections: [Users, Customer, Events],

  editor: lexicalEditor({
    admin: {
      hideGutter: false,
    },
    lexical: {
      disableEvents: true,
      namespace: '',
      theme: {},
    },
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    s3Storage({
      collections: {},
      bucket: env.AWS_S3_BUCKET,
      config: {
        forcePathStyle: true,
        credentials: {
          accessKeyId: env.AWS_ACCESS_KEY_ID,
          secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
        },
        region: env.AWS_REGION,
        endpoint: env.AWS_S3_ENDPOINT,
      },
      disableLocalStorage: true,
    }),
  ],
  cookiePrefix: 'hackathon',
})
