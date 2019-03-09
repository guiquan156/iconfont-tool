import { app, BrowserWindow } from 'electron';

function createWindow () {
    const win = new BrowserWindow({ width: 800, height: 600 });
    win.webContents.openDevTools();

    win.loadFile();

    win.on('closed', () => {
        win = null
    });
}

app.on('ready', createWindow);
