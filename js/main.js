// Calculadora de Cuotas 

/*
1)_Formulario que pide datos al usuario para calcular cuotas
2)_Pide Nombre, Precio del producto, descuento, tasa y cuotas deseadas.
3)_Hace los calculos internos y muestra los resultados por HTML
4)_Posee botones con distintas funciones como Calcular, Limpiar Formulario y Guardar en localStorage
5)_Posee una seccion de Calculos Guardados que muestra los calculos guardados en localStorage
*/

//Selecciona elementos HTML
let form = document.getElementById('form');
let calcularBtn = document.getElementById('calcularBtn');
let limpiar = document.getElementById('limpiar')
let guardar = document.getElementById('guardar');
let resultados = document.getElementById('resultados')
let contenedorCalculos = document.getElementById('contenedorCalculos')

//Funcion que me captura la informacion de los inputs
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
    typeof nombre !== 'string' || isNaN(parseFloat(precio)) || isNaN(parseFloat(descuento)) || isNaN(parseFloat(tasa)) || isNaN(parseInt(cuotas)) ? alert('Por favor, ingrese datos válidos en los campos correspondientes.') : null;


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
    <strong>Nombre:</strong> ${nombreHTML.replace(/"/g, '')} <br>
    <strong>Precio:</strong> $${precioHTML.replace(/"/g, '')} <br>
    <strong>Descuento:</strong> $${descuentoHTML.replace(/"/g, '')} <br>
    <strong>Precio Final:</strong> $${precioFinal} <br>
    <strong>Tasa de Interes:</strong> ${tasaHTML.replace(/"/g, '')}% <br>
    <strong>Interes Total:</strong> $${interes} <br>
    <strong>Cantidad de Cuotas:</strong> ${cuotasHTML.replace(/"/g, '')} <br>
    <strong>Monto por Cuota:</strong> $${montoCuota}
    `

    //Guardar en localStorage, clave Nombre y valor obj Datos pasados a json
    guardar.addEventListener('click', () => {
        localStorage.setItem(nombre, JSON.stringify(datos));
        actualizarContenedorCalculos();

    })
}
);

//Event listener para boton de Limpiar, que limpia el formulario
limpiar.addEventListener('click', () => {
    form.reset();
})

// Recuperar Datos del localStorage
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let data = JSON.parse(localStorage.getItem(key));

    // Generar HTML para cada obj en localStorage
    let itemHTML = `
        <div class="card">
            <div class="card-body calculoGuardado">
                <h5 class="card-title"><strong>Nombre: ${data.nombre}</strong></h5>
                <p class="card-text"><strong>Precio:</strong> $${data.precio}</p>
                <p class="card-text"><strong>Descuento:</strong> $${data.descuento}</p>
                <p class="card-text"><strong>Precio Final:</strong> $${data.precioFinal}</p>
                <p class="card-text"><strong>Tasa de Interes:</strong> ${data.tasa}%</p>
                <p class="card-text"><strong>Interes Total:</strong> $${data.interes}</p>
                <p class="card-text"><strong>Cantidad de Cuotas:</strong> ${data.cuotas}</p>
                <p class="card-text"><strong>Monto por Cuota:</strong> $${data.montoCuota}</p>
            </div>
        </div>
    `;

    // Incluir el HTML generado dentro del contenedor HTML
    contenedorCalculos.innerHTML += itemHTML;
}

//Generar card para los Obj en localStorage para cuando se guarde calculo nuevo
function generarCardCalculo(key, data) {
    return `
    <div class="card calculoGuardado">
        <div class="card-body ">
            <h5 class="card-title"><strong>Nombre: ${data.nombre}</strong></h5>
            <p class="card-text"><strong>Precio:</strong> $${data.precio}</p>
            <p class="card-text"><strong>Descuento:</strong> $${data.descuento}</p>
            <p class="card-text"><strong>Precio Final:</strong> $${data.precioFinal}</p>
            <p class="card-text"><strong>Tasa de Interes:</strong> ${data.tasa}%</p>
            <p class="card-text"><strong>Interes Total:</strong> $${data.interes}</p>
            <p class="card-text"><strong>Cantidad de Cuotas:</strong> ${data.cuotas}</p>
            <p class="card-text"><strong>Monto por Cuota:</strong> $${data.montoCuota}</p>
        </div>
    </div>
    `;
}

// Actualizar contenedor HTML "contenedorCalculos"  con los datos del local Storage
function actualizarContenedorCalculos() {
    contenedorCalculos.innerHTML = '';
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let data = JSON.parse(localStorage.getItem(key));
        let itemHTML = generarCardCalculo(key, data);
        contenedorCalculos.innerHTML += itemHTML;
    }
}
