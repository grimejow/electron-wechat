const BrowserWindow = require('electron').remote.BrowserWindow;
const ipcRenderer = require('electron');

const path = require("path");
const loginBtn = document.querySelector('#login');
const minWin = document.querySelector('#min-win');
const closeWin = document.querySelector('#close-win');

let loginWindow = BrowserWindow.getFocusedWindow();
let chatWindow;
loginBtn.onclick = () => {
    // ipcRenderer.sendSync('closed');




    chatWindow = new BrowserWindow({
        width: 1240,
        height: 845,
        // frame: true

    });
    // chatWindow.webContents.openDevTools();
    chatWindow.on("close", () => {
        chatWindow = null;
        loginWindow.close()
    });
    chatWindow.loadURL(path.join("file:", __dirname, "../go-talk.html"));

    loginWindow.hide();

    // loginWindow = null;
}
closeWin.onclick = () => {
    // ipcRenderer.sendSync('closed');

    loginWindow.close();

    loginWindow = null;
}
minWin.onclick = () => {
    loginWindow.minimize();
}