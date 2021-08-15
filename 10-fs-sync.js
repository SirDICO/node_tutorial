

//would be the same to do below
// const fs = require('fs');
// fs.readFileSync()

//let's destructure them
const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//console.log(first,second)

writeFileSync('./content/result-sync-txt', 
`Here is the sync result: ${first}, ${second}`, {flag: 'a'}
)









