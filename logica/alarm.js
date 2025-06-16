 //Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.
//Result example: "Time for bed after 10 seconds".

    //?Usar setTimeout()

    let segundos = parseInt(prompt("Ingresa la cantidad de segundos para programar la alarma: "));
    let mensaje = prompt("Ingresar el mensaje personalizado de la alarma: ");
    setTimeout(() =>{
   alert(`${mensaje} después de ${segundos} segundos`);
    }, segundos * 1000);
