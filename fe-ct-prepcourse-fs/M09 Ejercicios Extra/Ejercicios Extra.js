/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arregloFinal = [];

   for (var prop in objeto){
      let arreglo = [];
      arreglo.push(prop);
      arreglo.push(objeto[prop]);
      arregloFinal.push(arreglo);
   }

   return arregloFinal;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var listaPalabra = string.split("").sort();
   var letrasObjeto = {};
   var i = 0;
   let num = 1;

   while(i<listaPalabra.length){

      if(listaPalabra[i] === listaPalabra[i+1]){
         num++;
         letrasObjeto[listaPalabra[i]] = num;
      }
      else{
         letrasObjeto[listaPalabra[i]] = num;
         num = 1;
      }
      i++
   }
   return letrasObjeto
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var letraLista = string.split("");
   var resultado = [];
   var listaMayus = [];
   var listaMinus = [];

   for(var i in letraLista){
      if(letraLista[i]===letraLista[i].toUpperCase()){
         listaMayus.push(letraLista[i]);
      }
      else if(letraLista[i]!=letraLista[i].toUpperCase()){
         listaMinus.push(letraLista[i]);
      }
   }
   resultado = listaMayus.concat(listaMinus);
   resultado = resultado.join("");
   
   return resultado;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var fraseLista = frase.split("");
   var resultado = [];
   var indice = 0;
   var cantidadDeIteraciones = 0;

   for(let i=0; i<fraseLista.length; i++){
      let arregloTemporal = [];

      if(fraseLista[i] === " "){
         while(cantidadDeIteraciones > 0){
            arregloTemporal[indice] = fraseLista[i-indice-1];
            indice++;
            cantidadDeIteraciones--;
         }
         arregloTemporal = arregloTemporal.concat(fraseLista[i]);
         resultado = resultado.concat(arregloTemporal);
         indice = 0;
      }
      else if(i === fraseLista.length-1){
         while(cantidadDeIteraciones >= 0){
            arregloTemporal[indice] = fraseLista[i-indice];
            indice++;
            cantidadDeIteraciones--;
         }
         resultado = resultado.concat(arregloTemporal);
         j = 0;
      }
      else{
         cantidadDeIteraciones++;
      }
   }
   resultado = resultado.join("");
   return resultado;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var num = numero.toString().split('');
   var capicuaString = "No es capicua";
   if(num[0] === num[num.length-1] & num[1] === num[num.length-2] ){
      capicuaString = "Es capicua";
   }

   return capicuaString;
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var varString = string;
   var letrasNoAdmitidas = ["a","b","c"];
   for (let i in letrasNoAdmitidas){
      varString = varString.split(letrasNoAdmitidas[i]).join("");
   }
   return varString;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var listaPalabras = arrayOfStrings;
   var resultado = [];

   for(let i=0; i < listaPalabras.length; i++){
      let indice = 0;
      let mayorQueI = 0;

      while(indice < listaPalabras.length){
         if(listaPalabras[i].length > listaPalabras[indice].length) mayorQueI++;
         indice++;
      }

      if(resultado[mayorQueI]){
         let ocupado = true;
         let libre = 0;

         while(ocupado){
            libre++;
            ocupado = resultado[mayorQueI+libre]?true:false;
         }
         resultado[mayorQueI+libre] = listaPalabras[i];
      }
      else resultado[mayorQueI] = listaPalabras[i];
   }

   return resultado;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var resultado = [];

   array1.forEach((numArr1) => {
      array2.forEach((numArr2) => {
         if(numArr1 === numArr2 & !resultado.includes(numArr1)){
            resultado.push(numArr1);
         }
      });
   });

   return resultado;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
