// Condições simples com IF
var anoNascimento = 2002;
if (anoNascimento > 2003) {
  console.log("A pessoa nasceu depois de 2003.");
}
if (anoNascimento < 2003) {
  console.log("A pessoa nasceu antes de 2003.");
}
if (anoNascimento == 2003) {
  console.log("A pessoa nasceu em 2003.");
}

//Condições simples com IElse
var anoNascimento = 2005;
if (anoNascimento > 2000) {
  console.log("A pessoa nasceu depois de 2000.");
} else {
  console.log("A pessoa nasceu em 2000 ou antes");
}

//Condições compostas com If
const login = "admin";
const senha = "12345";

var loginUser = "admin";
var SenhaUser = "12345";

if (loginUser == login && SenhaUser == senha) {
  console.log("Acesso permitido");
} else {
  console.log("Acesso negado!");
}

// Desvio condicional aninhado - IF-ELSEIF-ELSE
var semaforo = "vermelho";

if (semaforo == "verde") {
  console.log("Siga");
} else if (semaforo == "amarelo") {
  console.log("Atenção");
} else {
  console.log("Pare!");
}
// Desvio condicional IF com bloco de comandos
var idade = 18;

if (idade <= 18) {
  console.log("Entrei no if...");
  idade++;
  console.log("Incrimentei a idade...");
  console.log("A nova idade é:", idade);
  console.log("Agora estou saindo do bloco if");
}
console.log("Terminei");

//Criando variaveis locais com "let" (Só existe dentro do bloco onde foram criadas)
var mes = "agosto";
var dia = 15;

if (dia == 15 && mes == "agosto") {
  let mensagem = "Hoje é dia 15 de agosto";
  console.log(mensagem);
}
console.log("Tentando acessar a variável local fora do bloco, vai dar erro!");
//console.log(mensagem);

// Criando uma função com desvio condicional IF
const desconto = (valorCompra) => {
  let desconto = 0;
  if (valorCompra >= 1000) {
    desconto = (valorCompra * 12) / 100;
  }
  return desconto;
};
var totalCompra = 950;
console.log(
  "Valor total da compra: R$",
  totalCompra,
  "::: Desconto: R$",
  desconto(totalCompra)
);
var totalCompra = 1800;
console.log(
  "Valor total da compra: R$",
  totalCompra,
  "::: Desconto: R$",
  desconto(totalCompra)
);

// Desvio condicional If inline (ternário)
// condição ? expressão se verdadeira, : expressão se falsa
var preco = 500;
var resultado = preco <= 100 ? "Tá barato" : "Vish, tá muito caro";

// Operador acima é o mesmo que escrever:
// if(preco <=100){
//     resultado = "tá muito barato!"
// }else{
//     resultado = "vish, ta muito caro!"
// }
console.log("Preço: R$", preco, "-", resultado);
// ? significa então (verdadeiro e)  : (falso)

//If ternário com somente uma expressão
// condição && expressão
var logado = true;
logado && console.log("Usuario está logado!");

//Desvio condicional - Switch Case
console.log(
  "---------------------------Switch Case------------------------------------"
);
switch (1) {
  case 1:
    console.log("O usuário digitou o número 1");
    break;

  default:
    console.log("O usuário informou um número diferente de 1!");
    break;
}
console.log("---------------------------------------------------------------");
//Menu de seleção
var menuSelecionado = "Home";

switch (menuSelecionado) {
  case "Home":
    console.log("Você clicou no link 'Home'");
    break;
  case "Quem somos":
    console.log("Você clicou no link 'Quem somos'");
    break;

  case "Contato":
    console.log("Você clicou no link 'Contato'");

    break;
  default:
    console.log("Opção inválida de menu");
    break;
}

//Varias opções com mesmo case - switch case
var mes = 12;

switch (mes) {
  case 1:
  case 2:
  case 3:
    console.log("Primeiro trimestre!");
    break;
  case 4:
  case 5:
  case 6:
    console.log("Segundo trimestre!");
    break;
  case 7:
  case 8:
  case 9:
    console.log("Terceiro trimestre!");
    break;
  case 10:
  case 11:
  case 12:
    console.log("Quarto trimestre!");
    break;
  default:
    console.log("Mês inválido");
    break;
}
