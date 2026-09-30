
const fondo = document.querySelector("body");
const colores = ["red","purple","pink","blue","yellow","green","orange","brown","gray"]; 
function cambiarFondo(){
    var colorRandom = colores[Math.floor(colores.length * Math.random())]; 
    fondo.style.backgroundColor = colorRandom;

}
