'use strict';

import Clientes  from "./class_clientes.js";

export default class Movimientos{
    #monto;
    #saldoI;
    #datosDelCliente;

    //captur y proteger los datos del cliente
    set datosDelCliente(clientes){
        if(clientes instanceof Clientes){
            this.#datosDelCliente = clientes.datos;
            //console.log(this.#datosDelCliente);
        }   
    }
    
    constructor(monto){
        this.#monto = parseInt(monto);

    }


    abonar(){
        return this.#saldoI + this.#monto;
    }

    retirar(){
        return this.#saldoI - this.#monto;
    }

    saldoI(){
        this.#saldoI = this.#datosDelCliente[0].saldo;
        return this.#saldoI;
    }

    monto(){
        return this.#monto;
    }

}