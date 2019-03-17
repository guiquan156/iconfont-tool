import is from 'electron-is';
import { join } from 'path';
import { format } from 'url';
import { BrowserWindow } from 'electron';
import log from 'electron-log';

let count = 0;

export function create(opts) {
  count += 1;
  let win = new BrowserWindow(opts);
  win.on('close', () => {
    count -= 1;
    win = null;
  });
  return win;
}

export function getCount() {
  return count;
}

export function getPath() {
  let path = `file://${join($dirname, '..', 'renderer')}/index.html`;

  if (is.dev()) {
    path = 'http://127.0.0.1:8000/';
  }

  log.info(`(win) ${path}`);
  return path;
}
