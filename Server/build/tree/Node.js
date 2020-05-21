"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nodo = void 0;
class Nodo {
    constructor(tipoC, lexemaC, idC) {
        this.lstNodo = [];
        this.tipo = tipoC;
        this.lexema = lexemaC;
        this.id = idC;
    }
    searchNode(listaNodo) {
        for (let i = 0; i < listaNodo.length; i++) {
            this.lstNodo.push(listaNodo[i]);
        }
    }
    addLastChildren(NodoAdd) {
        this.lstNodo[this.lstNodo.length - 1].lstNodo.push(NodoAdd);
    }
}
exports.Nodo = Nodo;
