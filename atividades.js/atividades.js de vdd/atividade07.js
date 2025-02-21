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
console.log("----------------------------Agora o código certo----------------------------------")
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
var x = 3
var matriz = [
    [3, 5, 8],
    [1, 9, 2],
    [7, 1, 4],
]
for (let x = 0; x < numeros.length; x++) {
    numeros[x] *= 3;
  }
  console.log("vetor multiplicado por 3");
  console.table(numeros);
  