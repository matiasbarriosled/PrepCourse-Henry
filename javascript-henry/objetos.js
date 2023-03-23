var deportes = {
    conBalon : ['football','basketball','rugby'],
    sinBalon : ['boxeo','surf','trekking'],
};

var persona = {
    nombre : 'Lucas',
    edad : 25,
    estudios : {esProgramador : true}
}


//DOT NOTATION
console.log(deportes.sinBalon);
console.log(persona)
console.log(persona.estudios)
"asignar valores a las propiedades de un objeto"
persona.nombre = 'Martin';
persona.edad = 29;
console.log(persona.nombre);

"crear propiedades en un objeto vacio"
var autos = {};
autos.marcas = ['Ford','Fiat','Audi'];
"para eliminar propiedades delete autos.marcas;"
console.log(autos);

var misFunciones = {
    saludar : function(){
        console.log('Hola');
    },
};
misFunciones.saludar();
 

//BRACKET NOTATION
var atuendos = {
    manos : ['guantes','anillos'],
    pies : ['zapatos','soquetes'],
};
console.log(atuendos.manos);

atuendos["piernas"] = ['bermudas','pantalones'];
console.log(atuendos);

var comidas = {};
var diferenciaDeNotaciones = function(propUno,propDos){
    comidas.propUno = ["frutas","vegetales"];
    comidas[propDos] = ["hamburguesa", "papas fritas"];
};
"CUANDO SE ENVIE LOS ARGUMENTOS A TRAVEZ DE LA FUNCION LA UNICA QUE TOMARA CORRECTAMENTE EL CAMBIO"
"SERA EL ARGUMENTO PASADO POR BRACKET NOTATION "
diferenciaDeNotaciones("saludable", "no saludable");
console.log(comidas);


//OBJETOS AVANZADOS
var libro = {autor : 'Borges', genero: 'Policial', año : 1998};
var tienePropiedad = libro.hasOwnProperty('nombre');
var tienePropiedad2 = libro.hasOwnProperty('autor');
console.log(tienePropiedad);
console.log(tienePropiedad2);

var propiedadesLibro = Object.keys(libro);
console.log(propiedadesLibro);

var mundo = {
    continentes : 7,
    paises : 195,
    oceanos : 5,
};
"El bucle For-In nos permite iterar sobre un objeto utilizando dos variables pivot. Una representa el objeto"
"que recorremos, y la otra la propiedad en la que se está realizando la iteración. Utilizando ambos valores"
"podremos acceder al valor de cada propiedad del objeto."
for(var prop in mundo){
    console.log('propiedad : '+prop)
    console.log('valor : '+mundo[prop])
}

"Dentro de este lenguaje de programación existe un objeto global llamado this. Este nos permite manipular"
"el contexto en el que las funciones y la información está siendo ejecutada. De esta forma podremos tener"
"un alcance más preciso dentro de nuestro código."
var mascota = {
    animal : 'perro',
    raza : 'ovejero aleman',
    amismotos : true,
    dueña : 'Maria Lopez',
    info : function(){
        "console.log('el animal es un '+animal+' de raza '+raza);"
        console.log('el animal es un '+this.animal+" de raza "+this.raza);
    },
}

mascota.info();