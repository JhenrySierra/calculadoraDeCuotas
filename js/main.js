// Calculadora de Cuotas 

/*
1)_Preguntar por prompt el nombre del usuario
2)_Preguntar por prompt el precio del producto (asegurarse de convertir a numero con "Number")
3)_Preguntar por descuento
4)_Preguntar por prompt la tasa de interes anual.
5)_Preguntar por prompt la cantidad de cuotas
6)_Realizar calculos internamentes
7)_Almacenar datos como Objetos dentro de un Array
8)_Boton de filtrar por cuotas
*/

//Un array vacio, el cual almacenara los datos de calculos hechos
let calculos = [];
/*
//Funcion que pedira los datos del usuario y del calculo deseado
function calcularCuotas() {
    let datos = {};
    datos.nombre = prompt(`Bienvenido a Calculadora de Cuotas \n\nEsta herramienta te ayudará a calcular cuotas de cualquier producto en base a su Precio Inicial, Descuento (si aplica), Tasa de Interes y Cantidad de cuotas. \n\nPara iniciar tu calculo, ingresa tu nombre:`);
    while (!datos.nombre) {
        datos.nombre = prompt(`Bienvenido a Calculadora de Cuotas! \nEsta herramienta te ayudará a calcular cuotas de cualquier producto en base a su Precio Inicial, Descuento (si aplica), Tasa de Interes y Cantidad de cuotas. \n\nPara iniciar tu calculo, favor de ingresar tu nombre nuevamente:`);
    }

    datos.precio = Number(prompt(`Gracias ${datos.nombre}, \n \nIngrese el precio del producto deseado: `));
    while (!datos.precio) {
        datos.precio = Number(prompt(`Entrada Invalida, Ingrese el precio del producto deseado: `));
    }

    datos.descuento = Number(prompt(`Introduzca descuento ofrecido (si no tiene descuento salte al siguiente paso)`));
    while (isNaN(datos.descuento)) {
        datos.descuento = Number(prompt(`Introduzca descuento ofrecido (si no tiene descuento salte al siguiente paso)`));
    }

    datos.precioFinal = datos.precio - datos.descuento;

    datos.tasa = Number(prompt(`Precio Final: $${datos.precioFinal}\n\n\nIngrese la tasa de interes anual`));
    while (!datos.tasa) {
        datos.tasa = Number(prompt(`Precio Final: $${datos.precioFinal}\n\n\nEntrada Invalida. Ingrese la tasa de interes anual `));
    }

    datos.interes = datos.precioFinal * datos.tasa / 100;

    datos.cuotas = Number(prompt(`Precio Final: $${datos.precioFinal}\nTasa: ${datos.tasa}%\nTotal: $${datos.precioFinal + datos.interes}\n\nIngrese la cantidad de cuotas`));

    while (!datos.cuotas) {
        datos.cuotas = Number(prompt(`Precio Final: $${datos.precioFinal}\nTasa: ${datos.tasa}% \n \nEntrada Invalida. Ingrese la cantidad de cuotas`));
    }

    datos.montoCuota = ((datos.precioFinal + datos.interes) / datos.cuotas).toFixed(2);

    let resultado = (datos.precioFinal + datos.interes) / datos.cuotas;
    resultado = resultado.toFixed(2);

    let mensaje = `Gracias ${datos.nombre}, \n\nSu producto de $${datos.precio}, con un descuento de $${datos.descuento}, queda en un precio final de $ ${datos.precioFinal}, con una tasa de interes de ${datos.tasa}%, equivale a ${datos.cuotas} cuotas de $${resultado} mensual\n\n`;

    let desglose = `Precio: $${datos.precio}\nDescuento: $${datos.descuento}\nPrecio Final: $${datos.precioFinal}\nTasa: ${datos.tasa}%\nCantidad de cuotas: ${datos.cuotas}\nMonto por cuota: $${resultado}\n\nHaz click Aqui para solicitar prestamo`;

    //Mensaje alert que mostrara el mensaje + desglose
    alert(mensaje + desglose);

    //Mostrar mensaje dentro del HTML
    document.getElementById('title').innerHTML = `Bienvenido ${datos.nombre}!`;
    document.getElementById('desglose').innerHTML = `
        Vea debajo el desglose de su calculo de sus cuotas:
        <br><br>- Precio: $${datos.precio}
        <br>- Descuento: $${datos.descuento}
        <br>- Precio Final: $${datos.precioFinal}
        <br>- Tasa: ${datos.tasa}% 
        <br>- Cantidad de cuotas: ${datos.cuotas}
        <br> - Monto por cuota: $${resultado}
        <br><br>`;

    //Objeto'datos' se agregua dentro del Array'calculos' y console log de Array'calculos'
    calculos.push(datos);
    console.log(calculos);
}

//Funcion que crea el filtro por cuotas
function filtrarCuotas(data) {
    let cuotaFiltrada = Number(prompt(`Ingrese la cantidad de cuotas a filtrar: `));
    let dataFiltrada = data.filter(item => item.cuotas === cuotaFiltrada);
    console.log(`Calculos filtrados por cantidad de cuotas: ${cuotaFiltrada}`, dataFiltrada);
}

//Hacer que el boton 'filtrarCuotas' ejecute la funcion filtrarCuotas (Esto lo hice dentro de una funcion anonima porque la funcion 'filtrarCuotas' se ejecutaba desde que se ejecutaba el programa y no esparaba que de click al boton)
document.getElementById('filtrarCuotas').addEventListener('click', function () {
    filtrarCuotas(calculos);
});

//Hacer que boton 'calcularBtn' ejecute la funcion 'calcularCuotas'
document.getElementById('calcularBtn').addEventListener('click', calcularCuotas)
*/


