//AND
console.log("operador AND")
function mayorYMenorYPar(num){
    if (num > 5 && num < 10 && num % 2 === 0) console.log(true);
    else console.log(false);
}

mayorYMenorYPar(6)
mayorYMenorYPar(7)
mayorYMenorYPar(8)

console.log()
console.log("operador OR")
//OR
function operadorOr(str){
    if (str === "Henry" || str.length > 2) console.log(true);
    else console.log(false);
}

operadorOr("Henry")
operadorOr("E")
operadorOr("Javascript")

console.log()
console.log("operador NOT")
function negacion(permiso){
    if (!permiso) console.log("tiene permiso")
    else console.log("no tiene permiso")
}

negacion(true)
negacion(false)

console.log()
function condicionCompleja(num){
    if (num > 9 && num % 2 ===0 || num === 3){
        console.log(true)
    }
    else
    console.log(false)
}

condicionCompleja(10)
condicionCompleja(6)
condicionCompleja(3)
condicionCompleja(8)