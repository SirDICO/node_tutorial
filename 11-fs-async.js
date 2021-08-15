

//would be the same to do below
// const fs = require('fs');
// fs.readFileSync()

//let's destructure them
const {readFile, writeFile} = require('fs')

console.log('Starting Task 1')
readFile('./content/first.txt','utf8', (err, result)=>{

    if(err){
        console.log(err)
        return
    }

   const first = result;

   readFile('./content/second.txt','utf8',(err, result) =>{

    if(err){
        console.log(err)
        return
    }

   const second = result;

   writeFile('./content/result-async.txt', 
   `CheckOut asynchronous result: ${first}, ${second}`
   , (err,result)=>{
       if(err){
           return
       }
       console.log(result)
       console.log('Done with Task 1')
   })

})
})
console.log('Starting Task 2')






