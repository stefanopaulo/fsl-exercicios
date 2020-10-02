const fs = require('fs')

const readdir = caminho => new Promise((resolve, reject) => {
    fs.readdir(caminho, (err, arquivos) => {
        if(err) {
            reject(err)
        } else {
            resolve(arquivos)
        }
    })
})

const stat = caminho => new Promise((resolve, reject) => {
    fs.stat(caminho, (err, stats) => {
        if(err) {
            reject(err)
        } else {
            resolve(stats)
        }
    }) 
})

const isDirectory = async (caminho) => {
    const stats = await stat(caminho)
    return stats.isDirectory() ? caminho : false
}

const execute = async () => {
    const files = await readdir('./')
    const possibleDirectories = await Promise.all(files.map(f => isDirectory(f)))
    const directories = possibleDirectories.filter(val => val)
    console.log(directories)
}

execute()
