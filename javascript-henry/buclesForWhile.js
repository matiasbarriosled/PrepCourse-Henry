var suma = 0;

for (let i=0; i<5; i++){
    suma = suma + 1;
    console.log("variable de iteracion: ",i);
}
console.log("variable suma: ",suma)

for (let i=0; i<5; i++){
    console.log(suma,"+",i);
    suma = suma +i;
    console.log("=",suma);
}
console.log("total: ",suma)

var otraSuma = 0;
console.log()
while (otraSuma<3){
    otraSuma = otraSuma + 1;
    console.log(otraSuma)
}