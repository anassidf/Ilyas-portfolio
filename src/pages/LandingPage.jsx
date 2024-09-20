import React from 'react'
import DownArrow from '../assets/down-arrow.svg'

const LandingPage = () => {
  return (
    <section className='bg-landing-page-image w-full h-[70vh] lg:h-[90vh] bg-cover bg-center'>
        <div className='w-full h-full bg-black opacity-70 relative'>
            <div className='flex justify-center'>
                <p className='text-white text-center text-4xl lg:text-5xl pt-40 w-[70%] break-words'>Welcome to the business development address</p>
            </div>
            
            <a href='#about' className='w-full flex justify-center'>
                <img src={DownArrow} alt="down arrow" className='w-12 h-12 absolute bottom-10  transform translate-x-1/2 animate-bounce pt-5 cursor-pointer' />
            </a>
        </div>
    </section>
  )
}

export default LandingPage