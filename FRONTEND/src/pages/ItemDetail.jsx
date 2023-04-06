import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Image from "next/image";

const ItemDetail = () => {
  const [numeroId, setNumeroId] = useState("");
  const [datos, setDatos] = useState([]);

  async function recibirDatos() {
    const response = await fetch("http://localhost:4001/listado/propiedades");
    const data = await response.json();
    setDatos(data);
  }

  useEffect(() => {
    setNumeroId(localStorage.getItem("id"));
    recibirDatos();
  }, []);

  console.log(datos);
  const filtrado = datos.filter((datas) => datas.id == numeroId);
  console.log(filtrado);

  return (
    <Layout>
      <div className="w-full h-auto mb-4">
        <h2 className="text-4xl font-bold text-center text-slate-600 mt-4 mb-4">BonPland Propiedades</h2>
      <div className="w-full flex justify-around h-auto">
          <div className=" w-full h-250 p-1">
             <Image
             
            src={"/img/casa" + numeroId + ".webp"}
            alt="casa"
            width={550}
            height={250}
             />
          </div>
        {filtrado.map((item) => {
          return (
            <div className="w-full h-auto p-1">
              {item.superficie == 30 ? <h2 className="text-2xl text-slate-600 uppercasemb-2">Departamento</h2> : <h2 className="text-2xl text-slate-600 uppercasemb-2">Casa</h2>}
              <h2>
                Esta propiedad cuenta con : {item.ambientes} ambientes luminosos.
              </h2>
              <h2>Lugar de ubicación : {item.provincia}</h2>
              <h2>Superficie en M2 : {item.superficie}</h2>
              <h2>Cuenta con cochera : {item.cochera}</h2>
              <h2>Actualmente esta propiedad está para {item.contrato}</h2>
              <h2 className="text-4xl mt-2 mb-2 text-slate-600 font-black">Precio actualizado : $ {item.precio} Ar </h2>
              <h3 className="font-black uppercase">Numero de seguimiento : {item.referencia}</h3>
              <button className="bg-slate-600 font-bold text-white uppercase rounded-sm p-1 mt-4 hover:bg-white hover:text-slate-600 hover:border-slate-600 hover:border border-1">Contactar</button>
            </div>
          );
        })}
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;
