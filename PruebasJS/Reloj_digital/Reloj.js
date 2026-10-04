
const verAlarma = document.getElementById("seleccionAlarma"); 
const verTemp = document.getElementById("temporizador"); 
let t = document.getElementById("tiempo");
let selectTiempo = document.getElementById("seleccion"); 

const divCA = document.getElementById("div3"); 
let totalTempo; 


//Para evitar que se recargue la pagina al darle a submit
const formulario = document.querySelector("form"); 
formulario.addEventListener("submit",function(event){
    event.preventDefault(); 
}); 



// Funciones para mostrar contenido escondido
function mostrarAlarma(){
    if(verAlarma.hasAttribute("hidden")){
        verAlarma.removeAttribute("hidden")
    }else{
        verAlarma.setAttribute("hidden", "") 
        }
}

function mostrarContenido(){
    if(divCA.hasAttribute("hidden")){
        divCA.removeAttribute("hidden")
    }else{
        divCA.setAttribute("hidden", "") 
        }
}



 
function verTiempo(){
    const hoy = new Date();
    let h = hoy.getHours(); 
    let m = hoy.getMinutes(); 
    let s= hoy.getSeconds(); 

    h = addZero(h); 
    m = addZero(m);
    s = addZero(s); 

    t.innerHTML = h + " : " + m + " : " + s; 
    setTimeout(verTiempo,1000);

    
}
//Añade un cero
function addZero (i) {
    if(i<10){ i = "0" + i}
    return i; 

}

//Atributos que se usan en la cuentaAtras

//Función de cuenta atrás para el temporizador
function cuentaAtras(){  
    mostrarContenido(); 
    const valorTempo = selectTiempo.value.split(":");
    totalTempo = parseInt(valorTempo[0])*3600 + parseInt(valorTempo[1])*60 + parseInt(valorTempo[2]);
    contador(); 



}; 


//Creo un "vector" que me divide el string por el caracter :

function contador(){
    
    let h = Math.floor(totalTempo/3600); 
    let m = Math.floor((totalTempo % 3600)/60); 
    let s = totalTempo % 60; 

    h = addZero(h); 
    m = addZero(m);
    s = addZero(s);
let restaTempo = --totalTempo;
    divCA.innerHTML = h + " : " + m + " : " + s; 
    

    if(totalTempo >= 0){
    setTimeout(contador,1000); 
}
  console.log(restaTempo)
}


/**
 * Cuando se pulsa dos veces mostrar contenido varias veces
 * esconde el contador pero sigue haciendo la cuenta atras 
 * y luego salen valores negativos
 * 
 * Falta por hacer la alarma y poner los eventListener para que
 * muestre una alerta
 */