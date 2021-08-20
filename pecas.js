//Atalho para identação dos códigos: shift + alt + f

const listaDePecas = ["Ar condicionado", "Motor", "Amortecedor"]

console.log(listaDePecas)

if (listaDePecas.length < 10) {
    console.log("É possível cadastrar mais peças")
} else {
    console.log("Não é possível cadastrar mais peças")
}

var peso = 100;

/*
= -> Atribuição dfe valor, recebe
== -> Verifica se o valor é igual
=== -> Verifica se o valor, e o tipo de dado, são iguais
*/

if (peso >= 100) {
    console.log("Peso adequado")
} else {
    console.log("Peso inadequado")
}

let nomePeca = "";

if (nomePeca.length > 3) {
    console.log("Nome adequado!")
} else if (nomePeca.length == 0) {
    console.log("O nome não pode ser vazio!")
} else {
    console.log("O nome deve possuir mais de 3 caracteres!")
}

// caso tamanho da peça tenha 0 caracteres... caso tenha 1, caso tenha 2, caso tenha 3... default qualquer outro caso

switch (nomePeca.length) {
    case 0:
        console.log("O nome não pode ser vazio!")
        break;

    case 1:
    case 2:
    case 3:
        console.log("O nome deve possuir mais de 3 caracteres!")
        break;

    default:
        console.log("Nome adequado!")
        break;
}