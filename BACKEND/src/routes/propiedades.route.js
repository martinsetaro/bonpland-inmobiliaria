import   { Router }  from "express";
import pool from '../config/connection.js';


const router = Router();


//Traer y mostrar base de datos

router.get('/listado/propiedades', async (req,res)=>{

    const [result] = await pool.query("SELECT * FROM propiedad")

    res.json(result)


})

router.post('/listado/propiedades', async (req,res) => {

const { ambientes,pais,ciudad,superficie,precio,imagen,contrato,referencia } = req.body

const [rows] = await pool.query("INSERT INTO propiedad (ambientes,pais,ciudad,superficie,precio,imagen,contrato,referencia) VALUES (?,?,?,?,?,?,?,?)",[ambientes,pais,ciudad,superficie,precio,imagen,contrato,referencia])

res.send({
    id:rows.insertId,
    ambientes,
    pais,
    ciudad,
    superficie,
    precio,
    imagen,
    contrato,
    referencia
})



})






export default router