let emprestimo = 300;
let juros = 0.025;
let tempo = 6;

let valorJuros = emprestimo * (1 + juros) ** tempo;
let valorTotal = valorJuros - emprestimo;

console.log(`O valor dos juros é R$ ${valorJuros} e o valor final é R$ ${valorTotal}`);	


