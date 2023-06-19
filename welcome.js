const fs = require('fs')
fs.writeFile("welcome.txt","hello node",err=>{
    err? console.log(err):console.log('done')
})