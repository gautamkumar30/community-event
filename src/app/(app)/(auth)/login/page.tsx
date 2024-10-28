import { getPayloadUtil } from '@/lib/payload/payload-utils'
import LoginForm from './_forms/login-form'
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
      <h1 className="text-5xl text-primary font-bold">Login to your account</h1>
      <LoginForm />
    </div>
  )
}

export default page
