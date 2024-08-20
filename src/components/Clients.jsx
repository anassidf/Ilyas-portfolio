import React from 'react'

const Clients = () => {
  return (
    <section className='bg-clients-banner-image w-full h-[450px] mb-20 bg-center bg-cover p-[20px] flex justify-center items-center text-white'>
      
      <div className=' w-[95%] h-[350px] lg:w-[80%] flex flex-col justify-center items-center lg:flex-row'>
        {/* investors */}
        <div className='flex flex-col items-center'>
          <div className='bg-dark-gray w-[95%] lg:w-[65%] h-full lg:h flex flex-col justify-center p-[55px]'>
            <h2 className='uppercase mb-[20px] text-[32px] font-[400] leading-10'>Investors</h2>
            <p className='w-full lg:w-[60%] mb-[22px]'>
            Access key financial information and resources for shareholders. Stay updated with our latest financial reports, news releases, and investor presentations.
            </p>
            <button className='uppercase w-fit h-fit border-solid border-white border-[1px] px-[15px] py-[6px] rounded-full font-[700] text-[15px]'> Find out more</button>
          </div>
          
        
        </div>
       
      </div>

    </section>
  )
}

export default Clients