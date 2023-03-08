function cuidadoConElConsoleLog(nombre){
    console.log(nombre);
    return nombre;
}

function otraFuncion(){
    return (
        "el nombre retornado por la funcion 'CuidadoConElConsoleLog' es: " + cuidadoConElConsoleLog("Matias")
    )
}

function cuidadoConElReturn(nombre){
    //tener en cuenta la posicion del return ya que despues de este no se ejecuta mas lineas dentro de la funcion
    return nombre;
    console.log(nombre);
    var hola = "hola";
    return hola;
}
