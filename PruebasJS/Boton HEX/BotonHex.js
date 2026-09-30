
const fondo = document.querySelector("body");
const valoresHex = "0123456789ABCDEF"; 

function cambiarFondo(){
    var colorRandom = "#"; 
    for(let i = 0; i<6; i++){
        var valorHexRan = valoresHex[Math.floor(Math.random()*valoresHex.length)]; 
        colorRandom += valorHexRan;
    }
    fondo.style.backgroundColor = colorRandom;
    console.log(colorRandom);
}


    