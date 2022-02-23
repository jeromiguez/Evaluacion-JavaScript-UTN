var peliculas = [" Volver al futuro", " Karate kid", " Star wars", " El señor de los anillos", " La vida es bella"]

peliculas.sort()

/*Metodo for*/
document.write("Ejemplo con for", "<br>", "<br>")
for(let contador = 0; contador <= peliculas.length - 1; contador++) {
    document.write(peliculas[contador])
}
document.write("<br>", "<br>", "Ejemplo con do while", "<br>", "<br>")

/*Metodo do while*/
var contador2 = 0;
do {
    document.write(peliculas[contador2])
    contador2++;
}
    while(contador2 <= peliculas.length -1) 
