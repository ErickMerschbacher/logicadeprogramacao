/*********************************************************************** 
    Lista de Exercícios – Lógica de Programação em JavaScript (Console)
 ***********************************************************************


1. Par ou Ímpar?
Escreva um programa que peça um número ao usuário e exiba no console se ele é par ou ímpar.


📌 Dica: Use o operador % para verificar o resto da divisão.
------------------------------------------------------------------------


2. Tabuada
Peça ao usuário um número e exiba no console a tabuada desse número de 1 a 10.



📌 Exemplo (se o número for 3):
3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30
------------------------------------------------------------------------


3. Fatorial de um Número
Solicite um número ao usuário e exiba no console o seu fatorial.


📌 Fatorial de 5: 5! = 5 × 4 × 3 × 2 × 1 = 120
------------------------------------------------------------------------


. Soma dos Números de um Array
Crie um programa que tenha um array com números aleatórios e exiba no console a soma total desses números.
4
\
📌 Exemplo:
let numeros = [10, 20, 30, 40];  
// Saída: Soma = 100
--------------------------------------------------------------------
*/
//5-
var numeros = [2, 6, 1, 5, 4, 8];
console.log(numeros);

numeros.sort();
console.table(numeros);

var copia = numeros.slice();
console.table(copia);

copia[0] = numeros[0] + 2;
copia[1] = numeros[1] + 2;
copia[2] = numeros[2] + 2;
copia[3] = numeros[3] + 2;
copia[4] = numeros[4] + 2;
copia[5] = numeros[5] + 2;
console.table(copia);
//-----------------------------------------------------------------------------------
var tabuada = 5;
console.log(tabuada, "x 1 =", tabuada * 1);
console.log(tabuada, "x 2 =", tabuada * 2);
console.log(tabuada, "x 3 =", tabuada * 3);
console.log(tabuada, "x 4 =", tabuada * 4);
console.log(tabuada, "x 5 =", tabuada * 5);
console.log(tabuada, "x 6 =", tabuada * 6);
console.log(tabuada, "x 7 =", tabuada * 7);
console.log(tabuada, "x 8 =", tabuada * 8);
console.log(tabuada, "x 9 =", tabuada * 9);
console.log(tabuada, "x 1 =", tabuada * 10);

// 3. Fatorial de um número
console.log("Fatorial de 5! =", 5 * 4 * 3 * 2 * 1);
// 4

//let numeros = [1, 4, 5, 2, 3];

console.log("------------------------------------------------");
//01
const imparpar = (num) => {
  return num % 2 == 0 ? "O número é par!" : "O número é impar!";
};
console.log(imparpar(10));
console.log(imparpar(3));
console.log(imparpar(2));
//05
const ordemNumero = [8, 3, 5, 1, 9];
console.log(ordemNumero);
console.log(ordemNumero.sort());
//---------------------------------------------------------------------------------------------
//1. Crie uma variável e atribua o nome de uma pessoa; 
//2. Crie uma variável e atribua o nome de um banco; 
//3. Crie uma variável e atribua o número da agência; 
//4. Crie uma variável e atribua o número da conta; 
//5. Crie uma variável e atribua o saldo da conta; 
//6. Exiba os dados e o saldo da conta; 
//7. Efetue e imprima 5 movimentações na conta; 
//8. Exiba novamente os dados e o saldo da conta;
var Nome = "Erick";
var tentativa = "";

while(tentativa !== Nome){
  tentativa = prompt("Digite o nome:");
}
console.log("Acesso concedido!")
var banco = "Bradesco";
var tentativa = "";

while(tentativa !== banco){
  tentativa = prompt("Digite o nome do banco:");
}
console.log("Acesso concedido!")
var agencia = "10234";
var tentativa = "";

while(tentativa !== agencia){
  tentativa = prompt("Digite o número de sua agencia:");
}
console.log("Acesso concedido!")
var numeroConta = "12345-6789-0";
var tentativa = "";

while(tentativa !== numeroConta){
  tentativa = prompt("Digite o número de sua conta:");
}
console.log("Acesso concedido!")
var Saldo = "9000";
var tentativa = "";

while(tentativa !== Saldo){
  tentativa = prompt("Informe seu saldo:");
}
console.log("Acesso concedido!")
console.log(`Olá ${Nome}! Seu banco: ${banco} Número da conta: ${numeroConta} Seu saldo é: ${Saldo}`);
var x =0;
do {
  console.log(`Kelly transferiu 5, seu saldo agora é:${Saldo+5}`);
  console.log(`Mayk transferiu 30, seu saldo agora é:${Saldo+30}`);
  console.log(`Você transferiu 10 para Arthur, seu saldo agora é:${Saldo-10}`);
  console.log(`Gabi transferiu 50, seu saldo agora é:${Saldo+50}`);
  console.log(`Pedrinho transferiu 10, seu saldo agora é:${Saldo+10}`);
  x++
} while(x>1)