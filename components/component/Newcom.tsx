/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/4Ot1UentZos
 */
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export function Newcom () {
  return (
    <div className='mx-auto max-w-[350px] space-y-6'>
      <div className='space-y-2 text-center'>
        <h1 className='text-3xl font-bold'>Sign Up</h1>
        <p className='text-zinc-500 dark:text-zinc-400'>
          Enter your information to create an account
        </p>
      </div>
      <div className='space-y-4'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='space-y-2'>
            <Label htmlFor='first-name'>First name</Label>
            <Input id='first-name' placeholder='Lee' required />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='last-name'>Last name</Label>
            <Input id='last-name' placeholder='Robinson' required />
          </div>
        </div>
        <div className='space-y-2'>
          <Label htmlFor='email'>Email</Label>
          <Input id='email' placeholder='m@example.com' required type='email' />
        </div>
        <div className='space-y-2'>
          <Label htmlFor='password'>Password</Label>
          <Input id='password' required type='password' />
        </div>
        <Button className='w-full' type='submit'>
          Sign Up
        </Button>
      </div>
      <Separator className='my-8' />
      <div className='space-y-4'>
        <Button className='w-full' variant='outline'>
          Sign up with Google
        </Button>
        <Button className='w-full' variant='outline'>
          Sign up with Facebook
        </Button>
        <Button className='w-full' variant='outline'>
          Sign up with Apple
        </Button>
        <div className='mt-4 text-center text-sm'>
          Already have an account?
          <Link className='underline' href='#'>
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}
