const { app, BrowserWindow } = require('electron')
const path = require('path')

// npm install --save electron
// npm run

let mainWindow;

app.on('ready', () => {
	const index = path.join(__dirname, 'index.html');

	mainWindow = new BrowserWindow({});
	// want a protocol
	mainWindow.loadURL(`file:///${index}`);
	// loadURL('file:///Users/christinalong/.../index.html')
});