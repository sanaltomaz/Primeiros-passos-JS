
/* Objeto
//objetos é um conjunto de valores.
//agrupado dentro de chaves'{}'
//Exemplo:
const pessoa = {
    nome: 'Sanal Tomaz',
    idade: 18,

    //função em um objeto é chamado de metodo
    //Por estar dentro um objeto, pode-se
    //usar os valores do proprio obj.
    //Usa '${}' para isso.
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};
*/

/* chamar função e alterar valores
//chamar a função:
//pessoa.descrever();

//alterar um valor:
//pessoa.nome = 'novoNome';
//também serve para função:
pessoa.descrever = function(){
    console.log(`Meu nome é ${this.nome}`);
}
*/

/* tipos de acesso/ incrementar e deletar
acessar valores dinamicamente:
//pessoa['nome'] = 'teste';
//valores direto
//pessoa.nome = 'teste';

//Como incrementar um valor:
//tomaz.altura = 1.72;

//Deletar um valor:
//delete tomaz.idade;*/

//*Classes**//

//Classe é a definição de um objeto
//Como aquilo deve acontecer;
//A classe sempre tem nome Maiúsculo
class Pessoa {
    //Atributos:
    nome;
    idade;
    anoDeNascimento;

    //é oq acontece quando uma pessoa é
    //instanceada
    //construtor(parametro, parametro,..){}
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
};

/*Instancia com constructor
const tomaz = new Pessoa('Tomaz', 18);
*/

/* Instancia sem constructor(){}
//Instancia é uma ocorrencia
//caso não haja constructor{
const tomaz = new Pessoa();
tomaz.nome = 'Sanal Tomaz';
tomaz.idade = 18;
}
*/

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const sanal = new Pessoa('Sanal', 18);
const ale = new Pessoa('Alexandre', 17);

compararPessoas(sanal, ale);