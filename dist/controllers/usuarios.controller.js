"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuarios = exports.putUsuarios = exports.postUsuarios = exports.getUsuario = exports.getUsuarios = void 0;
const usuario_models_1 = __importDefault(require("../models/usuario.models"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuario_models_1.default.findAll();
    res.json({
        msg: 'getUsuarios',
        usuarios
    });
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_models_1.default.findByPk(id);
    if (usuario) {
        res.json({
            msg: 'getUsuario',
            id,
            usuario
        });
    }
    else {
        res.status(404).json({
            msg: 'No existe ese usuario'
        });
    }
});
exports.getUsuario = getUsuario;
const postUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existe = yield usuario_models_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (!existe) {
            const usuario = yield usuario_models_1.default.create({
                nombre: body.nombre,
                email: body.email,
                estado: body.estado
            });
            res.json(usuario);
        }
        else {
            res.status(400).json({
                msg: "ya existe ese email"
            });
        }
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.postUsuarios = postUsuarios;
const putUsuarios = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'putUsuarios',
        body,
        id
    });
};
exports.putUsuarios = putUsuarios;
const deleteUsuarios = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'deleteUsuarios',
        id
    });
};
exports.deleteUsuarios = deleteUsuarios;
//# sourceMappingURL=usuarios.controller.js.map