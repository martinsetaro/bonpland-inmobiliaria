import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react'
import logo from '../../public/img/logo.png'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

const [errorU,setErrorU] = useState(false)
const [errorP,setErrorP] = useState(false)
const [user,setUser] = useState('')
const [token,setToken] = useState('')
const [ pass,setPass ] = useState('')




const ingresar = (e)=>{
e.preventDefault();

    if( user === ''){
        setErrorU(true)
       
        setTimeout(()=>{
            setErrorU(false)
           
        },2000)
    }
     else if( pass === ''){
        setErrorP(true)
        setTimeout(()=>{
            
            setErrorP(false)
        },2000)
    } else {
       toast.success('Login exitoso!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        localStorage.setItem('dataToken',"rol_admin")
        setTimeout(() => {
          window.location.href="/DashBoard"  
        },3000);
        
    }
    

}




  return (
    <Layout titulo="BonPland | Login">
      <div className='w-full h-auto pb-4'>
          <div className='w-60 h-25 flex m-auto pt-3'>

           <div className='w-1/2 h-auto'>
            <Image className='mt-6' src={logo} alt="logo" width={200} height={100}/>
           </div>
           <div className='w-full'>
            <form className='w-20 h-auto flex flex-col pb-2 pl-2 pr-2'> 
                <h2 className='text-2xl text-slate-600 mb-2'>Login</h2>
                <label className='mb-0.5'>Usuario</label>
                <input
                onChange={(e)=> setUser(e.target.value)}
                className='mb-2 border border-gray-300 pl-1 outline-0 focus:outline-blue-400 focus:outline-1' type='text' placeholder="Ingresar usuario"/>
                {errorU ? <h6 className=' text-red-500 -mt-2 text-xs'>No pueden existir campos vacios</h6> : null}
                <label className='mb-0.5'>Contraseña</label>
                <input 
                onChange={(e)=> setPass(e.target.value)}
                className='mb-2 border border-gray-300 pl-1 outline-0 focus:outline-blue-400 focus:outline-1' type='password' placeholder="Ingresar contraseña"/>
                {errorP ? <h6 className=' text-red-500 -mt-2 text-xs'>No pueden existir campos vacios</h6> : null}
                <button 
                onClick={ingresar}
                className='border border-slate-600 p-1 uppercase hover:bg-slate-600 hover:text-white mt-3'>ingresar</button>
            </form>
            <ToastContainer />
           </div>



          </div>
        
      </div>

    </Layout>
  )
}

export default Login
