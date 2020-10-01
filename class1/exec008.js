const calculadora = (num1, op, num2) => {
    const ops = {
        '+': (num1, num2) => num1 + num2,
        '-': (num1, num2) => num1 + num2,
        '/': (num1, num2) => num1 + num2,
        '*': (num1, num2) => num1 + num2
    }

    return ops[op](num1, num2)

    /*if (op === '+') return x + y
    if (op === '-') return x - y
    if (op === '*') return x * y
    if (op === '/') {
        if (x === 0 || y === 0) {
            return 1
        } else {
            return x / y
        }
    }*/
}

console.log(calculadora(0, '-' ,3))
console.log(calculadora(10, '+' ,3))
console.log(calculadora(3, '*', 6))