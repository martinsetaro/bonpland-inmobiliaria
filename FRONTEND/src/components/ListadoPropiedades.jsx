import  { useState , useEffect } from 'react'
import Image from 'next/image';

const ListadoPropiedades = () => {

const [datos,setDatos] = useState([]);


async function recibirDatos(){

    await fetch('http://localhost:4001/listado/propiedades',{
        method:"GET"
    }).then( response => response.json()).then( data => { setDatos(data)}).catch(err => console.log(err))

        
}

useEffect(()=>{

    recibirDatos();
},[])



  return (
    <div className='w-full h-96 p-2'>
      <h2 className='text-3xl'>Propiedades</h2>
      <h2>se ve</h2>
      {datos.map ( dato => {
        return(
            <div className='w-1/2 h-80' key={dato.id}>
                <Image src='https://www.nocnok.com/hubfs/casa-lujo.webp://imgar.zonapropcdn.com/avisos/1/00/50/37/46/67/720x532/1831506651.jpg' alt="casa" />
                <h2>Ambientes : {dato.ambientes}</h2>
                <h2>Pais : {dato.pais}</h2>
                <h2>Ciudad : {dato.ciudad}</h2>
                <h2>Superficie : {dato.superficie}</h2>
                <h2>Tipo de Contrato : {dato.contrato}</h2>
                <h2>Numero de referencia : N- {dato.referencia}</h2>
                <h2>Valor : $ {dato.precio}</h2>
            </div>
        )
      })}
    </div>
  )
}

export default ListadoPropiedades
