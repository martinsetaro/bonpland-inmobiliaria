import   { Router }  from "express";
import pool from '../config/connection.js';


const router = Router();


//Traer y mostrar base de datos

router.get('/listado/propiedades', async (req,res)=>{

    const [result] = await pool.query("SELECT * FROM propiedad")

    res.json(result)


})

// HACER POST

router.post('/listado/propiedades', async (req,res) => {

const { ambientes,cochera,provincia,superficie,precio,contrato,referencia } = req.body

const [rows] = await pool.query("INSERT INTO propiedad (ambientes,cochera,provincia,superficie,precio,contrato,referencia) VALUES (?,?,?,?,?,?,?)",[ambientes,cochera,provincia,superficie,precio,contrato,referencia])

res.send({
    id:rows.insertId,
    ambientes,
    cochera,
    provincia,
    superficie,
    precio,
    contrato,
    referencia
})



})

// HACER ACTUALIZACION

router.put('/actualizar/propiedad/:id', async (req, res) => {
    const { id } = req.params;
    const { ambientes,cochera,provincia,superficie,precio,contrato,referencia, } = req.body;
  
    try {
      const [result] = await pool.query('UPDATE propiedad SET ambientes = ? ,cochera = ?, provincia = ? ,superficie = ?,precio = ?,contrato = ?,referencia = ? WHERE id = ?', [ambientes,cochera,provincia,superficie,precio,contrato,referencia,id]);
      res.status(200).json({ message: 'Propiedad actualizada correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al actualizar la propiedad' });
    }
  });
  






export default router