import React from 'react'
import ServiceCard from './ServiceCard'
import RocketIcon from '../assets/rocket-icon.svg'
import LampIcon from '../assets/lamp-icon.svg'
import ThreeSixtyIcon from '../assets/360-icon.svg'

const Services = () => {
  return (
    <div className='min-h-[100vh] '>

        <div className='min-h-72 bg-dark-yellow shadow-lg p-8 text-center flex items-center justify-center'>
           
            <blockquote className='text-3xl font-bold text-gray-800 italic'>
            "Empower Your Business with Sales Solutions That Drive Results. Because Your Success is Our Business."
            </blockquote>
            
        </div>

        <div className="flex flex-wrap justify-center mt-10">
            <ServiceCard cardIcon={RocketIcon}/>
            <ServiceCard cardIcon={LampIcon}/>
            <ServiceCard cardIcon={ThreeSixtyIcon}/>
        </div>   
        

    </div>
  )
}

export default Services