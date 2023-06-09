import { useState , useEffect } from 'react'
import Image from 'next/image';


const Filtros = () => {

const [ propiedades , setPropiedades]= useState([]);
const [selAmbiente,setSelAmbiente] = useState('')
const [selCochera,setSelCochera] = useState('')
const [selProvincia,setSelProvincia] = useState('')
const [selSuperficie,setSelSuperficie] = useState('')
const [selContrato,setSelContrato] = useState('')
const [selPrecio,setSelPrecio] = useState('')
const [restaurar,setRestaurar] = useState([])

async function enviarDatos(){

    const response = await fetch("http://localhost:4001/listado/propiedades")
    const data = await response.json();
    setPropiedades(data);
    setRestaurar(data)
    
    
    
}

let objeto = {
     ambiente :selAmbiente,
     cochera: selCochera,
     provincia : selProvincia,
     superficie :selSuperficie,
     contrato : selContrato,
     precio : selPrecio
}


const limpiarFiltro = ()=>{
    setPropiedades(restaurar)
}
console.log(objeto.provincia)

const handlerFiltro = () => {

const newPropiedades = propiedades.filter(ambientes).filter(cocheras).filter(provincias).filter(superficies).filter(precios).filter(contratos);

setPropiedades(newPropiedades)

function ambientes(item){
const { ambiente } = objeto
if(ambiente){
    return item.ambientes === Number(ambiente)
}
setPropiedades(restaurar)
return item;
}


function cocheras(item){
    const { cochera } = objeto
    if(cochera){
        return item.cochera === cochera
    }
    
    setPropiedades(restaurar)
    return item;
}

function provincias(item){
    const { provincia } = objeto
    if(provincia){
        return item.provincia == provincia
    }
    setPropiedades(restaurar)
    return item;
}
function superficies(item){
    const { superficie } = objeto
    if(superficie){
        return item.superficie === Number(superficie)
    }
    setPropiedades(restaurar)
    return item;

}

function precios(item){
    const { precio } = objeto
    if(precio){
        return item.precio === Number(precio)
    }
    setPropiedades(restaurar)
    return item;

}
function contratos(item){
    const { contrato } = objeto
    if(contrato){
        return item.contrato === contrato
    }
    setPropiedades(restaurar)
    return item;

}


}

const handlerDetalles = (e)=>{
   e.preventDefault();
   const data = e.target.parentElement;
   const elementBtn = data.querySelector('button');
   const btn = elementBtn.dataset.id;
   localStorage.setItem('id',btn)
   window.location.href="/ItemDetail"
}


useEffect(()=>{

    enviarDatos();
    if(objeto === ''){
        setPropiedades(restaurar)
    }
    
},[])



  return (
    <div className='w-full'>
        <h2 className='text-6xl text-center mt-2'>Propiedades</h2>
        <h3 className='text-2xl text-center mt-2'>{propiedades.length} propiedades encontradas</h3>
        <div className='w-full flex mt-2 mb-24'>
        <div className='w-1/3 flex flex-col h-auto p-1 mt-4 m-auto bg-slate-600 sticky top-0'>
            <label className='text-xl text-white mb-1'>Ambientes</label>
            <select 
            onChange={(e)=> {
                setSelAmbiente(e.target.value)
               
            }}
            className='mb-1'>
                <option value=''>Seleccionar ambientes</option>
                <option value="3">3 ambientes</option>
                <option value="4">4 ambientes</option>
                <option value="5">5 ambientes</option>
                <option value="6">6 ambientes</option>
            </select>
            <label className='text-xl text-white mb-1'>Posee cochera</label>
            <select 
             onChange={(e)=> {
                setSelCochera(e.target.value)  
            }}
            className='mb-1'>
                <option value=''>Seleccionar cochera</option>
                <option value="si">Si</option>
                <option value="no">No</option>
                
            </select>
            <label className='text-xl text-white mb-1'>Contrato</label>
            <select 
             onChange={(e)=> setSelContrato(e.target.value)}
            className='mb-1'>
                <option value=''>Seleccionar contrato</option>
                <option value="venta">Venta</option>
                <option value="alquiler">Alquiler</option>
                
            </select>
            <label className='text-xl text-white mb-1'>Superficie M2</label>
            <select 
             onChange={(e)=> setSelSuperficie(e.target.value)}
            className='mb-1'>
                <option value=''>Seleccionar superficies</option>
                <option value="30">30 m2</option>
                <option value="40">40 m2</option>
                <option value="50">50 m2</option>
                <option value="60">60 m2</option>
                <option value="70">70 m2</option>
                <option value="80">80 m2</option>
                <option value="90">90 m2</option>
                <option value="100">100 m2</option>
            </select>
            <label className='text-xl text-white mb-1'>Provincias</label>
            <select 
             onChange={(e)=> setSelProvincia(e.target.value)}
            className='mb-1'>
                <option value=''>Seleccionar provincia</option>
                <option value="Mendoza">Mendoza</option>
                <option value="Cordoba">Cordoba</option>
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="Santa Fe">Santa Fe</option>
                <option value="Entre Rios">Entre Rios</option>
                <option value="Salta">Salta</option>
                <option value="Chaco">Chaco</option>
                <option value="Santiago del Estero">Santiago del Estero</option>
                <option value="San Juan">San Juan</option>
            </select>
            <label className='text-xl text-white mb-1'>Precio</label>
            <select 
             onChange={(e)=> setSelPrecio(e.target.value)}
            className='mb-1'>
                <option value=''>Seleccionar Precio</option>
                <option value="30000">$ 30000 Ar.-</option>
                <option value="40000">$ 40000 Ar.-</option>
                <option value="50000">$ 50000 Ar.-</option>
                <option value="60000">$ 60000 Ar.-</option>
                <option value="70000">$ 70000 Ar.-</option>
                <option value="80000">$ 80000 Ar.-</option>
                <option value="90000">$ 90000 Ar.-</option>
                <option value="100000">$ 100000 Ar.-</option>
            </select>
           <button 
           onClick={handlerFiltro}
           className='p-1 bg-white text-slate-600 border border-1 rounded-md font-bold uppercase'>Filtrar</button>
           <button 
           onClick={limpiarFiltro}
           className='p-1 bg-white text-slate-600 border border-1 rounded-md mt-2 font-bold uppercase'>Eliminar filtros</button>
        </div>
        { propiedades.length === 0 ? <div className='w-full flex flex-col'>
            <h2 className='text-xl text-center text-slate-600 uppercase'>No existen registros</h2>
            <h2 className='text-xl text-center text-slate-600 uppercase'>Elimine los filtros</h2>
        
        </div> : 
        <div className='w-full flex justify-around flex-wrap'>
           
            {propiedades.map( propiedad => {
                return(
                     <div key={propiedad.id} className='border border-y-gray-100 w-20 h-auto pb-1 mb-2 mt-2'>
                        <Image className='h-15' src={"/img/casa"+ propiedad.id +".webp"} alt="casa" width={380} height={200}/>
                        <h2 className='mt-2 ml-4'>Ambientes: {propiedad.ambientes}</h2>
                        <h2 className='ml-4'>Cochera: {propiedad.cochera}</h2>
                        <h2 className='ml-4'>Provincia: {propiedad.provincia}</h2>
                        <h2 className='ml-4'>Superficie: {propiedad.superficie} M2</h2>
                        <h2 className='ml-4'>Referencia: N-{propiedad.referencia}</h2>
                        <h2 className='text-2xl mt-2 mb-2 text-center text-slate-600 uppercase font-bold'>Precio: $ {propiedad.precio}</h2>
                        {propiedad.contrato == "venta" ? <h2 className='bg-green-500 text-white font uppercase text-center p-1 '>En venta</h2> : <h2 className='bg-orange-400 text-white font uppercase text-center p-1 '>En alquiler</h2>}
                        <button
                        onClick={handlerDetalles}
                        data-id={propiedad.id}
                        className="bg-slate-600 text-white font-bold uppercase p-1 rounded-md ml-4 mt-4">Más detalles</button>
                    </div>
                )
            })}
        

        </div>}
    </div>
</div>
  )
}

export default Filtros