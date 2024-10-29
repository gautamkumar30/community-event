import { CollectionConfig } from 'payload'

export const Bookings: CollectionConfig = {
  slug: 'bookings',

  admin: {
    useAsTitle: 'event',
    group: 'Event Management',
  },

  labels: {
    singular: 'Booking',
    plural: 'Bookings',
  },

  fields: [
    {
      name: 'event',
      label: 'Event',
      type: 'relationship',
      relationTo: 'events',
      required: true,
    },
    {
      name: 'user',
      label: 'User',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'ticketType',
      label: 'Ticket Type',
      type: 'text',
      required: true,
    },
    {
      name: 'quantity',
      label: 'Quantity',
      type: 'number',
      required: true,
    },
    {
      name: 'status',
      label: 'Status',
      type: 'text',
      required: true,
    },
    {
      name: 'createdAt',
      label: 'Created At',
      type: 'date',
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeChange: [({ value }) => value || new Date().toISOString()],
      },
    },
    {
      name: 'updatedAt',
      label: 'Updated At',
      type: 'date',
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeChange: [({ value }) => new Date().toISOString()],
      },
    },
  ],
}
