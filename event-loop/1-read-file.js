const {readFile, writeFile} = require("fs")

console.log("Starting the first task...");

//Check file path
readFile('../content/first.txt', 'utf-8', (err, result)=> {
    if(err){
        console.log(err)
        return
    }
    console.log(result);
    console.log('Complete task.')
})
console.log('Next task')
