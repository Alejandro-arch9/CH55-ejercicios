 /*
Factorial
 */

function factorial(n){
    if ((n === 0) || (n == 1)){
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
    
}

const numeroUsuario = prompt("Ingresa el número del cual quieres saber su factorial");
const factorialNumero = factorial(numeroUsuario);
console.log(`El factorial del número: ${numeroUsuario} es: ${factorialNumero}`);