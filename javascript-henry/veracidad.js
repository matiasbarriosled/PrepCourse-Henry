console.log("veracidad de numeros")
function veracidadNumeros(num){
    if (num){
        console.log(true)
    }else{
        console.log(false)
    }
}

veracidadNumeros(-3)
veracidadNumeros(0)
veracidadNumeros(1)
veracidadNumeros(0.3)

console.log()
console.log("veracidad de strings")
function veracidadStrings(str){
    if (str){
        console.log(true)
    }
    else{
        console.log(false)
    }
}

veracidadStrings("")
veracidadStrings("a")

console.log()
console.log("veracidad de objetos")
function veracidadObjects(objetos){
    if (objetos){
        console.log(true)
    }
    else{
        console.log(false)
    }
}

veracidadObjects(null)
veracidadObjects()
veracidadObjects([])

//   1           -------> true
//   0           -------> false
//   -1          -------> true
//   true        -------> true
//   false       -------> false
//   'string'    -------> true
//   null        -------> false
//   undefined   -------> false
//   []          -------> true

numero = -2 % 1;
console.log(numero);