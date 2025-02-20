// Lista de exercícios 05

//1- Crie uma função que receba como parâmetro o ano de nascimento de uma pessoa e retorne sua idade
//2- Crie uma função que receba a quantidade de combustivel de um carro e retorne quantos kms ele pode viajar com esse combústivel.
function subtrairIdade(nome, ano,){
    let idade = 2025 - ano;
    console.log("A/O", nome, "nasceu no ano", ano, "e tem", idade)
}
subtrairIdade("Cleitão", "2000")

//Atividade 2
const combustivel = (litros) => {
    return litros * 12;
};
var car1 = 20
var car2 = 8
var car3 = 2
console.log("Carro 1: ",car1,"->", combustivel(car1),"kms")
console.log("Carro 1: ",car2,"->", combustivel(car2),"kms")
console.log("Carro 1:  ",car3,"->", combustivel(car3),"kms")