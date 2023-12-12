import Image from 'next/image'
import React from 'react'
import radial from '@/app/images/section3.svg'

export const Section3 = () => {
  return (
    <div className='flex lg:flex-row xsm:flex-col items-center justify-center gap-16 xsm:min-h-[40rem] lg:min-h-[28rem]  lg:w-[100%] xsm:w-[150%]  xsm:mt-44 lg:mt-0 xsm:px-12 lg:px-20 '>
        <div className='lg:w-[55rem] flex flex-col gap-1 ml-8 xsm:text-center lg:text-left'>
        <p className='text-[#0D6EFD] font-bold'>GoFamily</p>
        <h5 className='text-black/80 lg:text-[32px] xsm:text-[30px] font-semibold xsm:leading-[32px] lg:leading-[45px] lg:w-[450px]'>Happy Families Plan Travel goals Together</h5>
        <div className='flex flex-row gap-6 mt-10 text-[#0d6efd] font-semibold xsm:justify-center lg:justify-normal'>
            <div className='button px-6 py-2.5 border-[1px] border-solid bg-[#0d6efd]  text-white  rounded-md '>Get Started</div>
            <p className='px-6 py-2.5 underline underline-offset-4'> Learn More</p>
        </div>
      </div>
      <div className='lg:w-[60rem]'>
        <Image src={radial}/>
      </div>
    </div>
  )
}
