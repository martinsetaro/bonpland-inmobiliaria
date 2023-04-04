import React from "react";
import style from "../styles/Home.module.css";



const Home = () => {
  return (
    <div className="w-full">
      <div className={`${style.backgroundHome} -mt-20`}>
        <div className="w-72 h-72 bg-slate-600/[.7] text-white rounded-md items-center p-3 flex flex-col mt-24 ml-12">
          <h3 className="text-2xl">Hermosa propiedad</h3>
          <h3 className="text-2xl">Costa atlantica</h3>
          <h2 className="text-4xl text-yellow-500">$ 20.000.000</h2>
          <h4>5 habitaciones</h4>
          <h4>Garaje</h4>
          <h4>Cocina - lavanderia</h4>
          <h4>Amplio comedor</h4>
          <button className="bg-yellow-500 text-black p-2 rounded-md mt-4">
            Más Detalles
          </button>
        </div>
      </div>
     

    







    </div>
  );
};

export default Home;
