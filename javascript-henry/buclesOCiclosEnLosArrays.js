function descripcionFrutas(fruta){
    switch (fruta) {
        case "manzana":
          console.log( "la manzana es una fruta roja");
          break;
        case "limon":
          console.log( "el limon es una fruta acida de color amarillo");
          break;
        case "naranja":
          console.log( "la naranja es una fruta muy utilizada para jugos");
          break;
        default:
          console.log( "no ha ingresado una opcion correcta");
          break;
      }
}

descripcionFrutas("naranja")
descripcionFrutas("kiwi")
descripcionFrutas("manzana")
descripcionFrutas("limon")



console.log()
console.log("mas pruebas for y which")
let arreglo = ["H","L"]
let arreglo2 = []
let result = '';
let i = 0;

do {
    if (i < 1 || i > 3 ){
        console.log(i)
        arreglo2.push(i)
    }
    i = i + 1;
} while (i < 5);

for(let i=0; i<2; i++){
    result = result + arreglo[i] + arreglo2[i]
}

console.log("Hello: " + result);



console.log()
console.log("la declaracion continue")
i = 0;
n = 0;
while (i < 5) {
    i++;
    if (i == 3){
        console.log("omitimos el 3+3 con el continue")
        continue;
    }
    console.log(n+"+"+i+"="+(n += i))
}

console.log("total = "+n)



console.log()
console.log("declaracion break")
function romperConBreak(x) {
    var i = 0;
    var resultado = 1;
    while (i < 5){
        if (i == x)
            break;
        
        i++;
        resultado = resultado * i * x;
    }
    console.log(resultado);
 }

 romperConBreak(3)
 romperConBreak(5)