//Funcion que me captura la informacion de los inputs

let form = document.getElementById('form');
let calcularBtn = document.getElementById('calcularBtn');
let limpiar = document.getElementById('limpiar')
let guardar = document.getElementById('guardar');
let resultados = document.getElementById('resultados')

calcularBtn.addEventListener('click', () => {
    //Capturar valores del formulario
    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio').value;
    let descuento = document.getElementById('descuento').value;
    let tasa = document.getElementById('tasa').value;
    let cuotas = document.getElementById('cuotas').value;

    //Crear variables para los calculos

    let precioFinal = precio - descuento;
    let interes = precioFinal * tasa / 100;
    let montoCuota = ((precioFinal + interes) / cuotas).toFixed(2);

    // Verificar si los campos tienen datos validos
    if (isNaN(parseFloat(precio)) || isNaN(parseFloat(descuento)) || isNaN(parseFloat(tasa)) || isNaN(parseInt(cuotas))) {
        alert('Por favor, ingrese datos válidos en los campos correspondientes.');
        return;
    }

    //Guardar los datos dentro de un objeto
    let datos = {
        nombre: nombre,
        precio: precio,
        descuento: descuento,
        precioFinal: precio - descuento,
        tasa: tasa,
        interes: precioFinal * tasa / 10,
        cuotas: cuotas,
        montoCuota: ((precioFinal + interes) / cuotas).toFixed(2)
    };

    //Convertir los datos del formulario en strings
    let nombreHTML = JSON.stringify(datos.nombre);
    let precioHTML = JSON.stringify(datos.precio);
    let descuentoHTML = JSON.stringify(datos.descuento);
    let tasaHTML = JSON.stringify(datos.tasa);
    let cuotasHTML = JSON.stringify(datos.cuotas);

    //Mostrar resultados en HTML
    resultados.innerHTML = `
    <strong>Nombre:</strong>              ${nombreHTML.replace(/"/g, '')} <br>
    <strong>Precio:</strong>              $${precioHTML.replace(/"/g, '')} <br>
    <strong>Descuento:</strong>           $${descuentoHTML.replace(/"/g, '')} <br>
    <strong>Precio Final:</strong>        $${precioFinal} <br>
    <strong>Tasa de Interes:</strong>     ${tasaHTML.replace(/"/g, '')}% <br>
    <strong>Interes Total:</strong>       $${interes} <br>
    <strong>Cantidad de Cuotas:</strong>  ${cuotasHTML.replace(/"/g, '')} <br>
    <strong>Monto por Cuota:</strong>     $${montoCuota}
    `

    guardar.addEventListener('click', () => {
        localStorage.setItem(nombre, JSON.stringify(datos));

    })
}
);

limpiar.addEventListener('click', () => {
    form.reset();
})








