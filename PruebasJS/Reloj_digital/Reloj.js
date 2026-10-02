
const verAlarma = document.getElementById("seleccionAlarma"); 
const verTemp = document.getElementById("temporizador"); 
let t = document.getElementById("tiempo");
let selectTiempo = document.getElementById("seleccion"); 

const divCA = document.getElementById("div3"); 


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

//Función de cuenta atrás para el temporizador
function cuentaAtras(){  
    mostrarContenido(); 
    contador(); 

   //const horaReal = hoy.getHours() + " : " + hoy.getMinutes() + " : " + hoy.getSeconds(); 

}; 

function contador(){
    const hoy = new Date(); 
    const temp = new Date("hoy.getYear()-hoy.getMonth()-hoy.getDay()TvalorTempo"); 
const valorTempo = selectTiempo.value;
console.log(temp)
   /**for(i=0; i < valorTempo; i++){
        divCA.innerHTML = valorTempo - i;
        setTimeout(contador, 1000);
  }
  */
}


/**
 * Para el temporizador y la alarma debo usar setTimeout()
 * 
 * Con la alarma hacer una comparación entre los valores introducidos 
 * Horas, minutos y segundos del sistema con los que se han introducido 
 * 
 * Temporizador: 
 * Crear bucle en el que vaya añadiendo horas, min, seg, hasta llegar 
 * al tiempo establecido
 * 
 * 
 */