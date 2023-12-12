import React from 'react'
import bg from '@/app/images/section4.png'
import Image from 'next/image'

export const Section4 = () => {
  return (
    <div className='flex lg:flex-row xsm:flex-col items-center justify-center gap-16 xsm:min-h-[40rem] lg:min-h-[28rem]  lg:w-[100%] xsm:w-[150%] lg:mt-16 xsm:mt-44 xsm:px-12 lg:px-20'> 
      <div className='lg:w-[60rem]'>
        <Image src={bg} />
      </div>
      <div className='lg:w-[55rem] flex flex-col gap-1 xsm:text-center lg:text-left '>
        <p className='text-[#0D6EFD] font-bold'>GoBusiness</p>
        <h5 className='text-black/80 text-[28px] font-semibold leading-[45px] lg:w-[450px]'>Be the Best Among Equals With <br /> Our Cooperate Offers</h5>
        <div className='flex flex-row gap-6 mt-10 text-[#0d6efd] font-semibold xsm:justify-center lg:justify-normal'>
            <div className='button px-6 py-2.5 border-[1px] border-solid bg-[#0d6efd]  rounded-md text-white '>Get Started</div>
            <p className='px-6 py-2.5 underline-offset-4 underline'> Learn More</p>
        </div>
      </div>
    </div>
  )
}
