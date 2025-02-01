

import React from 'react'
import { SignInButton,SignedOut,SignedIn,UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, PenBox } from 'lucide-react';





const Header = () => {
  return (
    <div className='fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b'>
      <nav className='container mx-auto px-4 py-4 flex items-center justify-between'> 
        <Link href="/"><Image src={"/logo.png"} alt="fealth logo" height={60} width={400} className="h-12 w-auto object-contain"></Image></Link>
        <div className='flex items-center space-x-4'>
          <SignedIn>
          <Link href={"/dashboard"} className='text-gray-600 hover:text-blue-600 flex items center gap-2'>
            <Button variant="outline">
              <LayoutDashboard size={18}/>
              <span className='hidden md:inline'>Dashboard</span>
            </Button>

          </Link>
          <Link href={"/transaction/create"} className='text-gray-600 hover:text-blue-600 flex items center gap-2'>
            <Button>
              <PenBox size={18}/>
              <span className='hidden md:inline'>Add transaction</span>
            </Button>

          </Link> 

        </SignedIn>
        </div>
      
        <SignedOut>
          <SignInButton forceRedirectUrl='/dashboard'>
          <Button variant="outline">Login</Button></SignInButton>
        </SignedOut>
        <SignedIn>
            <UserButton 
            appearance={{
              elements:{
                avatarBox:"w-10 h-10"
              }
            }}/>
        </SignedIn>
      </nav>
    </div>
  )
}

export default Header;
