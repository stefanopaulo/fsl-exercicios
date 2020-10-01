const calculadoraFn = (x, op, y) => op(x, y)

const soma = (x, y) => x + y
const sub = (x, y) => x - y
const mut = (x, y) => x * y
const div = (x, y) => {
    x = x || 1
    y = y || 1

    return x / y
}

console.log(calculadoraFn(3, div, 0))
console.log(calculadoraFn(1, soma, 2))
console.log(calculadoraFn(6, mut, 4))
console.log(calculadoraFn(6, sub, 2))