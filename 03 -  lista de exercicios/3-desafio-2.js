var peso = 71.5;
var altura = 1.73;

var imc = peso / (altura * altura);

//Função matematica para ^2 
//Math.pow(altura,2)
//'Math' é uma biblioteca

console.log(imc.toFixed(1));

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso');
} else if (imc >= 30 && imc < 40) {
    console.log('Obeso');
} else {
    console.log('Obesidade grave');
}

