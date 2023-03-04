// Calculadora de cuotas para prestamos

/*
1)_Preguntar por prompt el nombre del usuario
2)_Preguntar por prompt el precio del producto (asegurarse de convertir a numero con "Number")
3)_Preguntar por descuento
4)_Preguntar por prompt la tasa de interes anual.
5)_Preguntar por prompt la cantidad de cuotas
6)_Realizar calculos internamentes
7)_Mandar resultados por alert
*/
/*
let datos = function (nombre, precio, descuento, tasa, cuotas) {

    nombre = prompt(`Bienvenido a Calculadora de Cuotas \n\nEsta herramienta te ayudará a calcular cuotas de cualquier producto en base a su Precio Inicial, Descuento (si aplica), Tasa de Interes y Cantidad de cuotas. \n\nPara iniciar tu calculo, ingresa tu nombre:`)
    while (!nombre) {
        nombre = prompt(`Bienvenido a Calculadora de Cuotas! \nEsta herramienta te ayudará a calcular cuotas de cualquier producto en base a su Precio Inicial, Descuento (si aplica), Tasa de Interes y Cantidad de cuotas. \n\nPara iniciar tu calculo, favor de ingresar tu nombre nuevamente:`);
    }

    precio = Number(prompt("Gracias " + nombre + ", \n \nIngrese el precio del producto deseado: "));
    while (!precio) {
        precio = Number(prompt("Entrada Invalida, Ingrese el precio del producto deseado: "));
    }

    descuento = Number(prompt("Introduzca descuento ofrecido (si no tiene descuento salte al siguiente paso)"));
    while (isNaN(descuento)) {
        descuento = Number(prompt("Introduzca descuento ofrecido (si no tiene descuento salte al siguiente paso)"));
    }

    let precioFinal = (precio - descuento);

    tasa = Number(prompt("Precio Final: $" + precioFinal + "\n \n \nIngrese la tasa de interes anual"));
    while (!tasa) {
        tasa = Number(prompt("Precio Final: $" + precioFinal + "\n \n \nEntrada Invalida. Ingrese la tasa de interes anual "));
    }

    let interes = ((precioFinal * tasa) / 100);

    cuotas = Number(prompt("Precio Final: $" + precioFinal +
        "\nTasa: " + tasa + "%" +
        "\nTotal : $" + (precioFinal + interes) +
        "\n\nIngrese la cantidad de cuotas"));

    while (!cuotas) {
        cuotas = Number(prompt("Precio Final: $" + precioFinal + "\nTasa: " + tasa + "% \n \nEntrada Invalida. Ingrese la cantidad de cuotas"));
    }

    let resultado = (precioFinal + interes) / cuotas;
    resultado = resultado.toFixed(2);

    let mensaje = "Gracias " + nombre +
        ", \n\nSu producto de $" + precio +
        ", con un descuento de $" + descuento +
        ", queda en un precio final de $ " + precioFinal +
        ", con una tasa de interes de " + tasa +
        "%, equivale a " + cuotas +
        " cuotas de $" + resultado + " mensual\n\n"

    let desglose = "Precio: $" + precio +
        "\nDescuento: $" + descuento +
        "\nPrecio Final:  $" + precioFinal +
        "\nTasa: " + tasa +
        "% \nCantidad de cuotas: " + cuotas +
        "\nMonto por cuota: $" + resultado +
        "\n\nHaz click Aqui para solicitar prestamo"

    alert(mensaje + desglose);

    document.getElementById('title').innerHTML = "Bienvenido " + nombre + "!";

    document.getElementById('desglose').innerHTML =
        "- Precio: $" + precio +
        "<br>- Descuento: $" + descuento +
        "<br>- Precio Final: $" + precioFinal +
        "<br>- Tasa: " + tasa +
        "% <br> - Cantidad de cuotas: " + cuotas +
        "<br> - Monto por cuota: $" + resultado +
        "<br><br>";
}

datos();
*/


let calculos = [];

function calcularCuotas() {
    let datos = {};
    datos.nombre = prompt(`Bienvenido a Calculadora de Cuotas \n\nEsta herramienta te ayudará a calcular cuotas de cualquier producto en base a su Precio Inicial, Descuento (si aplica), Tasa de Interes y Cantidad de cuotas. \n\nPara iniciar tu calculo, ingresa tu nombre:`);
    while (!datos.nombre) {
        datos.nombre = prompt(`Bienvenido a Calculadora de Cuotas! \nEsta herramienta te ayudará a calcular cuotas de cualquier producto en base a su Precio Inicial, Descuento (si aplica), Tasa de Interes y Cantidad de cuotas. \n\nPara iniciar tu calculo, favor de ingresar tu nombre nuevamente:`);
    }

    datos.precio = Number(prompt(`Gracias ${datos.nombre}, \n \nIngrese el precio del producto deseado: `));
    while (!datos.precio) {
        datos.precio = Number(prompt("Entrada Invalida, Ingrese el precio del producto deseado: "));
    }

    datos.descuento = Number(prompt("Introduzca descuento ofrecido (si no tiene descuento salte al siguiente paso)"));
    while (isNaN(datos.descuento)) {
        datos.descuento = Number(prompt("Introduzca descuento ofrecido (si no tiene descuento salte al siguiente paso)"));
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

    alert(mensaje + desglose);

    document.getElementById('title').innerHTML = "Bienvenido " + datos.nombre + "!";

    document.getElementById('desglose').innerHTML =
        "Vea debajo el desglose de su calculo de su credito:" +
        "<br><br>- Precio: $" + datos.precio +
        "<br>- Descuento: $" + datos.descuento +
        "<br>- Precio Final: $" + datos.precioFinal +
        "<br>- Tasa: " + datos.tasa +
        "% <br> - Cantidad de cuotas: " + datos.cuotas +
        "<br> - Monto por cuota: $" + resultado +
        "<br><br>";

    calculos.push(datos);
    console.log(calculos);
}

/*
calcularCuotas();
*/
document.getElementById('calcularBtn').addEventListener('click', calcularCuotas);



