import { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',

  admin: {
    useAsTitle: 'title',
    group: 'Event Management',
  },

  labels: {
    singular: 'Event',
    plural: 'Events',
  },

  fields: [
    {
      name: 'title',
      label: 'Event Title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Event Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'date',
      label: 'Date',
      type: 'date',
      required: true,
    },
    {
      name: 'location',
      label: 'Location',
      type: 'text',
      required: true,
    },
    {
      name: 'organizerId',
      label: 'Organizer ID',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'ticketOptions',
      label: 'Ticket Options',
      type: 'array',
      fields: [
        {
          name: 'type',
          label: 'Type',
          type: 'text',
          required: true,
        },
        {
          name: 'price',
          label: 'Price',
          type: 'number',
          required: true,
        },
        {
          name: 'quantity',
          label: 'Quantity',
          type: 'number',
          required: true,
        },
        {
          name: 'sold',
          label: 'Sold',
          type: 'number',
          required: true,
        },
      ],
    },
    {
      name: 'status',
      label: 'Status',
      type: 'text',
      required: true,
    },
    {
      name: 'imageUrl',
      label: 'Image URL',
      type: 'text',
      required: true,
    },
    {
      name: 'tags',
      label: 'Tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          label: 'Tag',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'agenda',
      label: 'Agenda',
      type: 'array',
      fields: [
        {
          name: 'time',
          label: 'Time',
          type: 'text',
          required: true,
        },
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
