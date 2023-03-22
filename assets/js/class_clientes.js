'use strict';

export default class Clientes{
    #datos;

    get datos(){
        return this.#datos;
    }
    
    constructor(nombre){
        //SIMULADOR BASE DE DATOS----------------------------------------------
        const clientes = [
            {name: 'Peter Park',      cuenta: '001', saldo: 5000},
            {name: 'Diana de Themys', cuenta: '002', saldo: 6500}
        ];

        //Buscar los datos relacionados al cliente
        let datosDelCliente = clientes.filter(ele => ele.name == nombre);
        //----------------------------------------------------------------------

        //Asignacion de variables
        this.#datos = datosDelCliente;
        //console.log(this.#datosDelCliente);

    }



}