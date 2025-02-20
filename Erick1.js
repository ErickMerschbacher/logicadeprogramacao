/***************************************************** 
                Exercícios para fixação 
*****************************************************/
/* 
1. Crie uma variável e atribua o nome de uma pessoa; 
2. Crie uma variável e atribua o nome de um banco; 
3. Crie uma variável e atribua o número da agência; 
4. Crie uma variável e atribua o número da conta; 
5. Crie uma variável e atribua o saldo da conta; 
6. Imprima os dados e o saldo da conta; 
7. Efetue e imprima 5 movimentações na conta; 
8. Imprima novamente os dados e o saldo da conta;
*/

//Errei véi
let nome = "Erick";
let banco = "Banco do Brasil";
let agencia = "01010101019";
let conta = "15874-1";
let saldo = 5000;
console.log("*********************", banco, "*****************************");
console.log("cliente", nome);
console.log("agencia", agencia);
console.log("conta", conta);
console.log("seu saldo é de R$", saldo);

console.log("     + Deposito:75,00");
saldo = saldo + 75;
console.log("     + Deposito:100,00");
saldo = saldo + 100;
console.log("     + Saque:75,00");
saldo = saldo + 75
console.log("     + Saque:100,00");
saldo = saldo + 100;
console.log("     + Saque:300,00");
saldo +=300;//mesma coisa que saldo = saldo + 50

console.log("*********************", banco, "*****************************");
console.log("cliente", nome);
console.log("agencia", agencia);
console.log("conta", conta);
console.log("seu saldo é de R$", saldo);
console.log("---------------------------------------------------------------")

