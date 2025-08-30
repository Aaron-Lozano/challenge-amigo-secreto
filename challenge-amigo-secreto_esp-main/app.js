// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
let reset = false;

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value
    console.log(nombre)
    if (nombre.length > 0) {
        amigos.push(nombre)
    } else {
        alert("Por favor, inserte un nombre.");
    }
    document.getElementById("amigo").value = "";
    agregarALista();
}

function agregarALista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo(){
    let result = document.getElementById("resultado");
    if (reset) {
        amigos = [];
        reset = false;
        document.getElementsByClassName("button-draw")[0].innerText = "Sortear amigo";
        agregarALista();
        result.hidden = true;
        return;
    }
    if (amigos.length <= 0) {
        alert("Para continuar agrega amigos a la lista.");
        return;
    }
    let indice = Math.floor(Math.random() * amigos.length);
    result.innerHTML = "El amigo secreto sorteado es: " + amigos[indice];
    result.hidden = false;
    reset = true;
    document.getElementsByClassName("button-draw")[0].innerText = "Reiniciar";
}