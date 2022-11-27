const {spawn, exec} = require('child_process')
const fs = require('fs');
const subprocess = spawn('java', ['-jar','-Xmx1G','-Xms256M','server.jar','nogui']);


subprocess.stdout.pipe(process.stdout)
subprocess.stdout.on('data', dat=>{
    fs.appendFile('./livelog.txt', dat,(err)=>{
        if (err) {
            console.log(err)
        }
    })
})

subprocess.on('exit',(code,signal)=>{
    console.log("exited probably");
})