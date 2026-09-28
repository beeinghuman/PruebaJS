/**
 * Probando a ver como crear funciones
 * Las funciones seran el equivalente a los metodos 
 * en java. Para poder usarlas necesito llamarlas 
 */


const boton = document.querySelector("#btn"); 
const mensaje = document.querySelector("#mensaje");

function alternarMensaje() {
  if (mensaje.style.display === "none") {
    mensaje.style.display = "block";
  } else {
    mensaje.style.display = "none";
  }
}

boton.addEventListener("click", alternarMensaje);



/** 

 const resultado = precio * 1.25; 
 return resultado; 
 function calcularConIVA(precio){
    
}
//Llamo a la función 
const total = calcularConIVA(100); 
console.log(total); 

function holaMundo(saludo){
    return saludo; 
}

function presentaMundo(saludo, despedida){
    return holaMundo(saludo) + " " + despedida; 
}

console.log(presentaMundo("Hola mundo", "Adios mundo"));


function ejemplo() {
  const a = 1;
  if (true) {
    const b = 2;
    console.log(a, b); // funciona: 'a' es visible desde dentro
  }
  console.log(a);      // funciona
  console.log(b);      // Error: b no existe fuera del if
}

console.log(ejemplo());

*/