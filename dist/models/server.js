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
const express_1 = __importDefault(require("express"));
const usuario_routes_1 = __importDefault(require("../routes/usuario.routes"));
const cors_1 = __importDefault(require("cors"));
const connection_database_1 = __importDefault(require("../db/connection.database"));
class server {
    constructor() {
        this.port = "8080";
        this.paths = {
            usuarios: '/api/usuarios'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "8080";
        this.dbConnerction();
        this.middlewares();
        this.routes();
    }
    dbConnerction() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_database_1.default.authenticate();
                console.log("Database online");
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    middlewares() {
        //cors
        this.app.use((0, cors_1.default)());
        //parseo
        this.app.use(express_1.default.json());
        //carpeta publica
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.paths.usuarios, usuario_routes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en' + this.port);
        });
    }
}
exports.default = server;
//# sourceMappingURL=server.js.map