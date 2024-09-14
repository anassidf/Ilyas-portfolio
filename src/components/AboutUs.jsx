import React from 'react'
import StatisticImage from '../assets/statistic-image.png'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div id='about-section' className='px-[20px] lg:px-[80px]  my-36'>
      <div className='about-us__container flex justify-between items-end ml-4'>
        <div className='hidden lg:block w-[40%]'>
          <img src={StatisticImage} alt="statistics image" className='w-full h-full object-contain' />
        </div>
        <div className='about-us__textContainer lg:w-[50%]'>
          <h2 className='uppercase text-[16px] text-dark-yellow'>About us</h2>
          <h2 className='text-[40px] mt-[15px]'>We are your trusted <br/> consulting partner</h2>
          <p className='text-[16px] lg:w-[80%] my-[50px] text-light-gray '>At ME Business Development Consultancy, we are
            committed to empowering businesses globally with tailored strategies and
            innovative marketing solutions. Headquartered in the UAE, we provide a
            full suite of services designed to drive growth through business
            development, market research, and brand positioning.</p>
          
          <Link to='/about' className='uppercase bg-dark-yellow text-white rounded-[5px] py-[15px] px-[38px] tracking-[0.19px] hover:scale-110 transition-all ease-in-out duration-200'>More about us</Link>  
        </div>
      </div>
    </div>
  )
}

export default AboutUs