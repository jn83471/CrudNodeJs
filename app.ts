import dotenv from 'dotenv'
import server from "./models/server";
dotenv.config();

export const nombre='jesus';


const serv:server=new server();
serv.listen();
