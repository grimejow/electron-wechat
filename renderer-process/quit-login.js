const BrowserWindow = require('electron').remote.BrowserWindow;
const ipcRenderer = require('electron');
const path = require("path");
const quitLLogin = document.querySelector('#quit-login');
const add = document.querySelector('#add');
let chatWindow = BrowserWindow.getFocusedWindow();
let loginWindow;
quitLLogin.onclick = () => {
    // ipcRenderer.sendSync('closed');


    // console.log(loginWindow);
    // loginWindow.close();
    // loginWindow.hide();

    // chatWindow = new BrowserWindow({
    //     width: 1240,
    //     height: 845,
    //     // frame: true
    // });
    // chatWindow.on("close", () => { win = null });
    // chatWindow.loadURL(path.join("file:", __dirname, "../go-talk.html"));
    // chatWindow.webContents.openDevTools();
    BrowserWindow.getAllWindows()[0].show();
    chatWindow.close();

    // loginWindow = null;
}
add.onclick = () => {
    console.log(BrowserWindow.getAllWindows());
}