let osDark = window.matchMedia("(prefers-color-scheme: dark)");
let displayColorSchemeSwitch = document.getElementById("myonoffswitch");

function darkModeOn() {
    document.documentElement.classList.add("darkmode");
    displayColorSchemeSwitch.checked = true;
}

function darkModeOff() {
    document.documentElement.classList.remove("darkmode");
    displayColorSchemeSwitch.checked = false;
}

if (osDark.matches) {
    darkModeOn();
}
osDark.addListener(function () {
    if (osDark.matches) {
        darkModeOn();
    } else {
        darkModeOff();
    }
})

if (sessionStorage.getItem("darkMode") === "on") {
    darkModeOn();
} else if (sessionStorage.getItem("darkmode") === "off") {
    darkModeOff();
} else if (osDark.matches) {
    darkModeOn();
}

displayColorSchemeSwitch.addEventListener("change", function () {
    if (displayColorSchemeSwitch.checked) {
        darkModeOn();
        sessionStorage.setItem("darkMode","on");
    } else {
        darkModeOff();
        sessionStorage.setItem("darkMode","off");
    }
})

