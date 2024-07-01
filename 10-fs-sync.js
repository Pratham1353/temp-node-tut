const {readFileSync,writeFileSync} = require('fs')  //same as
// const fs = require('fs')
// fs.readdirSync();
// fs.writeFileSync();

console.log("start")
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

writeFileSync('./content/result-sync.txt',`here is the result : ${first}, ${second}`,{flag:'a'})
console.log("dome with this task")
console.log("starting the next one")
//file is not there node will create new and if exist it will override
//third argument is for append

// console.log(first)
// console.log(second)