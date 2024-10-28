import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    hidden: true,
    hideAPIURL: true,
  },
  auth: true,
  fields: [],
  access: {
    read: () => true,
    create: () => false,
    update: () => true,
    delete: () => true,
  },
}
