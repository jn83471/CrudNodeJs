import express,{Application} from 'express';
import usuariosRouter from '../routes/usuario.routes';
import cors from 'cors';

import db from '../db/connection.database'
class server{
    private app: Application;
    private port:string="8080";
    private paths={
        usuarios:'/api/usuarios'
    }
    constructor(){
        this.app=express();
        this.port=process.env.PORT || "8080";
        this.dbConnerction();
        this.middlewares();
        this.routes();
    }
    async dbConnerction(){
        try{
            await db.authenticate();
            console.log("Database online");
        }
        catch(error:any){
            throw new Error(error);
        }
    }
    middlewares(){
        //cors
        this.app.use(cors())
        //parseo
        this.app.use(express.json())
        //carpeta publica
        this.app.use(express.static('public'));
    }
    routes(){
        this.app.use(this.paths.usuarios,usuariosRouter);
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log('servidor corriendo en'+this.port);
        });
    }
    
}

export default server;