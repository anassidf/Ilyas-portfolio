import React from 'react'
import TeamImage from '../assets/team-image.svg'

const About = () => {
  return (
    <div className='min-h-[90vh] p-[20px] lg:px-20 bg-dark-yellow py-20'>
        <div className='grid grid-rows-1 lg:grid-cols-2 place-items-center'>
         <div>

          <h2 className='text-[26px] lg:text-[36px] font-bold text-light-gray mb-[63px] lg:mb-[93px]'>~  WHO WE ARE</h2>
          <h3 className='text-[56px] lg:text-[64px] mb-10 font-bold'>We Help To Get You Well.</h3>
          <p className='text-[26px] lg:text-[36px] font-bold'>Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s,</p>

         </div>
         <img src={TeamImage} alt="team image" className='hidden lg:block w-[670px] h-[500px]' />
         
        </div>
    </div>
  )
}

export default About