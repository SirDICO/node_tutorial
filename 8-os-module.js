const os = require('os')


//info aobut current user
const user = os.userInfo()
console.log(user)


//method returns the system uptime in seconds

console.log(`The System Uptiem is ${os.uptime}  seconds`)


//current Os

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOs)