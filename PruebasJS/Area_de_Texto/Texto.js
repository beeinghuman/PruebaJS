let texto = document.getElementById("area");
let ultimoInput = document.getElementById("ultimoInput"); 
const boton = document.getElementById("enviar"); 


function mandarTexto() {
    ultimoInput.textContent = texto.value;
}

boton.addEventListener("keyup",function(){
    if(boton.keyCode === 13){
        return mandarTexto(); 
    }
})