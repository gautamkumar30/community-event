import { Star, ThumbsUp, ThumbsDown } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Feedback } from '@/payload-types'

type FeedbackDisplayProps = {
  feedbackItems: Feedback[]
}

export default function FeedbackDisplay({ feedbackItems }: FeedbackDisplayProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {feedbackItems.map((item, index) => (
        <Card key={index} className="w-full">
          <CardHeader>
            <CardTitle>{item.eventTitle}</CardTitle>
            <CardDescription>Feedback from {item.customerName}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold">Overall Experience</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={
                        i < item.overallExperienceRating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }
                      size={20}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Recommend Event</span>
                {item.recommendEvent === 'yes' ? (
                  <ThumbsUp className="text-green-500" size={20} />
                ) : (
                  <ThumbsDown className="text-red-500" size={20} />
                )}
              </div>
              <div>
                <span className="font-semibold">Favorite Experience</span>
                <p className="text-sm text-gray-600">
                  {item.specificFeedback.favoriteExperience || 'Not provided'}
                </p>
              </div>
              <div>
                <span className="font-semibold">Areas for Improvement</span>
                <p className="text-sm text-gray-600">
                  {item.specificFeedback.areasForImprovement || 'Not provided'}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="font-semibold">Content Quality</span>
                  <Badge variant="secondary">{item.specificFeedback.qualityOfContent}/5</Badge>
                </div>
                <div>
                  <span className="font-semibold">Speakers</span>
                  <Badge variant="secondary">
                    {item.specificFeedback.satisfactionWithSpeakers}/5
                  </Badge>
                </div>
                <div>
                  <span className="font-semibold">Venue</span>
                  <Badge variant="secondary">
                    {item.logisticsAndOrganization.venueSatisfaction}/5
                  </Badge>
                </div>
                <div>
                  <span className="font-semibold">Attend Again</span>
                  <Badge
                    variant={
                      item.additionalInsights.wouldAttendAgain === 'yes'
                        ? 'secondary'
                        : 'destructive'
                    }
                  >
                    {item.additionalInsights.wouldAttendAgain === 'yes' ? 'Yes' : 'No'}
                  </Badge>
                </div>
              </div>
              {item.openFeedback && (
                <div>
                  <span className="font-semibold">Additional Feedback</span>
                  <p className="text-sm text-gray-600">{item.openFeedback}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
