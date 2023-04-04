import { useState , useEffect } from 'react'
import Image from 'next/image';
import casa1 from '../../public/img/casa1.webp'

const Filtros = () => {

const [ propiedades , setPropiedades]= useState([]);

async function enviarDatos(){

    const response = await fetch("http://localhost:4001/listado/propiedades")
    const data = await response.json();
    setPropiedades(data);
    console.log(data)
}

useEffect(()=>{
    enviarDatos();
    
},[])



  return (
    <div className='w-full'>
        <h2 className='text-3xl text-center mt-12'>Propiedades</h2>
        <div className='w-full flex mt-24 mb-24'>
        <div className='w-1/3 flex flex-col h-auto p-1 mt-4 m-auto bg-slate-600'>
            <label className='text-xl text-white mb-2'>Ambientes</label>
            <select className='mb-4'>
                <option>Seleccionar ambientes</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
            <label className='text-xl text-white mb-2'>Pais</label>
            <select className='mb-4'>
                <option>Seleccionar Pais</option>
                <option value="argentina">Argentina</option>
                <option value="chile">Chile</option>
                <option value="uruguay">Uruguay</option>
                <option value="brasil">Brasil</option>
            </select>
            <label className='text-xl text-white mb-2'>Superficie M2</label>
            <select className='mb-4'>
                <option>Seleccionar superficies</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
                <option value="70">70</option>
                <option value="80">80</option>
                <option value="90">90</option>
                <option value="100">100</option>
            </select>
            <label className='text-xl text-white mb-2'>Ciudad</label>
            <select className='mb-4'>
                <option>Seleccionar provincia</option>
                <option value="mendoza">Mendoza</option>
                <option value="cordoba">Cordoba</option>
                <option value="buenos aires">Buenos Aires</option>
                <option value="brasilia">Brasilia</option>
                <option value="rio de janeiro">Rio de Janeiro</option>
                <option value="montevideo">Montevideo</option>
                <option value="canelones">Canelones</option>
                <option value="santiago">Santiago</option>
                <option value="talca">Talca</option>
            </select>
            <label className='text-xl text-white mb-2'>Precio</label>
            <select className='mb-4'>
                <option>Seleccionar Precio</option>
                <option value="3000">$ 30000</option>
                <option value="4000">$ 40000</option>
                <option value="5000">$ 50000</option>
                <option value="6000">$ 60000</option>
                <option value="7000">$ 70000</option>
                <option value="8000">$ 80000</option>
                <option value="9000">$ 90000</option>
                <option value="10000">$ 100000</option>
            </select>
           <button className='p-1 bg-white text-slate-600 border border-1 rounded-md font-bold uppercase'>Filtrar</button>
        </div>
        
        <div className='w-full flex justify-around flex-wrap'>
            {propiedades.map( propiedad => {
                return(
                    <div key={propiedad.id} className='border border-y-gray-100 w-80 pb-2 mb-2 mt-4'>
                        <Image className='h-36' src={"/img/casa"+ propiedad.id +".webp"} alt="casa" width={380} height={200}/>
                        <h2 className='mt-2'>Ambientes: {propiedad.ambientes}</h2>
                        <h2>Pais: {propiedad.pais}</h2>
                        <h2>Ciudad: {propiedad.ciudad}</h2>
                        <h2>Superficie: {propiedad.superficie} M2</h2>
                        <h2>Contrato: {propiedad.contrato}</h2>
                        <h2>Referencia: N-{propiedad.referencia}</h2>
                        <h2 className='text-4xl mt-2 mb-2 text-slate-600'>Precio: $ {propiedad.precio}</h2>
                        <button className="bg-slate-600 text-white font-bold uppercase p-1 rounded-md ml-4 mt-14">Más detalles</button>
                    </div>
                )
            })}

        </div>
    </div>
</div>
  )
}

export default Filtros