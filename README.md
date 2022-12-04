# mc-server-autorestart
A node.js program that automatically restarts a personal Minecraft server when the server instance closes.


## quick startup
1. Install npm, nodejs, and pm2 with 
``` sudo apt install npm
    sudo apt install nodejs
    sudo apt install pm2
 ```
    
3. Move app.js into your minecraft server directory
4. Change in-script settings as desired

```javascript
// --settings-- 
const minMemory = '256M' //set minimum startup memory
const maxMemory = '1024M' //set maxium use memory
const workingDirectory = '/directory/to/server/folder' //Set the directory where your server.jar is

```
5. Run
```
pm2 start app.js
```

##Note
If you desire for the server to start everytime your linux machine reboots, use
```
pm2 save
```
