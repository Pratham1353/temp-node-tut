const os = require('os')

//info abut current user    
const user = os.userInfo();
console.log(user)

//method returns the system uptime in seconds
console.log(`system uptime is ${os.uptime()} seconds`)

const cos = {
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem(),
}

console.log(cos)