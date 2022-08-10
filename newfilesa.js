console.log("hello")
const puchi = callback => {
    let skills = ['dsa']
    if (skills.indexOf('dsa') === -1) {
        callback('study dsa first properly', "dsa")
    }
    else {
        callback(false, 'dsa')
    }
}
console.log("new")
const callback = (err, res) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(`u have ${res} skills very good`)
    }
}
console.log("world")
puchi(callback)