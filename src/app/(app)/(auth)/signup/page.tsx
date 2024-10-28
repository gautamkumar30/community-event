import { getPayloadUtil } from '@/lib/payload/payload-utils'
import SignupForm from './_forms/signup-form'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

const page = async () => {
  const payload = await getPayloadUtil()
  const auth = await payload.auth({
    headers: headers(),
  })

  if (auth.user) {
    redirect('/')
  }

  return (
    <div className="w-full h-screen min-h-[500px] flex flex-col justify-center items-center gap-16 p-10">
      <h1 className="text-5xl text-primary font-bold">Create a new account</h1>
      <SignupForm />
    </div>
  )
}

export default page
