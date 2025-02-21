//*********************************************************************************************************************** */
//                                    Lista de exercícicos 07
//************************************************************************************************************************* */
//Dada a matriz abaixo, faça um programa em JavaScript que exiba ao usuário os elementos da sua diagonal principal.

// |   3 5 8   |
// |   1 9 2   |
// |   7 1 4   |
var matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];
console.table(matriz);
console.log(matriz[0][0], "|", matriz[1][1], "|", matriz[2][2]);
console.log(
  "----------------------------Agora o código certo----------------------------------"
);
var matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];
for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    linha == coluna &&
      console.log(`Matriz [${linha}][${coluna}] = ${matriz[linha][coluna]}`);
  }
}
//Dada a matriz abaixo, faça um programa em JavaScript que multiplique seus elementos por um valor x e exiba ao usuário a matriz antes e após
//multiplicar
// |   3 5 8   |
// |   1 9 2   |
// |   7 1 4   |
console.log(
  "---------------------------------------------------------------------------------"
);
var x = 4;
console.table(matriz);
var matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];
for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    matriz[linha][coluna] *= x;
  }
}
console.table(matriz);

//Faça um loop FOR onde apresente os números ímpares de 0 a 100;
//Não pode ser resolvido com conta ou resto de divisão
console.log("---------------------------------------------------------------")
console.log("Impáres de 0 a 100")
for(let i = 1; i <= 100;i+=2){
    console.log(i)
}
console.log("----------------------------------------------------------------")
console.log("Pares de 0 a 100")
for(let i = 0; i <= 100;i+=2){
    console.log(i)
}