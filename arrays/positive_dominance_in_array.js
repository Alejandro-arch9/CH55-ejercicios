/*positive dominance in Array

Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.*/



let list =[5, 8 , 6, -8, -4];
sumaPositivos = 0;
sumaNegativos =0;

for (let i = 0; i < list.length; i++){
  if (list[i] > 0){
    sumaPositivos++
  } else{
    sumaNegativos++
  }
}
console.log(sumaPositivos)
console.log(sumaNegativos)
if (sumaPositivos > sumaNegativos){
  console.log(true)
} else {
  console.log(false)
}
console.log(list)