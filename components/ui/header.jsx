

import React from 'react'
import { SignInButton,SignedOut,SignedIn,UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import Image from "next/image";



const Header = () => {
  return (
    <div className='fixed top-0'>
      <nav>
        <Link href="/"><Image src={"/logo.png"} alt="fealth logo" height={60} width={200} className="h-12 w-auto object-contain"></Image></Link>
      </nav>
        <SignedOut>
            <SignInButton />
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
    </div>
  )
}

export default Header;
