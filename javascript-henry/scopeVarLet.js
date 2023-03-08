var scopeMensaje = function () {
    if(true) {
         var scopeFunction = 'Caelum';
         let scopeBlock = 'Alura';

        console.log (scopeBlock); // Alura
    }
    console.log (scopeFunction); // Caelum
    console.log("la siguiente linea dara error por no estar definida como var")
    console.log (scopeBlock);
}

scopeMensaje()