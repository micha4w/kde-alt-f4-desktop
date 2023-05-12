registerShortcut("Alt-F4-Desktop", "Close Window or show Logout Option", "Alt+F4", function() {
    if (workspace.activeClient.desktopWindow) {
        callDBus("org.kde.ksmserver", "/KSMServer", "org.kde.KSMServerInterface", "logout", 1, 3, 3)
    } else {
        workspace.activeClient.closeWindow()
    }
})


