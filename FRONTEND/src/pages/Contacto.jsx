import React from 'react'
import Image from 'next/image'
import logo from '../../public/img/logo.png'
import Layout from '@/components/Layout'




const Contacto = () => {
  return (
   <Layout titulo="BonPland | Contacto">
    <div className='w-full h-auto flex flex-col items-center pt-4 pb-4'>
        <Image src={logo} alt="logo" width={200} height={100}/>
        <h2 className='text-3xl text-center text-slate-600'>Contactanos!</h2>
        <form className='w-1/3 flex flex-col item-center bg-slate-500 p-1 mt-3'>
           <label className='text-white'>Nombre</label>
           <input className='mb-1 pl-1' type='text' placeholder='Ingrese nombre'/>
           <label className='text-white'>Telefono</label>
           <input className='mb-1 pl-1' type='number' placeholder='Ingrese telefono'/>
           <label className='text-white'>Email</label>
           <input className='mb-1 pl-1' type='email' placeholder='Ingrese email'/>
           <textarea rows={4} col={10}></textarea>
           <button className='mt-3 bg-slate-400 text-white font-black p-1'>Enviar</button>
        </form>




    </div>




   </Layout>
  )
}

export default Contacto
