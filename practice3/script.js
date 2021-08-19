let osDark = window.matchMedia("(prefers-color-scheme: dark)");

function darkModeOn() {
    document.documentElement.classList.add("darkmode");
}

if (osDark.matches) {
    darkModeOn();
}