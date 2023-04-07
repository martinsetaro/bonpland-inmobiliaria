import React from 'react'
import Image from 'next/image'
import Logo from '../../public/img/error.webp'





const Error404 = () => {




  return (
    <div className='w-full flex flex-col items-center'>
      <h2 className='text-4xl text-center mt-5'>Sin autorizacion</h2>
      <Image src={Logo} alt="error" width={500} height={300}/>
    </div>
  )
}

export default Error404
