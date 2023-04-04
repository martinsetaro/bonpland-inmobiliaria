import express from 'express';
import cors from 'cors';
import propiedades from '../src/routes/propiedades.route.js'

const Port = process.env.PORT || 4001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));



app.use(propiedades)




app.listen(Port,()=>{
    console.log(`El servidor esta funcionando en el puerto ${Port}`)
})