/*
Faça um programa para calcular o valor
de uma viagem.

Vocé terá 5 variáveis:
    Preço do etanol;
    Preço da gasolina;
    O tipo de combustível que está no seu carro;
    Gasto médio de combustível do carro por KM;
    Distância em KM da viagem;

Imprima no console o valor que será gasto para
realizar esta viagem.
*/

const precoEtanol = 4.87;
const precoGasolina = 5.33;
const kmPorLitros = 7;
const distanciaEmKm = 100;

const combustivelUsado = 'Etanol';
const litrosGastos = distanciaEmKm / kmPorLitros;


if (combustivelUsado === 'Etanol') {
    const valorGasto = litrosGastos * precoEtanol;
    console.log(valorGasto.toFixed(2))

} else {
    const valorGasto = litrosGastos * precoGasolina;
    console.log(valorGasto.toFixed(2))

}

