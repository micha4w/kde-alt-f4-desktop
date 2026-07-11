var waitingForLastWindow = false;

function hasNormalWindows() {
    var windows = workspace.windowList();

    for (var i = 0; i < windows.length; ++i) {
        var w = windows[i];

        if (!w)
            continue;

        if (w.desktopWindow)
            continue;

        if (w.dock)
            continue;

        if (w.splash)
            continue;

        if (w.popupWindow)
            continue;

        if (w.notification)
            continue;

        if (w.utility)
            continue;

        return true;
    }

    return false;
}

workspace.windowRemoved.connect(function() {
    if (!waitingForLastWindow)
        return;

    if (!hasNormalWindows()) {
        waitingForLastWindow = false;

        callDBus(
            "org.kde.LogoutPrompt",
            "/LogoutPrompt",
            "",
            "promptAll"
        );
    }
});

registerShortcut(
    "Alt-F4-Desktop",
    "Close Window or show Logout Option",
    "Alt+F4",
    function() {

        var w = workspace.activeWindow;

        if (!w || w.desktopWindow) {
            callDBus(
                "org.kde.LogoutPrompt",
                "/LogoutPrompt",
                "",
                "promptAll"
            );
            return;
        }

        waitingForLastWindow = true;
        w.closeWindow();
    }
);