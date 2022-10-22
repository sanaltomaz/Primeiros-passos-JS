/*
1- Crie uma classe para representar carros.
Os carros possuem:
    Marca;
    Cor;
    Gasto médio de combustível por km;
Crie um método que dado a quantidade de kms
e o preço do combustível nos dê o valor
gasto em reais para realizar este percurso.
*/


class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoViagem(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'preto', 1 / 8);
console.log(uno.calcularGastoViagem(70, 5));

