//Operadores lógicos
var souPobre = true;
console.log("------------------------------------------------")
console.log("Sou pobre?", souPobre);
console.log("negação de souPobre:", !souPobre);

var manha = true
var sono = true
console.log("------------------------------------------------")
console.log("Manha:",manha, "| Estou com sono?:", sono);

console.log("Operador AND (E):", manha && sono);
console.log("Operador OR (OU):", manha || sono);

manha = false;
console.log("------------------------------------------------")
console.log("Manha:",manha, "| Estou com sono?:", sono);

console.log("Operador AND (E):", manha && sono);
console.log("Operador OR (OU):", manha || sono);

sono = false;
console.log("------------------------------------------------")
console.log("Manha:",manha, "| Estou com sono?:", sono);

console.log("Operador AND (E):", manha && sono);
console.log("Operador OR (OU):", manha || sono);
