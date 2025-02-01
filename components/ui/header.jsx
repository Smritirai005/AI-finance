

import React from 'react'
import { SignInButton,SignedOut,SignedIn,UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import Image from "next/image";
import { Button } from "@/components/ui/button";





const Header = () => {
  return (
    <div className='fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b'>
      <nav className='container mx-auto px-4 py-4 flex items-center justify-between'> 
        <Link href="/"><Image src={"/logo.png"} alt="fealth logo" height={60} width={400} className="h-12 w-auto object-contain"></Image></Link>
      
        <SignedOut>
          <SignInButton forceRedirectUrl='/dashboard'>
          <Button variant="outline">Login</Button></SignInButton>
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
      </nav>
    </div>
  )
}

export default Header;
