const arr = [1, 3, 12, 11, 22, 1, 2, 2, 3, 4, 5, 11]

const redz = (ac, item) => {
    let c = 0
    if (ac === item) c++
    return { item: c }
}

console.log(arr.reduce(redz))
