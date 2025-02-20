// Criando variáveis com "var" (var nome_variavel = <valor>;)
var nome = "Tibúrcio";
console.log("Meu nome é", nome);
var idade = 23;
console.log("Meu nome é", nome, ", e eu tenho ", idade, "anos");
idade = idade + 1;
console.log("Meu nome é", nome, ", e agora eu tenho ", idade, "anos");

console.log("------------------------------------------");

//Javascript trabalha com sistema case sensitive (maiusculo são diferentes de minusculos)
console.log("criando uma variavel teste e tentando acessar como testE");
let Teste = "variavel teste";
console.log(Teste);

//Regras para nomear identificadores (variaveis)
//Podem inciar com 'A' - 'Z', 'a' - 'z', '_' ou '$'
let Minhavariavel = 10;
let outraVariavel = 2.65;
const _minhaconstante = "uma constante qualquer!";
var $minhavariavel = -5;

//variaveis logicas
var nome = "Erick"
var corinthiano = true
var palmeirense = false
console.log("nome", nome, "| É corinthiano?", corinthiano, "| É palmeirense?", palmeirense)
