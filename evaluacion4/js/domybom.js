/*Color de fondo*/
var colorFondo = document.getElementsByTagName("html");

for(var i = 0; i <= colorFondo.length -1; i++) {
    colorFondo[i].style.backgroundColor = "#fcf79f"
}

/*Modificar etiquetas P*/
var parrafos = document.getElementsByTagName("p");

var contador1 = 0;
do {
    parrafos[contador1].style.color = "#0ca001";
    contador1++;
}
    while(contador1 <= parrafos.length -1)


/*Modificar fuente*/    
var fuente = document.getElementById("destacado")

fuente.style.fontSize = "24px";


/*Modificar etiqueta H2*/
var tipografia = document.getElementsByTagName("h2")

var contador = 0;
do {
    tipografia[contador].style.fontFamily = "arial";
    contador++;
}
    while(contador <= tipografia.length -1)


/*Crear vinculo*/    
var enlace = document.createElement("a")

enlace.appendChild(document.createTextNode("Enlace a Lorem Ipsum"))

enlace.id = "lipsum"

enlace.href = "https://www.lipsum.com"

document.body.appendChild(enlace)

enlace.style.fontSize = "2rem"