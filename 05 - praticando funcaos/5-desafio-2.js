
function descontar(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}
function jurificar(valor, juros) {
    return (valor + (valor * (juros / 100)))
}

const precoEtiqueta = 100;
const formaDePagamento = 3;

if (formaDePagamento === 1) {
    console.log(descontar(precoEtiqueta, 10));
} else if (formaDePagamento === 2) {
    console.log(descontar(precoEtiqueta, 15));
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
} else {
    console.log(jurificar(precoEtiqueta, 10));
}