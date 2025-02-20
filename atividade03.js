//Lista de exércicios 03
//********************************************************************
//1-Crie um array de frutas com os seguintes elementos: Banana, Maçã, Pera, Uva, Morango
//2-Adcicione tangerina no final
//3-Adicione goiaba no inicio
//4-Exiba o conteudo do indice 5]
//5-Exclua o elemento uva.
//6-Crie uma cópia do array apenas com os elementos com indices 2, 3 e 4
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];
console.log(frutas);
console.table(frutas);
console.log("O vetor frutas tem:", frutas.length, "elementos.");

frutas.push("Tangerina");
console.log(frutas);
console.table(frutas);
console.log("O vetor frutas tem:", frutas.length, "elementos.");

frutas.unshift("Goiaba");
console.table(frutas);
console.log("O vetor frutas tem:", frutas.length, "elementos.");

var elementoProcurado = "Morango";
var posicao = frutas.indexOf(elementoProcurado);
console.log(elementoProcurado, "está no indice:", posicao);

var elementoExcluir = "Uva";
var posicao = frutas.indexOf(elementoExcluir);
frutas.splice(posicao, 1);
console.table(frutas);

var copia = frutas.slice(2, 5);
console.table(copia);

