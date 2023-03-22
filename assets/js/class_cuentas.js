'use strict';

export default class Cuentas{
    #objCuenta;


    constructor(){
        //SIMULADOR BASE DE DATOS----------------------------------------------
        const cuentas = [
            {idCuenta: '001', saldo: 5000},
            {idCuenta: '002', saldo: 5600}
        ];
        //Buscar los datos relacionados al cliente
        //let cuentaDelCliente = cuentas.filter(datCta => datCta.idCuenta == datosDelCliente[0].idCuenta);
        //----------------------------------------------------------------------

        this.#objCuenta = null

    }



}