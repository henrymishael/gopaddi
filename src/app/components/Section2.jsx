import Image from 'next/image'
import React from 'react'
import map from '@/app/images/map2.svg'

function Section2() {
  return (
    <div className='section2 flex lg:flex-row xsm:flex-col md:items-center md:justify-center  xsm:gap-16 lg:gap-0 xsm:min-h-[40rem] md:min-h-[44rem]  lg:w-[100%] xsm:w-[150%] lg:mt-16 xsm:mt-44 xsm:px-12 lg:px-20'> 
      <div className='lg:w-[60rem]'>
        <Image src={map} />
      </div>
      <div className='lg:w-[55rem]  flex flex-col gap-1 xsm:text-center lg:text-left lg:pl-32'>
        <p className='text-[#0D6EFD] font-bold '>Gopal</p>
        <h5 className='text-black/80 xsm:text-[30px] md:text-[32px] font-semibold md:leading-[45px] xsm:leading-[30px] '>Connect your World <br />From Here!</h5>
        <div className='flex flex-row gap-6 mt-10 text-[#0d6efd] font-semibold xsm:justify-center lg:justify-normal '>
            <div className='button px-6 py-2.5 rounded-md border-[#0d6efd] border-[1px]'>Get Started</div>
            
            <p className='px-6 py-2.5 '> Learn More</p>
        </div>
      </div>
    </div>
  )
}

export default Section2
