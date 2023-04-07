import React,{ useEffect} from "react";
import Layout from '@/components/Layout'
import Image from 'next/image'
import nosotros from '../../public/img/nosotros.webp'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Nosotros = () => {


    useEffect(()=>{

        AOS.init();
       
       
           },[])



  return (
    <Layout titulo="BonPland | Nosotros">
        <div className='w-full h-auto pt-1'>
    <h2 className="text-4xl text-center h-7 text-white bg-slate-600 pt-2">Sobre Nosotros</h2>    
        <div className='w-full h-auto pt-1 flex flex-col items-center pb-4'>
            
             <Image src={nosotros} alt="nosotros" width={600} height={200}/>
             <p className="mt-1 w-2/3 text-slate-700" data-aos="zoom-in" data-aos-duration="3000">
             En Bonpland Inmobiliaria, llevamos más de 25 años creando hogares y espacios únicos para nuestros clientes. Desde nuestros comienzos, nos hemos destacado por ofrecer un servicio personalizado y adaptado a las necesidades de cada uno de ellos.
             </p>
             <p className="mt-1 w-2/3 text-slate-700" data-aos="zoom-in" data-aos-duration="2000">
             Fundada por un grupo de profesionales con amplia experiencia en el sector inmobiliario, nuestra compañía se ha consolidado como una referencia en el mercado, gracias a nuestra visión innovadora y nuestra dedicación a la excelencia en todo lo que hacemos.
             </p>
             <p className="mt-1 w-2/3 text-slate-700" data-aos="zoom-in" data-aos-duration="1000">
             En definitiva, en Bonpland Inmobiliaria somos un equipo de profesionales que trabajamos con pasión y dedicación para ofrecer a nuestros clientes un servicio de alta calidad y un trato personalizado. Si estás buscando la propiedad de tus sueños o quieres invertir en el mercado inmobiliario, estamos aquí para ayudarte en todo lo que necesites. ¡Bienvenidos a Bonpland Inmobiliaria!
             </p>
        </div>
</div>
    </Layout>
   
  )
}

export default Nosotros
