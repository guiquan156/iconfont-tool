var { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({ width: 800, height: 600 });
  win.webContents.openDevTools();

  // win.loadFile(`file://${__dirname}/web/dist/index.html`);
  win.loadURL('http://localhost:8000');

  win.on('closed', () => {
    win = null
  });
}

app.on('ready', createWindow);
