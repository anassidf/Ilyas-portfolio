import React from 'react'
import DownArrow from '../assets/down-arrow.svg'

const LandingPage = () => {
  return (
    <section id='landing-section' className='bg-landing-page-image w-full min-h-[80vh] lg:h-[90vh] bg-cover bg-center'>
        <div className='w-full min-h-[80vh] bg-black opacity-70 relative'>
        <div className='flex justify-center'>
          <p className='text-white text-center text-3xl lg:text-4xl pt-32 lg:pt-40 w-[75%] break-words leading-9 lg:leading-10 '>Welcome to ME Business Development
            Consultancy the address of business development and marketing services.</p>
            </div>
            
            <a href='#about-section' className='w-full flex justify-center'>
                <img src={DownArrow} alt="down arrow" className='w-12 h-12 absolute bottom-10  transform translate-x-1/2 animate-bounce pt-5 cursor-pointer mt-10 lg:mt-0' />
            </a>
        </div>
    </section>
  )
}

export default LandingPage