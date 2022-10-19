const nota1 = 6;
const nota2 = 7;
const nota3 = 9;
const nota4 = 6;

var media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media > 7) {
    console.log('Aprovado')
} else if (media < 5) {
    console.log('Reprovado')
} else {
    console.log('Recuperação')
}
// '&&' = 'e também'
// Poderia ser usado no caso da 'Recuperação'
// Sendo `else if (media >= 5 && media <=7);
// `Se não, se (media maior/igual 5 e também...);

console.log(media);