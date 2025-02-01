"use client";
import React, { useRef } from 'react'
import "@/app/globals.css";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

import { Button } from "@/components/ui/button";




const HeroSection = () => {
    const imageRef=useRef();

    useEffect(() => {
        const imageElement = imageRef.current;
        const handleScroll=()=>{
            const scrollPosition=window.scrollY;
            const scrollThreshold=100;
    
            if(scrollPosition>scrollThreshold){
                imageElement.classList.add("scrolled");
            }
            else{
                imageElement.classList.remove("scrolled");
    
            }
        }
    
        window.addEventListener("scroll",handleScroll)
        return()=>window.removeEventListener("scroll",handleScroll)
    }, []);
    return (
      <div className='mt-20 pb-20 px-4'> {/* Added 'mt-20' for top spacing */}
          <div className=" container mx-auto text-center">
              <h1 className='text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title'>Manage your finances<br/>with intelligence</h1>
          </div>
          <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
              An AI-powered financial management platform that helps you track, analyze, and optimize your spending with real-time insights.
          </p>
          <div className="mt-6 flex justify-center space-x-4"> {/* Added margin for button spacing */}
              <Link href={"/dashboard"}>
                  <Button size="lg" className="px-8">Get Started</Button>
              </Link>
              <Link href={"/dashboard"}>
                  <Button size="lg" variant="outline" className="px-8 ml-4">Watch demo</Button>
              </Link>
          </div>
          <div className='hero-image-wrapper'>
            <div ref={imageRef} className='hero-image'>
                <Image src="/banner.png" width={1180}height={70} alt="Dashboard Preview" className="roumded-lg shadow-2xl bordermx-auto px-4 mt-10 "></Image>
            </div>
          </div>
      </div>
    )
  }
  
export default HeroSection;
  