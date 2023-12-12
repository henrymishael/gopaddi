import Image from 'next/image'
import React from 'react'
//import avatar from '@/app/images/avatar.png'
import avatar1 from '@/app/images/comment1.png'
import avatar2 from '@/app/images/comment2.png'
import avatar3 from '@/app/images/comment3.png'
import vec from '@/app/images/Vector.svg'
import banner from '@/app/images/br.png'

export const Section1 = () => {
  return (
    <>
    <div className='flex lg:flex-row xsm:flex-col lg:justify-between md:items-center lg:min-h-[90vh] xsm:min-h-[40rem]  xsm:px-12 xsm:mt-52 lg:mt-32  lg:px-20 xsm:gap-16 lg:gap-0  xsm:w-[150%] lg:w-[100%] '>
        <div className='lg:w-[55rem]  flex flex-col gap-6 justify-center'>
            <h1 className='lg:text-[55px] xsm:text-[40px] font-bold lg:leading-[65px] xsm:leading-[40px] xsm:text-center lg:text-left'>Travel Agent <br />For <span className='text-[#0D6EFD]'>What?</span> </h1>
            <p className='text-[12px] xsm:text-center lg:text-left  lg:w-[75%]'>Enjoy numerous travel benefits and exclusive membership with <br /> discounts. Beat the standard and set another with GoPaddi.</p>
            <span className='text-[#0D6EFD] flex flex-row items-center gap-2 xsm:justify-center lg:justify-normal'>
                <h4 className='underline underline-offset-4 font-extrabold' >Get Started</h4>
                <Image className='' src={vec} />
            </span>
            <span className='flex flex-row gap-1 items-center xsm:justify-center lg:justify-normal'>
                <div className='flex flex-row '>
                    <Image className='w-[20px] h-[20px]' src={avatar1} />
                    <Image className='w-[20px] h-[20px] ml-[-3px]' src={avatar2} />
                    <Image className='w-[20px] h-[20px] ml-[-3px]' src={avatar3} />
                </div>
                <p className='text-[10px]'>Join over 1000 people who are already enjoying these benefits</p>
            </span>
        </div>
        <div className='lg:w-[70rem]'>
            <Image className='lg:w-[150%] animate-bounce' src={banner} />
        </div>
    </div>
    </>
  )
}
