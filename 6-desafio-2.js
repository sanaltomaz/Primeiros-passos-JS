/*
    2- Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos:
    nome;
    peso;
    altura.
    As pessoas devem ter a capacidade de dizer
    o valor de seu IMC 
    (IMC = peso / (algutra * altura);
    Instancie uma pessoa chamada José que tenha
    70kg de peso e 1.75 de altura
    peça ao José para dizer seu IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc(){
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return('Abaixo do peso');
        } else if (imc >= 18.5 && imc < 25) {
            return('Peso normal');
        } else if (imc >= 25 && imc < 30) {
            return('Acima do peso');
        } else if (imc >= 30 && imc < 40) {
            return('Obeso');
        } else {
            return('Obesidade grave');
        }
    } 
}

const jose = new Pessoa('jose', 70, 1.75);
console.log(jose.classificarImc());
const tomaz = new Pessoa('tomaz', 91.5, 1.72);
console.log(tomaz.classificarImc());



