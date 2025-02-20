var nome = "Gabi";
var nascimento = 2008;

console.log(nome, "nasceu em", nascimento);

var idade = 2025 - nascimento;
console.log("idade:", idade);

console.log(nome, "tem", idade, "anos");
console.log("---------------------------------");

var base = 12;
var altura = 6;
var area = base * altura;
console.log(
  "A área do retângulo de base",
  base,
  "e altura",
  altura,
  "é:",
  area
);

var profundidade = 5;
var volume = area * profundidade;
console.log("o volume do retangulo é:", volume);

var a = 2;
var b = 3;
var c = -1;
var delta = b ** 2 - 4 * a * c;
console.log("O valor de Delta é:", delta);
console.log("----------------------------------------------");
var compra = 450;
var desconto = 0.03; //~var desconto = 3 / 100
desconto = compra * desconto;
var total = compra - desconto;
console.log(
  "Compra: R$",
  compra,
  " - Desconto R$",
  desconto,
  " = Total",
  total
);
console.log("-----------------------------------------------");
var tempo = 3.5;
var velocidade = 95;
var distancia = tempo * velocidade;
console.log("A distância percorrida é de:", distancia, "Km");

