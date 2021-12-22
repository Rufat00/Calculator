const path = require('path');
const url = require('url');
const {app, BrowserWindow} = require('electron');

let win;

function createWindow(){
    win = new BrowserWindow({resizable: false,maxWidth:350, maxHeight:600,minWidth:350, minHeight:600,icon:'./calcLogo.ico',title:'calculator ∣ <<Rufat>> '})

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        frame: false,
        splashes: true
    }))

    //win.webContents.openDevTools();
    win.on('closed', ()=>{
        win = null;
    })
}

app.on('ready', createWindow)

app.on('window-all-closed',()=>{
    app.quit();
})