/*
//  "=" operador de atribuição
// Declarar variavel;
// "let" = Variavel mudavel
let variavel = 10; 
// "const" = Variavel não mudavel
 const pi = 3.14;

console.log(variavel / pi + 4);

*/
// Desafio:

const gasolina = 5.33;
const kmPorLitros = 5.6;
const distanciaEmKm = 57;

const litrosGastos = distanciaEmKm/kmPorLitros;
const gasto = litrosGastos * gasolina;

console.log(gasto.toFixed(2));