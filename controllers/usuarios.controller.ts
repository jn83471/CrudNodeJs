import { Request, Response } from "express";
import Usuario from "../models/usuario.models";

export const getUsuarios=async( req:Request,res:Response)=>{
    const usuarios=await Usuario.findAll();
    res.json(
        {
            msg:'getUsuarios',
            usuarios
        }
    )
}

export const getUsuario=async ( req:Request,res:Response)=>{
    const {id}=req.params;
    const usuario=await Usuario.findByPk(id);
    if(usuario){
        res.json(
            {
                msg:'getUsuario',
                id,
                usuario
            }
        )
    }
    else{
        res.status(404).json({
            msg:'No existe ese usuario'
        })
    }
    
}

export const postUsuarios=async ( req:Request,res:Response)=>{
    const {body}=req;
    try {
        const existe=await Usuario.findOne({
            where:{
                email:body.email
            }
        });
        if(!existe){
            const usuario=await Usuario.create({
                nombre:body.nombre,
                email:body.email,
                estado:body.estado
            });
            res.json(usuario);
        }
        else{
            res.status(400).json({
                msg:"ya existe ese email"
            })
        }
        
    } catch (error:any) {
        throw new Error(error)
    }
}


export const putUsuarios=( req:Request,res:Response)=>{
    const {id}=req.params;
    const {body}=req;
    res.json(
        {
            msg:'putUsuarios',
            body,
            id
        }
    )
}


export const deleteUsuarios=( req:Request,res:Response)=>{
    const {id}=req.params;
    res.json(
        {
            msg:'deleteUsuarios',
            id
        }
    )
}