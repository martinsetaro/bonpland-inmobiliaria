import React,{ useEffect} from "react";
import Layout from "@/components/Layout";
import "animate.css";
import Image from "next/image";
import trayectoria from '../../public/img/trayectoria.jpg'
import trayectoria2 from '../../public/img/trayectoria2.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Trayectoria = () => {


    useEffect(()=>{

 AOS.init();


    },[])
   

  return (
    <Layout titulo="BonPland | Nuestra trayectoria">
      <div className="w-full h-auto pt-1">
        <h2 className="text-4xl text-center h-7 text-white bg-slate-600 pt-2">
          Nuestra trayectoria
        </h2>

        <div className="w-full h-auto pb-4 flex">
             <div className="w-full h-auto p-4">
                <Image data-aos="fade-right" data-aos-duration="3000" src={trayectoria} alt="trayectoria" width={500} height={300}/>
                <Image className="mt-2 " data-aos="fade-right" data-aos-duration="3000" src={trayectoria2} alt="trayectoria" width={500} height={300}/>
             </div>
             <div className="w-full h-auto p-4">
                <h2 className="text-slate-600 text-2xl">&quot;25 años de eficacia y calidad&quot;</h2>
                <p className="mt-1 text-slate-500" data-aos="zoom-in" data-aos-duration="3000">La empresa inmobiliaria Bonpland, en alianza con otras empresas líderes en el sector, tiene una trayectoria de más de 25 años en el mercado, lo que la convierte en una de las más consolidadas y reconocidas en el sector. Durante todo este tiempo, ha sabido adaptarse a las distintas coyunturas del mercado inmobiliario y a las necesidades de sus clientes, ofreciendo un servicio de alta calidad y un trato personalizado.</p>

                <p className="mt-1 text-slate-500" data-aos="zoom-in" data-aos-duration="2000">Desde sus inicios, Bonpland ha mantenido un firme compromiso con la ética y la transparencia en todas sus operaciones, lo que ha generado una gran confianza entre sus clientes y colaboradores. Gracias a esto, ha logrado construir una sólida reputación en el mercado y ha sido capaz de mantenerse como una empresa líder en el sector.</p>

                <p className="mt-1 text-slate-500" data-aos="zoom-in" data-aos-duration="1000">Además, ha establecido alianzas estratégicas con otras empresas líderes en el mercado, tales como la constructora EdificaHomes, la firma de arquitectura contemporánea ArcLine, la empresa de diseño de interiores y exteriores Vivid Design, la compañía de paisajismo Natural Spaces y la firma de asesoramiento financiero FinanGroup.</p>
             </div>


        </div>

      </div>
    </Layout>
  );
};

export default Trayectoria;
