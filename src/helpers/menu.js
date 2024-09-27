const { app, Menu } = require("electron")

function createMenu(mainWindow) {
    const isMac = process.platform === "darwin"
    const menu = Menu.buildFromTemplate([
        ...(isMac ? [{
            label: app.name,
            submenu: [
                { role: "about"},
                { type: "separator"},
                { role: "services"},
                { type: "separator"},
                { role: "hide"},
                { role: "hideOthers"},
                { role: "unhide"},
                { type: "separator"},
                { role: "quit"}
            ]
        }] : []),
        {
            label: "File",
            submenu: [
                isMac ? { role: "close"} : { role: "quit"},
            ]
        },
        {
            label: "Edit",
            submenu: [
                { role: "undo"},
                { role: "redo"},
                { type: "separator"},
                { role: "cut"},
                { role: "copy"},
                { role: "paste"},
                ...(isMac ? [
                    { role: "pasteAndMatchStyle"},
                    { role: "delete"},
                    { role: "selectAll"},
                    { type: "separator"}
                ] : [
                    { role: "delete"},
                    { type: "separator"},
                    { role: "SelectAll"}
                ])
            ]
        },
        {
            label: "View",
            submenu: [
                { role: "reload"},
                { role: "forceReload"},
                { type: "separator"},
                { role: "resetZoom"},
                { role: "zoomIn"},
                { role: "zoomOut"},
                { type: "separator"},
                { role: "togglefullscreen"}
            ]
        },
        {
            label: "Window",
            submenu: [
                { role: "minimize"},
                { role: "zoom"},
                ...(isMac ? [
                    { type: "separator"},
                    { role: "front"},
                    { type: "separator"}, 
                    { role: "window"}
                ] : [
                    { role: "close"}
                ])
            ]
        },
        {
            label: "Help",
            submenu: [
                {
                    label: "About",
                    click: () => console.log("About Clicked")
                }
            ]
        }
    ])

    Menu.setApplicationMenu(menu)
}

module.exports = createMenu