const {readFile, writeFile} = require('fs')

//Start
console.log('Start...')

// Read file
readFile('./content/first.txt', 'utf-8', (err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result


    readFile('./content/second.txt', 'utf-8', (err, result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result

        
        writeFile('./content/as-result.txt', `Result: ${first}, ${second}`, (err, result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('complete')

        })
    })
})

console.log('next-task')