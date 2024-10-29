'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'

const formSchema = z.object({
  customerName: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  eventTitle: z.string().min(2, { message: 'Event title must be at least 2 characters.' }),
  overallExperienceRating: z.number().min(1).max(5),
  recommendEvent: z.enum(['yes', 'no']),
  favoriteExperience: z.string().optional(),
  areasForImprovement: z.string().optional(),
  qualityOfContent: z.number().min(1).max(5),
  satisfactionWithSpeakers: z.number().min(1).max(5),
  venueSatisfaction: z.number().min(1).max(5),
  registrationProcess: z.string().optional(),
  topicsForFutureEvents: z.string().optional(),
  sourceOfEventInformation: z.string().optional(),
  wouldAttendAgain: z.enum(['yes', 'no']),
  openFeedback: z.string().optional(),
})

export default function FeedbackForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      overallExperienceRating: 3,
      qualityOfContent: 3,
      satisfactionWithSpeakers: 3,
      venueSatisfaction: 3,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Here you would typically send the data to your backend
    console.log(values)
    setTimeout(() => {
      setIsSubmitting(false)
      form.reset()
    }, 1000)
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="font-bold text-3xl">Event Feedback</CardTitle>
        <CardDescription>
          We value your opinion. Please share your thoughts about the event.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="customerName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="eventTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Annual Tech Conference" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="overallExperienceRating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Overall Experience Rating</FormLabel>
                  <FormControl>
                    <Slider
                      min={1}
                      max={5}
                      step={1}
                      value={[field.value]}
                      onValueChange={(value) => field.onChange(value[0])}
                    />
                  </FormControl>
                  <FormDescription>Rate from 1 (Poor) to 5 (Excellent)</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="recommendEvent"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Would You Recommend This Event?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="favoriteExperience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Favorite Experience</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your favorite part of the event"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="areasForImprovement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Areas for Improvement</FormLabel>
                  <FormControl>
                    <Textarea placeholder="What could we improve for next time?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="qualityOfContent"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quality of Content</FormLabel>
                  <FormControl>
                    <Slider
                      min={1}
                      max={5}
                      step={1}
                      value={[field.value]}
                      onValueChange={(value) => field.onChange(value[0])}
                    />
                  </FormControl>
                  <FormDescription>Rate from 1 (Poor) to 5 (Excellent)</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="satisfactionWithSpeakers"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Satisfaction with Speakers</FormLabel>
                  <FormControl>
                    <Slider
                      min={1}
                      max={5}
                      step={1}
                      value={[field.value]}
                      onValueChange={(value) => field.onChange(value[0])}
                    />
                  </FormControl>
                  <FormDescription>Rate from 1 (Poor) to 5 (Excellent)</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="venueSatisfaction"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Venue Satisfaction</FormLabel>
                  <FormControl>
                    <Slider
                      min={1}
                      max={5}
                      step={1}
                      value={[field.value]}
                      onValueChange={(value) => field.onChange(value[0])}
                    />
                  </FormControl>
                  <FormDescription>Rate from 1 (Poor) to 5 (Excellent)</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="registrationProcess"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Registration Process</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="How was your experience with the registration process?"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="topicsForFutureEvents"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Topics for Future Events</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="What topics would you like to see in future events?"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sourceOfEventInformation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How Did You Hear About This Event?</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Social media, Email, Friend" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="wouldAttendAgain"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Would You Attend This Event Again?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="openFeedback"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Open Feedback</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Any additional comments or suggestions?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <Button type="submit" onClick={form.handleSubmit(onSubmit)} disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
        </Button>
      </CardFooter>
    </Card>
  )
}
