const arr = [1, 50, 3, 60, 12, 11, 22]

const impar = item => item % 2 !== 0
const sum = (ac, item) => ac + item

const result = arr.filter(impar).reduce(sum, 0)

console.log(result)