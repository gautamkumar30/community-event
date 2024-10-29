// app/_actions/feedback-actions.ts
'use server'

import { z } from 'zod'
import { getPayloadUtil } from '@/lib/payload/payload-utils'

// Form validation schema (should match client-side schema)
const formSchema = z.object({
  customerName: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  eventTitle: z.string().min(2, { message: 'Event title must be at least 2 characters.' }),
  overallExperienceRating: z.number().min(1).max(5),
  recommendEvent: z.enum(['yes', 'no']),
  specificFeedback: z.object({
    favoriteExperience: z.string().default(''),
    areasForImprovement: z.string().default(''),
    qualityOfContent: z.number().min(1).max(5),
    satisfactionWithSpeakers: z.number().min(1).max(5),
  }),
  logisticsAndOrganization: z.object({
    venueSatisfaction: z.number().min(1).max(5),
    registrationProcess: z.string().default(''),
  }),
  additionalInsights: z.object({
    topicsForFutureEvents: z.string().default(''),
    sourceOfEventInformation: z.string().default(''),
    wouldAttendAgain: z.enum(['yes', 'no']),
  }),
  openFeedback: z.string().default(''),
})

export type FeedbackFormData = z.infer<typeof formSchema>

export async function submitFeedback(data: FeedbackFormData) {
  try {
    // Validate the incoming data
    const validatedData = formSchema.parse(data)

    // Get Payload CMS instance
    const payload = await getPayloadUtil()

    // Create feedback entry in Payload CMS
    const response = await payload.create({
      collection: 'feedback',
      data: validatedData,
    })

    return { success: true, data: response }
  } catch (error) {
    console.error('Error submitting feedback:', error)

    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: 'Invalid form data',
        details: error.errors,
      }
    }

    // Handle other errors
    return {
      success: false,
      error: 'Failed to submit feedback',
    }
  }
}
