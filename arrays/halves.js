 /*
Number divided into halves
 
Given a number, return the number divided into its halves in an array.
*/

function numDiv(num){
  let mitad = num/2;
  return[mitad, mitad];
}

console.log(numDiv(4));
console.log(numDiv(15));
console.log(numDiv(58));
