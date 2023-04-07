import React, { useState , useEffect } from 'react'
import Layout from '@/components/Layout'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const DashBoard = () => {

  const [datos,setDatos] = useState([]);
  const [id , setId] = useState('Id autoAsignable')
  const [mostrarBoton , setMostrarBoton] = useState(true);
  const [mostrarBotonAgregar,setMostrarBotonAgregar] = useState(true)
  const [selId,setSelId] = useState('')
  const [selAmbiente,setSelAmbiente] = useState('');
  const [selProvincia,setSelProvincia] = useState('');
  const [selSuperficie,setSelSuperficie] = useState('');
  const [selCochera,setSelCochera] = useState('');
  const [selContrato,setSelContrato] = useState('');
  const [selReferencia,setSelReferencia] = useState('');
  const [selPrecio,setSelPrecio] = useState('');






  //TRAER INFORMACION

  async function recibirDatos(){

    const response = await fetch('http://localhost:4001/listado/propiedades')
    const data = await response.json();
    setDatos(data)

  }

  // POST NUEVO PRODUCTO

  async function agregaPropiedad(){

      await fetch('http://localhost:4001/listado/propiedades',{
        method:"POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            
           ambientes: Number(selAmbiente),
           provincia: selProvincia,
           superficie: Number(selSuperficie),
           contrato: selContrato,
           cochera: selCochera,
           referencia: selReferencia,
           precio: Number(selPrecio)
        })
      })
      .then( response => response.json()).then( data => {
        if(data){
          toast.success('La propiedad fue registrada con exito!!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            }); 
            setTimeout(() => {
              window.location.reload();  
            },3000);
        }
      })
      .catch( err => console.log(err))
  }

  //BOTON POSTEAR PROPIEDAD

  const handlerAgregar = (e) =>{
e.preventDefault();

if([selAmbiente,selCochera,selContrato,selPrecio,selProvincia,selReferencia,selSuperficie].includes('')){
  alert("hay campos vacios")
}else {
  agregaPropiedad()
  
}


  }

  //BOTON SELECCIONAR ID PARA ACTUALIZAR

  const seleccionarId = (e)=>{
     e.preventDefault();
     const data = e.target.parentElement;
     const elementBtn = data.querySelector('.btnEditar');
     const btnEditar = elementBtn.dataset.id
     setSelId(btnEditar)
     setMostrarBoton(false)
     setMostrarBotonAgregar(false)
     
     const nuevoObjeto = datos.filter(dato => dato.id === Number(btnEditar))
    
    console.log(nuevoObjeto)

    setId(nuevoObjeto[0].id)
    setSelAmbiente(nuevoObjeto[0].ambientes.toString())
   setSelCochera(nuevoObjeto[0].cochera)
   setSelContrato(nuevoObjeto[0].contrato) 
   setSelPrecio(nuevoObjeto[0].precio.toString())
   setSelProvincia(nuevoObjeto[0].provincia)
   setSelReferencia(nuevoObjeto[0].referencia)
   setSelSuperficie(nuevoObjeto[0].superficie.toString())

  }


  //BOTON EDITAR PROPIEDADES

  const handlerEditar = (e)=>{
    e.preventDefault();
    enviarActualizacion();
  

  }
  // FUNCION ENVIAR ACTUALIZACION

  async function enviarActualizacion(){
    await fetch(`http://localhost:4001/actualizar/propiedad/${selId}`,{
      method:'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        ambientes: Number(selAmbiente),
        provincia: selProvincia,
        superficie: Number(selSuperficie),
        contrato: selContrato,
        cochera: selCochera,
        referencia: selReferencia,
        precio: Number(selPrecio)
      })

    })
    .then( response => response.json())
    .then( data => {
      toast.success('La propiedad fue actualizada correctamente!!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        }); 
        setTimeout(() => {
          window.location.reload()  
        },3000);
    })
    .catch(err => console.log(err))
  }
 
  



  useEffect(()=>{
  recibirDatos();


  },[])






  return (
    <Layout titulo="DashBoard administrador">


     <h2 className='text-3xl text-center mt-3'>Dash Board Administrador</h2>
      <div className='w-full h-auto'>
      <ToastContainer />
         <form className='w-1/2 h-auto p-2 flex flex-col m-auto'>
          <label>Id</label>
          <input 
          value={id}
          className="mb-1 focus:outline-blue-400 border-slate-300 border pl-1 h-2"type="text" disabled/>
          <label>Ambientes</label>
          <select
          value={selAmbiente}
          onChange={(e)=> setSelAmbiente(e.target.value)}
          className="mb-1 h-2 pl-1">
          <option value=''>Seleccionar ambientes</option>
                <option value="3">3 ambientes</option>
                <option value="4">4 ambientes</option>
                <option value="5">5 ambientes</option>
                <option value="6">6 ambientes</option>
          </select>
          <label>Provincia</label>
          <select
          value={selProvincia}
          onChange={(e)=> setSelProvincia(e.target.value)}
           className="mb-1 h-2 pl-1">
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
          <label>Superficie</label>
          <select 
         value={selSuperficie}
          onChange={(e)=> setSelSuperficie(e.target.value)}
          className="mb-1 h-2 pl-1">
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
          
          <label>Cochera</label>
          <select 
          value={selCochera}
          onChange={(e)=> setSelCochera(e.target.value)}
          className="mb-1 h-2 pl-1">
            <option value="">Seleccione cochera</option>
            <option value="si">Si tiene</option>
            <option value="no">No tiene</option>
          </select>
          <label>Tipo de contrato</label>
          <select 
          value={selContrato}
          onChange={(e)=> setSelContrato(e.target.value)}
          className="mb-1 h-2 pl-1">
            <option value="">Seleccione contrato</option>
            <option value="alquiler">Alquiler</option>
            <option value="venta">Venta</option>
          </select>
          <label>Numero referencia</label>
          <input 
          value={selReferencia}
          onChange={(e)=> setSelReferencia(e.target.value)}
           className="mb-1 focus:outline-blue-400 border-slate-300 border pl-1 h-2 "type="text" placeholder='Ingrese numero de referencia'/>
          <label>Precio de propiedad</label>
          <select 
          value={selPrecio}
          onChange={(e)=> setSelPrecio(e.target.value)}
          className="mb-1 h-2 pl-1">
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
         
          {mostrarBotonAgregar && <button 
          onClick={handlerAgregar}
          className='bg-slate-600 text-white h-2 font-bold uppercase'>Agregar</button>}
         {!mostrarBoton && <button
         onClick={handlerEditar}
         className='bg-green-500 mt-1 text-white h-2 font-bold uppercase'>Editar</button>}



         </form>
         <h2 className='text-3xl text-center mt-2 mb-3'>Listado de propiedades actualizadas al 01/01/2023</h2>
         <div className='w-full h-auto flex flex-col'>
           {datos.map ( dato => {
            return(
              <div className='w-full h-7 mb-1 flex justify-around items-center border-slate-500 border border-1' key={dato.id}>
                <h2 className='underline'>id :<span>{dato.id}</span></h2>
                <h2 >Ambientes:<span>{dato.ambientes}</span></h2>
                <h2 >Provincia :<span>{dato.provincia}</span></h2>
                <h2 >Sup M2 :<span>{dato.superficie}</span></h2>
                <h2 >Cochera :<span>{dato.cochera}</span></h2>
                <h2 >Tipo Contrato :<span>{dato.contrato}</span></h2>
                <h2 >Referencia :<span>{dato.referencia}</span></h2>
                <h2 >Precio :<span>{dato.precio}</span></h2>
                <div className='flex flex-col h-auto'>
                <button className="bg-red-500 p-0.5 text-white text-sm h-2 uppercase">Eliminar</button>
                <button
                onClick={seleccionarId}
                data-id={dato.id}
                className="bg-green-500 p-0.5 h-2 mt-1 text-sm text-white uppercase btnEditar" >Editar</button>
                </div>
              </div>
            )})
          }




         </div>


      </div>
 


    </Layout>
  )
}

export default DashBoard
