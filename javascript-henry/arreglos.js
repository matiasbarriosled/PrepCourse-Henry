var listaDeCompras = [];
listaDeCompras[3] = "tomates";
console.log(listaDeCompras);

listaDeCompras[1] = "lechugas";
console.log(listaDeCompras);

var elementoDelArray = listaDeCompras[1];
console.log(elementoDelArray);
console.log(listaDeCompras.length);

// Lenght
var nombres = ['Menganito', 'Fulanito', 'Juancito', 'Pepito', 'Luisito','Julito'].length;
console.log(nombres);
console.log();

// Metodos
var colores = ["verde","naranja"];
console.log(colores);
console.log("agregar un elemento al final de la lista con push()");
colores.push("rojo");
console.log(colores);
console.log("agregar un elemento al principio de la lista con unshift()");
colores.unshift("marron");
console.log(colores);
console.log("eliminar el ultimo elemento con pop()");
colores.pop();
console.log(colores);
console.log("eliminar el primer elemento con shift()");
colores.shift();
console.log(colores); 

// includes
var pintores = ["Picasso", "Velazques", "Van Gogh", "Dali"];
var incluyeMonet = pintores.includes("Monet");
console.log(incluyeMonet); 

// Con every() se verifica que cada uno de los elementos, coincidan con la condicion
var numeros = [8,6,6,7,9];
var cumpleCondicion = numeros.every((num) =>{
    return num > 5;
}
);
console.log(cumpleCondicion); 

var palabra = "Henri";
var palabraSeparada = palabra.split("");
console.log(palabraSeparada);
palabraSeparada.pop();
palabraSeparada.push("y");
console.log(palabraSeparada);
var palabraArreglada = palabraSeparada.join(""); 

// FOR EACH
var numeros = [1,2,3,4,5];
numeros.forEach((num) => console.log(num));
console.log();
numeros.forEach(num => {
    if(num === 3){
        numeros[num] +=1;
        console.log(numeros);
        }
    }
);
console.log()

var masUno = numeros.map(
    (num) =>{
        return num + 1;
    }
);
console.log(masUno);

// FOR 
var arreglo = [32,71,84,19,57];

for (let i=0; i<arreglo.length;i++){
    console.log(arreglo[i])
}
console.log()

function encontrarLetraP(string){
    let letras = string.split("");
    let cantidad = 0;
    for (let i=0; i<letras.length;i++){
        if (letras[i]==="p"){
            cantidad += 1;
        }
    }
    if (cantidad > 1){
        console.log("contiene ", cantidad, " letras P!")
    }
    else if(cantidad === 1){
        console.log("contiene una sola letra P")
    }
    else{
        console.log("no contiene ninguna letra P")
    }

}

encontrarLetraP("pepe")
encontrarLetraP("historia")
console.log()

// WHILE
var arregloWhile = [];
while (arregloWhile.length < 5){
    arregloWhile.push("Hola");
};
console.log(arregloWhile);