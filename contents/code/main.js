registerShortcut("Alt-F4-Desktop", "Close Window or show Logout Option", "Alt+F4", function() {
    if (workspace.activeWindow == null
        || workspace.activeWindow.desktopWindow
        || workspace.activeWindow.resourceClass == 'xwaylandvideobridge') {
        callDBus("org.kde.LogoutPrompt", "/LogoutPrompt", "", "promptAll")
    } else {
        workspace.activeWindow.closeWindow()
    }
})


