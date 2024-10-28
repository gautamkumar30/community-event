import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const page = () => {
  return (
    <main className="font-bricolage w-full h-screen items-center justify-center flex flex-col">
      <h1 className="font-semibold font-bricolage">Event Created Successfully !!!</h1>
      <p className="opacity-70 text-lg mt-4">Event ID: hdfsfskdkjfsfkdj</p>

      <Link href={'/'}>
        {/* <Button className={cn(cta)}>Back to Home</Button> */}
        <Button
          className={cn(
            'text-white text-lg px-10 py-6 rounded-xl hover:-translate-y-2    duration-500 transition-all',
            'mt-20',
          )}
        >
          Back to Home
        </Button>
      </Link>
    </main>
  )
}

export default page
