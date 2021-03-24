import { app, BrowserWindow, ipcMain } from 'electron';
import { localhost, html, mainWindowConf } from 'main/constants';

const createWindow = () => {
  const win = new BrowserWindow(mainWindowConf);

  DEV ? win.loadURL(localhost) : win.loadFile(html);
};

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => !BrowserWindow.getAllWindows().length && createWindow());
});

app.on('window-all-closed', () => app.quit());

ipcMain.on('addNotification', e => e.reply('showNotification'));
