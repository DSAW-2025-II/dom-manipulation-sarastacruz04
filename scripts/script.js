const Form = document.getElementById("form");
const Listask = document.getElementById("list");

Form.addEventListener("submit", function(e) {
    e.preventDefault(); /*No se recarga la pagina*/
    const textArea = document.getElementById("text");
    if (textArea.value === '') { /*CONFIRMAR CON EL PROFE EL ALERT*/
        alert("You must write something"); /*Por el alert sale una ventana emergente*/
    } else {
        let li = document.createElement("li"); /*Crear un elemento li*/
        li.innerHTML = textArea.value; /*El valor del textarea se guarda en li*/
        Listask.appendChild(li); /*El li se agrega a la lista*/
        let span = document.createElement("span"); /*Crear un elemento span, contenedor pequeño*/
        span.innerHTML = "\u00d7"; /*El valor del span es una x*/
        li.appendChild(span); /*El span se agrega al li*/   
    }
    textArea.value =''; /*Limpiar el textarea*/
    saveList(); /*Guardar la lista en el local storage*/
});

Listask.addEventListener("click", function(e) { /*usa un solo click para toda la lista, se escucha el click en el padre y se detecta que hijo fue*/
    if(e.target.tagName === "LI") { /*Si el elemento que se clickeo es un li, LI es el tagname de li*/
        e.target.classList.toggle("checked");  /*toggle agrega o quita la clase checked, alterna*/
        saveList();
    }else if(e.target.tagName === "SPAN"){ /*Si el elemento que se clickeo es un span, SPAN es el tagname de span*/
        e.target.parentElement.remove(); /*Borra el li completo*/
        saveList();
    }   
}); 

function saveList() {
    localStorage.setItem("data", Listask.innerHTML); /*Si se refresca la pagina, no se pierden los tasks*/
}

function showList() {
    Listask.innerHTML = localStorage.getItem("data"); /*Recupera la informacion del local storage*/
}  

showList(); /*Muestra la lista al cargar la pagina*/


