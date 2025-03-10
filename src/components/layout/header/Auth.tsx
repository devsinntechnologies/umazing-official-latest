import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Auth = () => {
  return (
    <div>
      <Button variant='default'>
        <Link href='/login'>
        Login
        </Link>
      </Button>
    </div>
  )
}

export default Auth