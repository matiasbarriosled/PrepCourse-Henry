// FUNCIÓN CONSTRUCTORA
function Auto(puertas, color, marca, año, ruedas) {
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
}
let miPrimerAuto = new Auto(2, 'Rojo', 'Ferrari', 2018, 4);
console.log(miPrimerAuto);
console.log(miPrimerAuto.marca);

 // EXPRESIÓN DE CLASE
class Auto2 {
    constructor(puertas, color, marca, año, ruedas) {
       this.puertas = puertas;
       this.color = color;
       this.marca = marca;
       this.año = año;
       this.ruedas = ruedas;
    }
}


//HERENCIA - prototipos: mecanismo x el cual los objetos||elementos de Javascript pueden extender sus propiedades y métodos
"los arreglos ya heredan metodos como push, pop, indexOf, etc. "
"pero tambien podemos crear un metodo propio para heredarlo"
Array.prototype.mayoresQueTres = function(){
    var arregloModificado = []
    for(let i=0; i<this.length; i++){
        if(this[i] > 3){
            arregloModificado.push(this[i]);
        }
    }
    return arregloModificado;
}

var arreglo = [1,2,3,4,5];
var arregloNuevo = arreglo.mayoresQueTres();
console.log(arregloNuevo);

class Latinoamerica {
    constructor(){
        this.paises = []
    }
};

Latinoamerica.prototype.agregarPaises = function (pais){
    this.paises.push(pais);
};

var continente = new Latinoamerica();
continente.agregarPaises('Argentina');
console.log(continente.paises)