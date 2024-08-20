import React from 'react'
import StatisticImage from '../assets/statistic-image.png'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div id='about' className='px-[20px] lg:px-[80px]  my-36'>
      <div className='about-us__container flex justify-between ml-4'>
        <div className='hidden lg:block w-[40%]'>
          <img src={StatisticImage} alt="statistics image" className='w-full h-full object-contain' />
        </div>
        <div className='about-us__textContainer lg:w-[50%]'>
          <h2 className='uppercase text-[16px] text-dark-yellow'>About us</h2>
          <h2 className='text-[40px] mt-[15px]'>We are The Best <br/> SEO Company</h2>
          <p className='text-[16px] lg:w-[80%] my-[50px] text-light-gray '>Whether you do a search for “London seo”, “London web or a variety of other highly competitive terms in our industry you will find that we completely dominate our competitors at our own game. Further, you will see we are the top rated firm with 67 reviews on Google giving us 4.8 stars.</p>
          
          <Link to='/about' className='uppercase bg-dark-yellow text-white rounded-[5px] py-[15px] px-[38px] tracking-[0.19px] hover:scale-110 transition-all ease-in-out duration-200'>More about us</Link>  
        </div>
      </div>
    </div>
  )
}

export default AboutUs