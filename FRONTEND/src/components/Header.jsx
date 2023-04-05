import React from 'react'
import Image from 'next/image'
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
           <span className='flex gap-2 p-1 border border-slate-500 items-center rounded-md cursor-pointer'>
              <FaUser/>
              <h2>Login</h2>
           </span>
         </div>
      </div>
      <nav className='w-full h-4 bg-slate-700 flex justify-around text-white items-center'>
       <Link className='pointer' href="/">Inicio</Link>
       <Link className='pointer' href="/">Ofertas</Link>
       <Link className='pointer' href="/">Presupuestos</Link>
       <Link className='pointer' href="/">Quienes somos</Link>
       <Link className='pointer' href="/">Nuestra trayectoria</Link>
      </nav>
    
    
    </div>
  )
}

export default Header
