//eleva el numero por la potencia POW(base, potencia)
var ochoAlCuadrado = Math.pow(8,2);
console.log(ochoAlCuadrado);

console.log()

//redondear al numero mas cercano
var redondearNumeroCercano = Math.round(5.49);
console.log(redondearNumeroCercano);

//redondear al numero mas bajo
var redondearAlNumeroMasBajo = Math.floor(6.99);
console.log(redondearAlNumeroMasBajo);

//redondear al numero mas cercano
var redondearAlNumeroMasAlto = Math.ceil(7.01);
console.log(redondearAlNumeroMasAlto);

console.log()

//maximos y minimos de un conjunto de numeros
var numeroMasAlto = Math.max(10,3,42,5);
var numeroMasBajo = Math.min(4,6,9,8,2);
console.log(numeroMasAlto);
console.log(numeroMasBajo);

console.log()

//numeros random
var numeroRandom = Math.random();
console.log(numeroRandom);//si queremos conseguir un numero entero podemos multiplicarlo y redondearlo
console.log(Math.round(numeroRandom*100));