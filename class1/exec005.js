const arr = [1, 3, 12, 11, 22, 1, 2, 2, 3, 4, 5, 11]

const howManyTimes = (agg, val) => {
    if (!agg[val]) {
        agg[val] = {
            value: val,
            occur: 0
        }
    }
    agg[val].occur += 1
    return agg
}

const contagem = arr.reduce(howManyTimes, {})
const keys = Object.keys(contagem)
const unique = keys.filter(key => contagem[key].occur === 1)
const uniqueValues = unique.map(val => contagem[val].value)

console.log(uniqueValues)
