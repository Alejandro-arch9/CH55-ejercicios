 const username = prompt("Hola, ingresa tu nombre de usuario");     /*entonces const no puede ser reasignado a través  del código como sí se podría hacer con let, Let solo se usa cuando se quieran reasignar en un futuro variables*/
 const age = prompt("Ahora ingresa tu edad: "); 
const favoriteMovies = [];  //Primero se crea un array "[]"

//Vamos a pedir 5 peliculas primero
for(let i = 1; i <= 5; i++){   //Ponemos el limite en <=5 porque se le suma 1
//Los string dentro de "" se conocen como string literal,
//Concatenar variables y texto de una forma más sencilla y legible
favoriteMovies.push(prompt("Ingresa la pelicula número ${i}: "));
//equivalente a "Ingresa la pelicula número " + i + ": "
}

console.log("Hola soy ${username} tengo ${age} años y mis peliculas favoritas son:");

while(counter < favoriteMovies.length){
  console.  
    log("Mi pelicula favorita numero ${counter +1} es: ${favoriteMovies[counter]}");
    counter++;
  }