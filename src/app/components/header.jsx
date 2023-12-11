"use client";

import React, { useState } from 'react'
import { ArrowDown, Back, HambergerMenu } from 'iconsax-react'
import chevron from '@/app/images/arrowch.svg'
import Image from 'next/image'
import avatar from '@/app/images/avatar.png'
import header from '@/app/images/header.png'





export const Header = () => {
 

    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [sidebar, showSidebar] = useState(false)

    const handleSideBar = () => {
        showSidebar(!sidebar)
    }

     const handleClick = () => {
        setShow(!show) 
    }
     const handleClick1 = () => {
        setShow1(!show1) 
    }
     const handleClick2 = () => {
        setShow2(!show2) 
    }
     const handleClick3 = () => {
        setShow3(!show3) 
    }

  return (
    <header className=' flex flex-row  xsm:justify-between xsm:px-12 lg:px-20  h-[80px] items-center   fixed left-0 right-0 top-0 shadow-md bg-white z-[999] max-w-[1500px] '>
        <Image className=' w-[60px] h-[60px]' src={header} />
        <div className='nav xsm:hidden lg:flex flex-row gap-7 text-[14px] items-center pl-3 px-20 '> 
        <div className='cursor-pointer flex flex-col gap-1 pt-2.5' >
            <h7 className=' text-[#4a84d6]'>Home</h7>
            <span className='h-1.5 w-1.5 bg-[#4A84D6] rounded-full ml-5'></span>
        </div>
        <div className='relative flex flex-row justify-center gap-2 cursor-pointer'>
        <h7 className='effect '>Solutions</h7>
        {!show1 ? (
                <Image 
                //onMouseEnter={handleClick2}
                onClick={handleClick1} 
                className='' src={chevron} />) :
                (
                    <Image 
                
                onClick={handleClick1} 
                className=' rotate-90 transition-all duration-500 ease-in-out' src={chevron} />
                )}
        <div className={`absolute w-[140px] min-h-[100px] top-14 bg-white ${show1 ? 'flex' : 'hidden'}   flex-col gap-4 text-[14px] px-3 shadow-md border-black/20 border-[1px] right-[.3rem] border-solid transition-all duration-300 ease-in-out text-[#4a84d6] font-medium`}>
                <p className='cursor-pointer'>GoPal</p>
                <p className='cursor-pointer'>GoSchool</p>
                <p className='cursor-pointer'>GoFamily</p>
            </div>
        </div>
        <div className='cursor-pointer relative flex flex-row gap-2'>
        <h7 className='effect '>Products</h7>
        {!show2 ? (
                <Image 
                //onMouseEnter={handleClick2}
                onClick={handleClick2} 
                className='' src={chevron} />) :
                (
                    <Image 
                
                onClick={handleClick2} 
                className=' rotate-90 transition-all duration-500 ease-in-out' src={chevron} />
                )}
        <div className={`absolute w-[140px] min-h-[100px] top-14 bg-white ${show2 ? 'flex' : 'hidden'}   flex-col gap-4 text-[14px] px-3 shadow-md border-black/20 border-[1px] right-[.3rem] border-solid transition-all duration-300 ease-in-out text-[#4a84d6] `}>
                <p className='cursor-pointer'>Paddilife</p>
                <p className='cursor-pointer'>Simplessia</p>
                <p className='cursor-pointer'>Others</p>
            </div>
        </div>
        <div className='cursor-pointer relative flex flex-row gap-2'>
        <h7 className='effect '>Company</h7>
        {!show3 ? (
                <Image 
                //onMouseEnter={handleClick3}
                onClick={handleClick3} 
                className='' src={chevron} />) :
                (
                    <Image 
                
                onClick={handleClick3} 
                className=' rotate-90 transition-all duration-500 ease-in-out' src={chevron} />
                )}
        <div className={`absolute w-[140px] min-h-[100px] top-14 bg-white ${show3 ? 'flex' : 'hidden'}   flex-col gap-4 text-[14px] px-3 shadow-md border-black/20 border-[1px] right-[.3rem] border-solid transition-all duration-300 ease-in-out text-[#4a84d6]`}>
                <p className='cursor-pointer'>Blog</p>
                <p className='cursor-pointer'>Careers</p>
                <p className='cursor-pointer'>About Us</p>
            </div>
        </div>
        </div>
        <div className='xsm:hidden relative w-[180px]  lg:flex flex-row items-center justify-between border-black/20 border-[0.5px] border-solid rounded-md px-2 py-1 group '>
            <Image className='w-[40px] h-[40px]' src={avatar} alt="" />
            <span className='flex flex-row gap-2'>
                <p>Mishael</p>

                {!show ? (
                <Image 
                //onMouseEnter={handleClick}
                onClick={handleClick} 
                className='' src={chevron} />) :
                (
                    <Image 
                
                onClick={handleClick} 
                className=' rotate-90 transition-all duration-500 ease-in-out' src={chevron} />
                )}
            </span>
            <div className={`absolute w-[180px] min-h-[100px] top-14 bg-white ${show ? 'flex' : 'hidden'}   flex-col gap-4 text-[14px] px-3 shadow-md border-black/20 border-[1px] right-[.3rem] border-solid transition-all duration-300 delay-100 ease-in-out`}>
                <p className='cursor-pointer'>Profile</p>
                <p className='cursor-pointer'>Notifications</p>
                <p className='cursor-pointer'>Settings</p>
            </div>
        </div>
        
      
        <div className='lg:hidden'>
             {/* <Sidebar /> */}
            <HambergerMenu size='36' onClick={handleSideBar} className=''/>
            <div className={`absolute bg-white w-[100%] h-[200vh] ${sidebar ? 'opacity-100 left-0' : 'opacity-0 left-[-20rem]'} top-0  right-0 flex flex-col text-center py-10`}>
                <div className='absolute right-5'>
                    <Back onClick={handleSideBar} size="48" />
                </div>
                <div className='flex flex-col gap-12 text-center w-[100%] mt-48 text-[32px] font-semibold'>
                <p>Home</p>
                <p>Solutions</p>
                <p>Products</p>
                <p>Companies</p>
                </div>
                 {/* */}
            </div>

    </div>
    </header>
  )
}
