//Lista de exercicicos 06
// Criar uma função que receba o nome e a idade de uma pessoa e retorne uma mensagem informando se ela pode votar no Brasil.

//Regras para votação no brasil
// Menores de 16 anos: Não podem votar
// Entre 16 e 17 anos ou acima de 70 anos: O voto é facultativo
// entre 18 e 70 anos: O voto é obrigatório

// var bancoDados = [16,17,79,8];
// var idade = 16;
// var votacao = idade >= 16 ? "Pode votar!" : "Não pode votar";
// console.log("Idade:", idade, "-", votacao);

// var idade = 18;
// var votacao = idade >= 16 ? "Não obrigatório!" : "Obrigatório";
// console.log("Idade:", idade, "-", votacao);

// var idade = 15 ;

// if (idade == 16 ) {
//   console.log("voto facultativo");
// } else if (18 == "Voto obrigatório") {
//   console.log("");
// } else {
//   console.log("Pare!");
// }
const podeVotar = (idade) => {
  if (idade < 16) {
    return "Não pode votar";
  } else if (idade >= 18 && idade < 70) {
    return "Pode votar";
  } else {
    return "Voto facultativo";
  }
};
var nome = ["Ygona", "Lucas", "Duda", "Fernanda", "Cristianne"];
console.log("Olá", nome[0], "você tem 16 anos e", podeVotar(16));
console.log("Olá", nome[1], "você tem 22 anos e", podeVotar(22));
console.log("Olá", nome[2], "você tem 70 anos e", podeVotar(70));
console.log("Olá", nome[3], "você tem 12 anos e", podeVotar(12));
console.log("Olá", nome[4], "você tem 67 anos e", podeVotar(67));
