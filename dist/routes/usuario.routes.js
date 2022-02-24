"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_controller_1 = require("../controllers/usuarios.controller");
const usuariosRouter = (0, express_1.Router)();
usuariosRouter.get('/', usuarios_controller_1.getUsuarios);
usuariosRouter.get('/:id', usuarios_controller_1.getUsuario);
usuariosRouter.post('/', usuarios_controller_1.postUsuarios);
usuariosRouter.put('/:id', usuarios_controller_1.putUsuarios);
usuariosRouter.delete('/:id', usuarios_controller_1.deleteUsuarios);
exports.default = usuariosRouter;
//# sourceMappingURL=usuario.routes.js.map