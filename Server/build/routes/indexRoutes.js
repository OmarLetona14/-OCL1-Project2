"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
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
            var resultado = parser(entrada);
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
