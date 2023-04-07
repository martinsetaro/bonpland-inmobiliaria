import React from 'react'
import Image from 'next/image'
import style from '../styles/Home.module.css'
import logo from '../../public/img/logo.png';
import { FaUser } from "react-icons/fa";
import Link from 'next/link';

const Header = () => {



  return (
    <div className='w-full h-auto'>
      <div className='w-full h-8 flex'>
         <div className='w-1/4 p-1'>
           <Image src={logo} width={190} height={160} alt="logo"/>
         </div>
         <div className='w-full flex justify-around items-center'>
           <h2>Telefono : 23444445353</h2>
           <h2>Horarios de atención: Lun a Vie 9:00 a 16:00</h2>
           <Link href="/Login"><span className='flex gap-1 p-1 border border-slate-500 items-center rounded-md cursor-pointer hover:bg-slate-600 hover:text-white'>
              <FaUser/>
              <h2>Login</h2>
           </span></Link>
         </div>
      </div>
      <nav className='w-full h-4 bg-slate-700 flex justify-around text-white items-center'>
       <Link className={`${style.efecto} pointer`} href="/">Inicio</Link>
       <Link className={`${style.efecto} pointer`} href="/Contacto">Contacto</Link>
       <Link className={`${style.efecto} pointer`} href="/Nosotros">Quienes somos</Link>
       <Link className={`${style.efecto} pointer`} href="/Trayectoria">Nuestra trayectoria</Link>
      </nav>
    
    
    </div>
  )
}

export default Header
