import { CollectionConfig } from 'payload'

export const Feedback: CollectionConfig = {
  slug: 'feedback',

  admin: {
    useAsTitle: 'eventTitle',
    group: 'Feedback Management',
  },

  labels: {
    singular: 'Feedback',
    plural: 'Feedbacks',
  },

  fields: [
    {
      name: 'customerName',
      label: 'Customer Name',
      type: 'text',
      required: true,
    },
    {
      name: 'eventTitle',
      label: 'Event Title',
      type: 'text',
      required: true,
    },
    {
      name: 'overallExperienceRating',
      label: 'Overall Experience Rating',
      type: 'number',
      required: true,
      min: 1, // Assuming a rating scale from 1
      max: 5, // Assuming a rating scale up to 5
    },
    {
      name: 'recommendEvent',
      label: 'Would You Recommend This Event?',
      type: 'select',
      options: [
        {
          label: 'Yes',
          value: 'yes',
        },
        {
          label: 'No',
          value: 'no',
        },
      ],
      required: true,
    },
    {
      name: 'specificFeedback',
      label: 'Specific Feedback',
      type: 'group',
      fields: [
        {
          name: 'favoriteExperience',
          label: 'Favorite Experience',
          type: 'textarea',
          required: false,
        },
        {
          name: 'areasForImprovement',
          label: 'Areas for Improvement',
          type: 'textarea',
          required: false,
        },
        {
          name: 'qualityOfContent',
          label: 'Quality of Content',
          type: 'number',
          required: true,
          min: 1,
          max: 5,
        },
        {
          name: 'satisfactionWithSpeakers',
          label: 'Satisfaction with Speakers',
          type: 'number',
          required: true,
          min: 1,
          max: 5,
        },
      ],
    },
    {
      name: 'logisticsAndOrganization',
      label: 'Logistics and Organization',
      type: 'group',
      fields: [
        {
          name: 'venueSatisfaction',
          label: 'Venue Satisfaction',
          type: 'number',
          required: true,
          min: 1,
          max: 5,
        },
        {
          name: 'registrationProcess',
          label: 'Registration Process',
          type: 'textarea',
          required: false,
        },
      ],
    },
    {
      name: 'additionalInsights',
      label: 'Additional Insights',
      type: 'group',
      fields: [
        {
          name: 'topicsForFutureEvents',
          label: 'Topics for Future Events',
          type: 'textarea',
          required: false,
        },
        {
          name: 'sourceOfEventInformation',
          label: 'How Did You Hear About This Event?',
          type: 'text',
          required: false,
        },
        {
          name: 'wouldAttendAgain',
          label: 'Would You Attend This Event Again?',
          type: 'select',
          options: [
            {
              label: 'Yes',
              value: 'yes',
            },
            {
              label: 'No',
              value: 'no',
            },
          ],
          required: true,
        },
      ],
    },
    {
      name: 'openFeedback',
      label: 'Open Feedback',
      type: 'textarea',
      required: false,
    },
  ],
}
