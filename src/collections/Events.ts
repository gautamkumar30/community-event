import { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',

  admin: {
    useAsTitle: 'name',
    group: 'Event Management',
  },

  labels: {
    singular: 'Event',
    plural: 'Events',
  },

  fields: [
    {
      name: 'name',
      label: 'Event Name',
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
      name: 'location',
      label: 'Location',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      label: 'Date',
      type: 'date',
      required: true,
    },
    {
      name: 'organizedBy',
      label: 'Organized By',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      label: 'Category',
      type: 'text',
      required: true,
    },
  ],
}
