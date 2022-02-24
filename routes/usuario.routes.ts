import {Router} from 'express'
import { deleteUsuarios, getUsuario, getUsuarios, postUsuarios, putUsuarios } from '../controllers/usuarios.controller';

const usuariosRouter:Router=Router();

usuariosRouter.get('/',         getUsuarios);
usuariosRouter.get('/:id',      getUsuario);
usuariosRouter.post('/',        postUsuarios);
usuariosRouter.put('/:id',      putUsuarios);
usuariosRouter.delete('/:id',   deleteUsuarios);

export default usuariosRouter;