import type { CollectionConfig } from 'payload'

export const Customer: CollectionConfig = {
  slug: 'customers',
  auth: {
    cookies: {
      secure: false,
      sameSite: 'Strict',
    },
  },

  admin: {
    useAsTitle: 'email',
    description: 'Customers who have signed up for the Auth Service',
    group: 'User Management',
  },

  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: ({ req, id }) => {
      if (req.user) {
        return req.user.id === id
      }
      return false
    },
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
    },
    {
      name: 'role',
      label: 'Role',
      required: true,
      defaultValue: 'customer',
      type: 'select',
      options: [{ label: 'Customer', value: 'customer' }],
      hasMany: false,
    },
  ],
}
