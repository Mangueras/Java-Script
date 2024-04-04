var nombre = "Benjamin";                                                                                                                            
var edad = 16;
console.log("¡Hola, " + nombre + "! Tienes " + edad + " años.")

function calcularAreaRectangulo(largo, ancho){
    return largo * ancho;
}
const largo = 5;
const ancho = 3;
const area = calcularAreaRectangulo(largo, ancho)
console.log("El área del rectángo es: " + area)

function calcularAreaTriangulo(base, altura) {
    var area = (base * altura) / 2;
    return area;
}
var base = 5; 
var altura = 8; 
var areaT = calcularAreaTriangulo(base, altura)
console.log("El área del triángulo es: " + areaT)

function sumarFracciones(num1, den1, num2, den2) {
    var sumaNum = (num1 * den2) + (num2 * den1);
    var sumaDen = den1 * den2;
    return `${sumaNum}/${sumaDen}`;
}
var num1 = 1;
var den1 = 3;
var num2 = 1;
var den2 = 3;
console.log("la suma de " + num1 +"/"+ den1 +" + "+ num2 +"/"+ den2 +":");
console.log("la suma de las fracciones es: " + sumarFracciones(num1, den1, num2, den2));

function restaFracciones(num3, den3, num4, den4) {
    var restaNum = (num3 * den4) - (num4 * den3);
    var restaDen = den3 * den4;
    return `${restaNum}/${restaDen}`;
}
var num3 = 1;
var den3 = 3;
var num4 = 1;
var den4 = 3;
console.log("la resta de " + num3 +"/"+ den3 +" - "+ num4 +"/"+ den4 +":");
console.log("la resta de las fracciones es: " + restaFracciones(num3, den3, num4, den4));

function encontrarMaximo(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
var numero1 = 10;
var numero2 = 7;
var maximo = encontrarMaximo(numero1, numero2);
console.log("El máximo entre", numero1, "y", numero2, "es:", maximo);

function diferenciadorParImpar(numero) {
    if(numero % 2 === 0) {
        return "El número " + numero + " es par.";
    } else {
        return "El número " + numero + " es impar.";
    }
}
console.log(diferenciadorParImpar(9));
console.log(diferenciadorParImpar(12));

function calcularTiempoDeViaje(distancia, transporte) {
    var velocidad;
    switch (transporte) {
        case "coche":
            velocidad = 80; 
            break;
        case "tren":
            velocidad = 120;
            break;
        case "avion":
            velocidad = 800; 
            break;
        default:
            return "Transporte no válido";
    }
    var tiempoEnHoras = distancia / velocidad;
    var horas = Math.floor(tiempoEnHoras);
    var minutos = Math.round((tiempoEnHoras - horas) * 60);
    return "El tiempo de viaje en " + transporte + " es aproximadamente " + horas + " horas y " + minutos + " minutos.";
}
var distancia = 600;
console.log(calcularTiempoDeViaje(distancia, "coche"));
console.log(calcularTiempoDeViaje(distancia, "tren"));
console.log(calcularTiempoDeViaje(distancia, "avion"));