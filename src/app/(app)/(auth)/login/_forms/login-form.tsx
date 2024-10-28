'use client'

import { loginUser } from '../_actions/loginUser'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { FormEvent, useState } from 'react'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation'
import { PasswordInput } from '@/components/ui/password-input'

const LoginForm = () => {
  const [pending, setPending] = useState(false)

  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPending(true)
    const formData = new FormData(e.target as HTMLFormElement)
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    try {
      await loginUser(email, password)

      toast.success('Successfully logged in!')

      router.push('/')
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error('Unable to login. Please try again.')
      }
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="w-full max-w-96">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 ">
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter email"
            className="border border-gray-600 p-3 rounded-lg"
            required
          />
        </div>
        <div className="flex flex-col gap-4">
          <Label>Password</Label>
          <PasswordInput
            name="password"
            placeholder="Enter password"
            required
            className="border border-gray-600 p-3 rounded-lg"
            minLength={8}
          />
        </div>
        <Button
          disabled={pending}
          type="submit"
          className="bg-primary text-white font-semibold p-5 rounded-lg"
        >
          Login
        </Button>
      </form>
      <p className="mt-4 text-center">
        <span className="opacity-60">Don{"'"}t have an account? </span>
        <Link href={'/signup'} className="text-primary font-semibold opacity-85">
          Create now
        </Link>
      </p>
    </div>
  )
}

export default LoginForm
