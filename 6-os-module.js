const os = require('os');

// Get User Information
const user = os.userInfo()

console.log(user)

// Get OS Information
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);
