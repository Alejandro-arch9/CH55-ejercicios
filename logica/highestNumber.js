 /*Highest Number
*/
let counter =0;
const num=[];
for (let i=1; i<=10; i++){
num.push(Number(prompt(`Ingresa el numero: ${i}` )));
}
let highest = num[0];
console.log(`Numeros ingresados: `);
while(counter<num.length){
  console.log(`numero ${counter +1} : ${num[counter]}`);
  if (num[counter]>highest){
    highest=num[counter];
  }
  counter ++;
}
console.log(`El numero mas alto es: ${highest}`);