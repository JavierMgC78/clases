'use strict';
console.log('ctrl_js');

import Clientes     from "./class_clientes.js";
import Movimientos  from "./class_movimientos.js";

//FUNCION PRINCIPAL
const sbmt = document.getElementById('sbmt');
sbmt.addEventListener('click', (e)=>{
    //console.log('submit');
    e.preventDefault();
    
    //OBTENER LOS DATOS DEL FORMULARIO
    let datosFormulario     = document.forms['form_registro'];
    let selectNombre        = datosFormulario.elements['nombre'];
    let opcionSeleccionada  = selectNombre.options[selectNombre.selectedIndex];
    let nombreCliente       = opcionSeleccionada.textContent;
    //console.log(nombreCliente);

    //OBTENIENDO LOS DATOS DEL CLIENTE
    let cliente = new Clientes(nombreCliente);
    let mov     = new Movimientos(datosFormulario.monto.value);
   
    //CAPTURAR EL NOMBRE DEL CLIENTE
    mov.datosDelCliente = cliente;

    //APLICAR MOVIMIENTOS
    if(datosFormulario.operacion.value == 1){
        document.getElementById('saldo-area').innerHTML += `<br> <p class="saldo">Saldo inicial: $${mov.saldoI()}. Abonó: $${mov.monto()}. <br> Saldo final: $${mov.abonar()} <br>`;
        setTimeout(()=>{
            datosFormulario.reset();
            window.location.reload();    
        }, 5000);
    }

    if(datosFormulario.operacion.value == 2){
        document.getElementById('saldo-area').innerHTML += `<br> <p class="saldo">Saldo inicial: $${mov.saldoI()}. Retiró: $${mov.monto()}. <br> Saldo final: $${mov.retirar()} <br>`;
        setTimeout(()=>{
            datosFormulario.reset();
            window.location.reload();    
        }, 5000);
    }

});