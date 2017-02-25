const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

app.on('ready', () => {
	const index = path.join(__dirname, 'index.html');

	mainWindow = new BrowserWindow({});
	mainWindow.loadURL(`file:///${index}`);
	// loadURL('file:///Users/christinalong/.../index.html')

	// make sure this window does not navigate
	// webContents are this cool thing that a browser window in chrome can have
	// intercepting a navigation attempt is pretty much impossible
	// but can use this object to get elements from chrome developer
	mainWindow.webContents.on('will-navigate', (e, url) => {
		e.preventDefault();
		console.log(`Tried to navigate to ${url}`);

	// but the browser window doesn't know that this happened
	// Tried to navigate to file:///Users/ChristinaLong/Desktop/sfbikemap.pdf

	// IPC allows us to send events/objects between the main process 
	// two components: IPC main & IPC processer
	// update renderer.js so that navigate on event, and console.log(e)
	// sends a navigate event to the main window, which is listening
		mainWindow.webContents.send('navigate', url);
	});
});