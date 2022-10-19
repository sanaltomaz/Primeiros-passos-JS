var produto = 10;

/*
Débito = 1
Dinheiro/Pix = 2
Duas vezes = 3
Mais que duas vezes = 4
*/

const formaDePagamento = 3;
const etiqueta = [1, 2, 3, 4];

if (formaDePagamento === 1) {
    console.log(produto - (produto * 0.1));
} else if (formaDePagamento === 2) {
    console.log(produto - (produto * 0.15));
} else if (formaDePagamento === 3) {
    console.log(produto);
} else {
    console.log(produto + (produto * 0.1));
}
