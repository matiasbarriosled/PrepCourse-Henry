function viajar(destino){
    if (destino === "Brasil"){
        console.log("gire a la izquierda");
    }
    else if(destino === "Argentina"){
        console.log("gire a la derecha");
    }
    else{
        console.log("nos perdimos");
    }
}

viajar("Argentina");
viajar("Brasil");
viajar("ni idea");

console.log()

function puedeManejar(edad){
    if (edad > 18){
        console.log("puede manejar");
    }
    
    else{
        console.log("no puede manejar");
    }
}

puedeManejar(90);
puedeManejar(13);
puedeManejar(23);