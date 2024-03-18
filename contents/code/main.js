registerShortcut("Alt-F4-Desktop", "Close Window or show Logout Option", "Alt+F4", function() {
    if (workspace.activeWindow.desktopWindow) {
        callDBus("org.kde.LogoutPrompt", "/LogoutPrompt", "", "promptShutDown")
    } else {
        workspace.activeWindow.closeWindow()
    }
})


