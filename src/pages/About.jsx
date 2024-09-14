import React from 'react'
import TeamImage from '../assets/team-image.svg'

const About = () => {
  return (
    <div id="about-page" className='min-h-[90vh] p-[20px] lg:px-20 bg-dark-yellow py-20'>
        <div className='grid grid-rows-1 lg:grid-cols-2 place-items-center'>
         <div>

          <h2 className='text-[23px] lg:text-[26px] font-bold text-light-gray mb-[63px] lg:mb-[93px]'>~  WHO WE ARE</h2>
          <h3 className='text-[30px] lg:text-[55px] mb-10 font-bold'>We are the consultancy company you can trust.</h3>
          <p className='text-[23px] lg:text-[23px] font-normal lg:font-semibold '>With experience across various industries, including technology,
            manufacturing, IT and professional services, we collaborate closely with
            our clients to create strategies that align with their business goals. Our
            global perspective, combined with in-depth regional knowledge, ensures
            we deliver results that exceed expectations.</p>

         </div>
         <img src={TeamImage} alt="team image" className='hidden lg:block w-[670px] h-[500px]' />
         
        </div>
    </div>
  )
}

export default About