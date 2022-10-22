
/* Desafio
Uma sala contem 5 alunos e para cada aluno
foi sorteado um número de 1 a 100.
Faça um programa que receba os 5 números
sortados para os alunos e mostre o maior 
número sorteado.

Dados de entrada:
5 50 10 98 23
Saída: 
98 

*/

const { gets, print } = require('./funcaos-auxiliares');

quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets;
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
    
}

print(maiorValorEncontrado);


/*Jeito não simplificado
const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);

}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}

print(maiorValor); */
