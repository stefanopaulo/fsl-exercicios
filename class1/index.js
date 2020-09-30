const valor1 = 10;
let valor2 = 20
valor2 = 30
console.log(valor1, valor2)

const obj = {
    chave: 'valor1',
    chave2: 'valor2'
}
console.log(obj)

const str = 'Stefano Paulo - Programador'

// functions are first class citizens
const soma = function(a, b) {
    return a + b
}

const calculadora = function(op, a, b) {
    return op(a, b)
}

console.log(calculadora(soma, 1, 2))

const array = [1, 2, 3, 4, 5]

const double = item => item * 2
const pair = item => item % 2 === 0
const sum = (ac, item) => ac + item

const somatorio = array.filter(pair).map(double).reduce(sum, 0)

console.log(somatorio)
