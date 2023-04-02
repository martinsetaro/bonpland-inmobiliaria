import express from 'express';
import cors from 'cors';


const port = process.env.PORT || 4001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use("/",(req,res)=>{
res.send("Puerto 4001")
})




app.listen(port,()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})