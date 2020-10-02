const sleep = time => new Promise(resolve => {
    setTimeout(resolve, time)
})

const execute = async () => {
    console.log('Antes')
    await sleep(2000)
    console.log('Depois de 2segs')
}

execute()
