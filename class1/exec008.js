function calculadora(x, op, y) {
    if (op === '+') return x + y
    if (op === '-') return x - y
    if (op === '*') return x * y
    if (op === '/') {
        if (x === 0 || y === 0) {
            return 1
        } else {
            return x / y
        }
    }
}

console.log(calculadora(0, '-' ,3))