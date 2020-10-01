const arr = [1, 50, 3, 60, 12, 11, 22]

const pair = item => item % 2 === 0
const sum = (ac, item) => ac + item

const result = arr.filter(pair).reduce(sum, 0)

console.log(result)
