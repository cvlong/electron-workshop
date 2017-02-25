const { app, BrowserWindow } = require('electron')

// npm install --save electron
// npm run

let mainWindow;

app.on('ready', () => {
	mainWindow = new BrowserWindow({});
	mainWindow.loadURL('http://www.google.com');
});