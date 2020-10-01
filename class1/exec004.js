const arr = [1, 3, 12, 11, 22, 1, 2, 2, 3, 4, 5, 11]

const howManyTimes = (agg, val) => {
    if (!agg[val]) {
        agg[val] = 0
    }
    agg[val] = agg[val] + 1
    return agg
}

const times = arr.reduce(howManyTimes, {})
console.log(times)
