"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const grammar = __importStar(require("../grammar/grammar"));
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => {
            res.send('Hello');
        });
        this.router.post('/analizador', (req, res) => {
            var entrada = req.body.text;
            var resultado = grammar.parser(entrada);
            var json = JSON.stringify(resultado, null, 2);
            json = json.split('lexema').join('text').split('lstNodo').join('children');
            console.log(json);
            this.tree(resultado);
            res.send(json);
        });
    }
    tree(temporal) {
        if (temporal != null) {
            if (temporal.lstNodo != null && temporal.lstNodo.length > 0) {
                for (let index = 0; index < temporal.lstNodo.length; index++) {
                    console.log(temporal.lexema + " -> " + temporal.lstNodo[index].lexema);
                    this.tree(temporal.lstNodo[index]);
                }
            }
        }
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
