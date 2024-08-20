import React from 'react';

const ServiceCard = ({cardIcon, serviceName, serviceDescription}) => {
  return (
    <div className='px-[20px] lg:px-10 py-10 text-white cursor-pointer hover:scale-105 lg:hover:scale-110 transition-all ease-in-out duration-500 '>
      
      <div aria-label={serviceName} className='w-[350px] h-[400px] min-h-[200px]  relative shadow-lg bg-dark-gray shadow-black/20 flex items-center p-5 flex-col text-center rounded-lg'>
         <div className='absolute top-0  w-[75%] bg-white h-2'></div>
          <img src={cardIcon} alt={`${serviceName} icon`} className='w-10 h-10 mb-10 mt-5'/>
            <h2 className='pb-5 font-bold'>Service name</h2>
            <p className='mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur? consectetur?consectetur?consectetur?consectetur?consectetur?</p>
            <div className='absolute bottom-0  w-[75%] bg-white h-2'></div>
      </div>
    </div>
  )
}

export default ServiceCard