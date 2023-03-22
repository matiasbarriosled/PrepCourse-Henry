/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   var primerElemento = array[0];
   return primerElemento;
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   var ultimoElemento = array[array.length - 1];
   return ultimoElemento;
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   var longitud = array.length;
   return longitud;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var arregloNuevo = array.map(
      (num)=>{
         return num + 1;
      }
   );
   return arregloNuevo;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   let arregloRecibido = array;
   arregloRecibido.push(elemento);
   return arregloRecibido;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   let arregloRecibido = array;
   arregloRecibido.unshift(elemento);
   return arregloRecibido;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   let palabrasArray = palabras.join(" ");
   return palabrasArray;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   let palabraIncluida = array.includes(elemento);
   return palabraIncluida;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let sumaTotal = 0;
   for (let i=0; i<arrayOfNums.length; i++){
      sumaTotal = sumaTotal + arrayOfNums[i];
   };
   return sumaTotal;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let sumaNotas = 0;
   for (let i=0; i<resultadosTest.length; i++){
      sumaNotas = sumaNotas + resultadosTest[i]
   }
   return sumaNotas/resultadosTest.length;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   let numeroMayor = 0;
   for(let i=0; i<arrayOfNums.length; i++){
      if (numeroMayor<arrayOfNums[i]){
         numeroMayor=arrayOfNums[i];
      };
   };
   return numeroMayor;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   let producto = 1; 

   if(arguments.length === 0){
      producto = 0;
   }
   else{
      for(let i=0; i<arguments.length; i++){
         producto = producto * arguments[i];
      }
   }
   return producto;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   listaMayores = [];
   array.forEach(mayor => {
      if(mayor > 18){
         listaMayores.push(mayor)
      }
   });
   
   return listaMayores.length;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   var diaSemana;
   if(numeroDeDia === 1 || numeroDeDia === 7){
      diaSemana = "Es fin de semana";
   }
   else{
      diaSemana = "Es dia laboral";
   }
   return diaSemana;
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   num = num.toString();
   let numeroLista = num.split("");
   let nueve = false;

   if(numeroLista[0] == 9){
      nueve = true;
   }

   return nueve;
}


function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   let numIgual = 0;
   let esVerdadero;
   for (let i=0; i<array.length; i++){
      if (i === 0){
         numIgual = array[0];
      }
      else if(numIgual === array[i]){
         numIgual = array[i];
         esVerdadero = true;
      }
      else{
         esVerdadero = false;
         break;
      }
   }
   return esVerdadero;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   let meses = [];
   let mensaje = "No se encontraron los meses pedidos";

   for (let i=0; i<array.length; i++){
      if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
         meses.push(array[i]);
      }
   }
   if (meses.length != 3){
      return mensaje;
   }
   else{
      return meses;
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let multiplosDeSeis = [];
   for (let i=0; i<=10; i++){
      multiplosDeSeis.push(6*i)
   }
   return multiplosDeSeis
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   let mayor = [];
   for (let i=0; i<array.length; i++){
      if(array[i] > 100){
         mayor.push(array[i]);
      }
   }
   return mayor;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let i = 0;
   let iteraciones = 10;
   let sumado = num;
   let numeros = [];
   while(i<iteraciones){
      sumado += 2;

      if(sumado === iteraciones){
         break;
      }
      else{
         numeros.push(sumado);
         i++;
      }
   }

   if(i === iteraciones){
      return numeros;
   }
   else{
      return "Se interrumpió la ejecución"
   }
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let i = 0;
   let iter = 10;
   let numeros = [];
   let sumado = num;
   for (i; i<iter; i++){
      if(i != 4){
         sumado += 2;
         numeros.push(sumado);
      }
      else{
         continue;
      }
   }

   return numeros;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
