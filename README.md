# mc-server-autorestart
A node.js program that automatically restarts a personal Minecraft server when the server instance closes.


## quick startup
1. Place app.js into your minecraft server directory
2. Change in-script settings as desired

`code
// --settings-- 
const minMemory = '256M' 
const maxMemory = '1024M'
const workingDirectory = '/directory/to/server/folder' 
`
