/*User profile*/

const userName = prompt ("Escribe cual es tu Nombre");
const age = prompt ("¿Cual es tu edad?");
const  peliculasFavoritas = [];
for ( i = 1; i <= 4 ; i ++){
    peliculasFavoritas.push(prompt(`Ingresa la pelicula numero ${i}`));
}
let profile = ( userName, age , peliculasFavoritas);
console.log (`Hola soy ${userName} tengo ${age} años y mis peliculas favoritas son:${peliculasFavoritas}`);