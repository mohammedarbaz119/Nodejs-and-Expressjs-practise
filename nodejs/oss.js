//os module
const os = require('os')
//user infor gives user info  of the pc
console.log(os.userInfo())
//os.homedir gives the home directory of the pc
console.log(os.homedir())
// os.uptime rtruns uptime in seconds
console.log(os.uptime())
//logging os info
const osinfo = {
    //os.info retuirns type of info about os eg  windows_10
    name: os.type(),
    //os.release returns relase date of os
    rellease: os.release(),
    //totolmeme retuns total memory
    totalmem: os.totalmem(),
    //os.freemem returns the ememory which is free
    freemem: os.freemem()
}
console.log(osinfo)