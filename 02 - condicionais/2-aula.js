
//Operador booleano
const numero = 10;

// "%" devolve o resto
// "===" se for igual
// apenas "=" serve para atribuição
// "==" serve para igual|| ignora o tipo
/*
const numeroPar = (numero % 2) === 0;
console.log(numeroPar); 

//Operador condicional;
// "if" operador "Se"
if (numeroPar) {
    console.log('Par');
//"else" operador "se não"
} else {
    console.log('Impar')
}
*/ /*

// "!" negação || Não for
if (!numeroPar) {
}
*/
const numeroDivisivelPor5 = (numero % 2) === 0;

if (numero === 0){
    console.log('Número inválido')
}else if (numeroDivisivelPor5) {
    console.log('Sim');
} else {
    console.log('Não')
}
