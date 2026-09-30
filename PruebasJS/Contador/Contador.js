const valorContador = document.getElementById("valor"); 

function incrementar (){
    var valorActual = parseInt(valorContador.textContent);
    valorActual++; 
    valorContador.textContent = valorActual; 
    if(valorActual < 0){
        valorContador.style.color = "red"; 
    }else if(valorActual == 0){
        valorContador.style.color = "black"; 
    }
    else{
        valorContador.style.color = "green"; 
    }
}
function decrementar (){
    var valorActual = parseInt(valorContador.textContent);
    valorActual--; 
    valorContador.textContent = valorActual;
    if(valorActual < 0){
        valorContador.style.color = "red"; 
    }else if(valorActual == 0){
        valorContador.style.color = "black"; 
    }
    else{
        valorContador.style.color = "green"; 
    }
    
}