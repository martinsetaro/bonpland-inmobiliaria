import React, { useState , useEffect } from 'react'
import Image from 'next/image'
import style from '../styles/Home.module.css'
import logo from '../../public/img/logo.png';
import { FaUser } from "react-icons/fa";
import Link from 'next/link';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const Header = () => {

const [logOut,setLogOut] = useState(false)
const [auth,setAuth] = useState(false)
  

  const logout = (e)=>{
e.preventDefault();

Swal.fire({
  title: '¿Estás por salir modo administrador si sales deberás volver a iniciar sesión, estás seguro?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: 'Si',
  denyButtonText: `No`,
}).then((result) => {
 
  if (result.isConfirmed) {
    localStorage.removeItem('dataToken')
    window.location.href="/"
    
  } else if (result.isDenied) {
    Swal.fire('Changes are not saved', '', 'info')
  }
})

  }




  useEffect(()=>{

    if(localStorage.getItem('dataToken')){
  console.log(localStorage.getItem('dataToken'))
  setLogOut(true)
  setAuth(true)
}else 
{
  console.log("el valor no existe")
}
  },[])


  return (
    <div className='w-full h-auto'>
      <div className='w-full h-8 flex'>
         <div className='w-1/4 p-1'>
           <Image src={logo} width={190} height={160} alt="logo"/>
         </div>
         <div className='w-full flex justify-around items-center'>
           <h2>Telefono : 23444445353</h2>
           <h2>Horarios de atención: Lun a Vie 9:00 a 16:00</h2>
         {!logOut ? <Link href="/Login"><span className='flex gap-1 p-1 border border-slate-500 items-center rounded-md cursor-pointer hover:bg-slate-600 hover:text-white'>
              <FaUser/>
              <h2>Login</h2>
           </span></Link> : <h2 className='text-xl'>Administrador<span onClick={logout} className='border-slate-500 border text-sm p-1 ml-2 hover:bg-slate-600 hover:text-white'>LogOut</span></h2> }
          
         </div>
      </div>
      <nav className='w-full h-4 bg-slate-700 flex justify-around text-white items-center'>
       <Link className={`${style.efecto} pointer`} href="/">Inicio</Link>
       <Link className={`${style.efecto} pointer`} href="/Contacto">Contacto</Link>
       <Link className={`${style.efecto} pointer`} href="/Nosotros">Quienes somos</Link>
       <Link className={`${style.efecto} pointer`} href="/Trayectoria">Nuestra trayectoria</Link>
       {auth && <Link className="bg-orange-400 text-black rounded-sm p-0.6 pointer" href="/DashBoard">DashBoard</Link> }
      </nav>
    
    
    </div>
  )
}

export default Header
