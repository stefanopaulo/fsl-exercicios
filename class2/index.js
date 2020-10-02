const fs = require('fs')

// callback hell
// fs.readFile('class2/temporizadores.js', (err, data) => {
//     console.log(err)
//     fs.writeFile('class2/temporizadores-copy.js', data, err => {
//         console.log('Arquivo copiado')
//     })
// })

// promises + async/await

const readFile = path => new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
        if(err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})

const writeFile = (path, data) => new Promise((resolve, reject) => {
    fs.writeFile(path, data, err => {
        if(err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
}) 

// readFile('class2/temporizadores.js')
//     .then(data => writeFile('class2/copia-promise.js', data))
//     .then(() => console.log('arquivo copiado'))
//     .catch(err => console.log(err))

// async/await
const copyFile = async () => {
    console.log('Olá async/await')
    try {
        const data = await readFile('class2/temporizadores.js')
        await writeFile('class2/copy-async-await.js', data)
        // console.log(String(data))
        console.log('arquivo lido e escrito')
    } catch(err) {
        console.log('erro', err)
    }
}

copyFile().then(() => console.log('fim do async/await'))

module.exports = {
    readFile, writeFile
}
