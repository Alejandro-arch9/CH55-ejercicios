 /* 
Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters. 
*/


      let lista = []
      let frase = prompt("Ingresar una palabra o frase: ")
      .toLowerCase()
      .replace(/[^a-zA-Z]/g, "");
      console.log(frase.length);

      for(let i = 0; i < frase.length; i++){
     lista.push(frase[i]);
      }
      console.log(lista)

      let listaReversa = lista.reverse();
      console.log(listaReversa)

      let fraseReversa = listaReversa.join("")
      console.log(fraseReversa)
      console.log(frase)
      if (frase === fraseReversa){
      console.log("Es un palindromo")
      }else{
      console.log("No es un palindromo")
      }