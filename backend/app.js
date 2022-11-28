// library dependencies
const {spawn} = require('child_process')
const fs = require('fs');


// --settings--
const minMemory = '256M'
const maxMemory = '1G'
const workingDirectory = '/home/kale/minecraft-servers/server-25565'

const consoleFile = './live-output.txt'

//server loop to restart server on stop
function startserver() {

    //clear live output prior to server start
    fs.writeFileSync(consoleFile,"");

    // start subprocess server
    const subprocess = spawn('java', ['-jar','-Xmx'+maxMemory,'-Xms'+minMemory,'server.jar','nogui'], {cwd: workingDirectory});

    // log live output to file
    subprocess.stdout.pipe(process.stdout)

    subprocess.stdout.on('data', dat=>{
        fs.appendFile(consoleFile, dat,(err)=>{
            if (err) {
                console.log(err)
            }
        })
    })

    //handle server shutdown and restart
    subprocess.on('exit',(code,signal)=>{
        startserver()
    })
}

startserver()