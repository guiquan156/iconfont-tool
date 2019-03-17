import { ipcMain, dialog } from 'electron';
import { create, getPath } from './window';

export function init() {
  const win = create({ width: 800, height: 600 });
  win.loadURL(getPath());

  bind();
}

function bind() {
  ipcMain.on('open-directory-dialog', function (event, property) {
    dialog.showOpenDialog({
      properties: [property]
    }, function (files) {
      if (!files) return;

      event.sender.send('selectedItem', files[0])
    });
  });
}
