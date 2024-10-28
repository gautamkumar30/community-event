'use client'

import { SignupUser } from '../_actions/signup-users'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { Label } from '@/components/ui/label'
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { PasswordInput } from '@/components/ui/password-input'

const SignupForm = () => {
  const router = useRouter()
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirm-password') as string
    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
      return
    }
    try {
      await SignupUser(email, password)

      toast.success('Successfully created account!')
      router.push('/')
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error('Unable to create account. Please try again.')
      }
    }
  }
  return (
    <div className="w-full max-w-96">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 ">
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Enter email"
            required
            name="email"
            className="border border-gray-600 p-3 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-4">
          <Label>Password</Label>
          <PasswordInput
            minLength={8}
            placeholder="Enter password"
            name="password"
            required
            className="border border-gray-600 p-3 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-4">
          <Label>Confirm Password</Label>
          <PasswordInput
            minLength={8}
            placeholder="Retype Password"
            name="confirm-password"
            required
            className="border border-gray-600 p-3 rounded-lg"
          />
        </div>
        <Button type="submit" className="bg-primary text-white font-semibold p-5 rounded-lg">
          Create Account
        </Button>
      </form>
      <p className="mt-4 text-center">
        <span className="opacity-60">Already have an account? </span>
        <Link href={'/login'} className="text-primary font-semibold opacity-85">
          Login
        </Link>
      </p>
    </div>
  )
}

export default SignupForm
