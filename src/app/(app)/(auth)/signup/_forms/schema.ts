import { z } from 'zod'

export const signupSchema = z
  .object({
    email: z.string().email({
      message: 'Please enter a valid email address',
    }),
    password: z.string().min(8, {
      message: 'Password must be at least 8 characters long',
    }),
    confirmPassword: z.string().min(8, {
      message: 'Password must be at least 8 characters long',
    }),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        message: 'Passwords do not match',
        path: ['confirmPassword'],
        code: 'custom',
      })
    }
  })
