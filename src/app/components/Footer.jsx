import Image from 'next/image'
import React from 'react'
import logo from '../images/logo.png'
import footer from '../images/footer.png'

export const Footer = () => {
  return (
    <div className='flex xsm:flex-col lg:flex-row justify-between xsm:justify-normal lg:min-h-[400px]  xsm:min-h-[380px] lg:w-[100%] xsm:w-[150%] mt-12 xsm:gap-8 lg:gap-10 bg-[#4A84D6] lg:px-14 md:py-10 xsm:px-6 xsm:py-4 md:px-10'>
        <div className='flex lg:flex-col xsm:flex-row xsm:gap-4 lg:gap-12 text-white lg:w-[25%] lg:text-[12px]  xsm:text-[10px] '>
            <Image className='xsm:w-[78px] lg:w-[180px]' src={logo}/>
            <p className='lg:text-[12px] md:w-[30%] lg:w-auto  xsm:text-[10px] '>Gopaddi is a travel network that connects and strengthens people’s relationships with a world of beautiful, happy people who are able to reach out for their dreams and be who they want to be.</p>
            <p className='lg:text-[12px] md:w-[30%] lg:w-auto  xsm:text-[10px] '>This network is a community of individuals, families, and organisations who have chosen to take control of their travel desires and freely explore a world of limitless possibilities.</p>
        </div>
        <div className='list-none flex flex-row lg:gap-8 xsm:gap-4 lg:text-[12px]  xsm:text-[10px] xsm:justify-around md:justify-center lg:justify-normal '>
        <span className='flex flex-col lg:gap-4 xsm:gap-2 text-white'>
                <h4 className='font-semibold text-[14px] '>Quick Links</h4>
                <li><a href='#' />Home</li>
                <li><a href='#' />About Us</li>
                <li><a href='#' />Contact Us</li>
                <li><a href='#' />Terms and Conditions</li>
                <li><a href='#' />Become An Affiliate</li>
            </span>
            <span className='flex flex-col lg:gap-4 xsm:gap-2  text-white'>
                <h4 className='font-semibold text-[14px] '>Business Links</h4>
                <li><a href='#' />GoPal</li>
                <li><a href='#' />GoBusiness</li>
                <li><a href='#' />GoFamily</li>
                <li><a href='#' />GoAgent</li>
                <li><a href='#' />GoSchool</li>
            </span>
            <span className='flex flex-col lg:gap-4 xsm:gap-2 4 text-white'>
                <h4 className='font-semibold text-[14px] '>Business Links</h4>
                <li><a href='#' />Facebook</li>
                <li><a href='#' />Twitter</li>
                <li><a href='#' />Instagram</li>
                <li><a href='#' />Linkedin</li>
                
            </span>
        </div>
        <div className='flex lg:flex-col xsm:flex-row gap-4 lg:w-[30%] xsm:w-[100%]'>
            <p className='text-white font-semibold xsm:text-[14px]'>Subscribe to Our Newsletter</p>
            <input className='bg-[#82B4FF]  px-2 h-[2.5rem] placeholder:text-white placeholder:font-semibold border-none outline-none text-white' type="email" name="" id="" placeholder='Email' />
            <div className='flex flex-row gap-2 items-start  '>
                <input type="checkbox" name="" id="" />
                <p className='text-[12px] text-white'>By subscribing you are accepting to receive marketing information from Aero and agree to the terms of Aero’s Privacy Policy.</p>
            </div>
            <Image className='xsm:hidden lg:flex' src={footer} />
        </div>
    </div>
  )
}
