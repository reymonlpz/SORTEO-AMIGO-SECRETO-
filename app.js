// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const inputAmigo = document.getElementById
("amigo");

const listaAmigos =[];

const ulListaAmigos = document.getElementById
("listaAmigos");
const ulResultado = document.getElementById
("resultado");
  

function agregarAmigo(){
if (inputAmigo.value === ""){
   alert("Debes ingresar un nombre")
}else{
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    inputAmigo.value = "";
    console.log(listaAmigos)
}
}
function sortearAmigo() {
const random = Math.floor (Math.random() * listaAmigos.length);
//console.log()
ulResultado.innerHTML = `<li>El amigo secreto es: ${listaAmigos[random]}</li>`;
}

//console.log (Math.floor((Math.random()*listaAmigos.length)))

//let amigo= [];
//function agregaAmigo() {
//const random = Math.floor( Math.random() * personas.length);
//listaAmigos.push(inputAmigo.value);
//console.log(ulListaAmigos.innerHTML)
//ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;



//inputAmigo.value;

   
