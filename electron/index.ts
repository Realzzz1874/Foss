import { app, BrowserWindow } from 'electron'
import path from 'path'
let win: BrowserWindow | null;
//定义全局变量获取 窗口实例

const createWindow = () => {
  win = new BrowserWindow({
    //
    webPreferences: {
      devTools: true,
      contextIsolation: false,
      nodeIntegration: true
    }
  })
  if (process.env.NODE_ENV != 'development') {
    win.loadFile(path.join(__dirname, "../index.html"));
  } else {
    win.loadURL(`http://${process.env['VITE_DEV_SERVER_HOST']}:${process.env['VITE_DEV_SERVER_PORT']}`)
  }
}
app.whenReady().then(createWindow)