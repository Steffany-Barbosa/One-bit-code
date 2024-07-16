const arr = [
  "Frodo",
  "Sam",
  "Marry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];
console.log(arr);

//Adicionar Elementos
//Push : Adiciona um elemento no final do array e devolve o novo tamanho do array

let tamanho = arr.push("Boromir");
console.log(arr);
console.log(tamanho);

//Unshift:Adiciona um elemento no começo do array e devolve o novo tamanho do array
tamanho = arr.unshift("Boromir");
console.log(arr);
console.log(tamanho);

//pop:  pop: Remove um elemento no final do array e devolve o elemento removido
let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

// shift: Remove um elemento no começo do array e devolve o elemento removido
ultimoElemento = arr.shift();
console.log(arr);
console.log(ultimoElemento);

//Pesquisar um elemento
// includes: Verifica se um certo elemento está presente no array
const inclui = arr.includes("Gandalf");
console.log(inclui);

// indexOf: Encontra o índice que possui o elemento indicado, ou -1 caso ele não exista no array
const indice = arr.indexOf("Gandalf");
console.log(indice);

// Cortar e concatenar
// slice: Copia uma parte do array e devolve a parte copiada sem alterar o array original
const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);
console.log(arr);
console.log(hobbits);
console.log(outros);

// concat:concat: Junta dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays)
const sociedade = hobbits.concat(outros, "Boromor");
console.log(sociedade);

//Substituição dos elementos
// splice: Permite remover elementos em qualquer posição do array e substituir por novos
const elemntosRemovidos = sociedade.splice(indice, 1, "Gandalf, o cinzento");
console.log(sociedade);
console.log(elemntosRemovidos);

//Iterar sobre os elementos
// Usando o for para percorrer cada elemento do array
for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice];
  console.log(elemento + " se encontra na posição " + indice);
}
