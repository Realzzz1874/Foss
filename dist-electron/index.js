"use strict";
const electron = require("electron");
const path = require("path");
const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
const path__default = /* @__PURE__ */ _interopDefaultLegacy(path);
let win;
const createWindow = () => {
  win = new electron.BrowserWindow({
    webPreferences: {
      devTools: true,
      contextIsolation: false,
      nodeIntegration: true
    }
  });
  if (process.env.NODE_ENV != "development") {
    win.loadFile(path__default.default.join(__dirname, "../index.html"));
  } else {
    win.loadURL(`http://${process.env["VITE_DEV_SERVER_HOST"]}:${process.env["VITE_DEV_SERVER_PORT"]}`);
  }
};
electron.app.whenReady().then(createWindow);
