import React from 'react'
import NotFoundImg from '../assets/not-found-image.svg'

const NotFound = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>

      <div>
      <img src={NotFoundImg} alt="not found image (404 image)"  className='w-[40rem]'/>  
      <h2 className='text-center text-3xl mt-5 font-bold'>Can't find this page</h2>
      </div>
    </div>
  )
}

export default NotFound