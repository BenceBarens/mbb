document.addEventListener("DOMContentLoaded", function () {
    let langSwitch = document.getElementById("switch-lang");
    let flagIcon = document.getElementById("flag-icon");
    let currentPath = window.location.pathname;
    let userLang = navigator.language || navigator.userLanguage;
    let savedLang = localStorage.getItem("preferredLang");

    // Determine the base URL for GitHub Pages
    let baseUrl = window.location.origin + window.location.pathname.split('/').slice(0, -1).join('/');

    if (!savedLang) {
        if (userLang.startsWith("en") && !currentPath.startsWith("/en/")) {
            localStorage.setItem("preferredLang", "en");
            window.location.href = baseUrl + "/en" + currentPath;
        } else {
            localStorage.setItem("preferredLang", "nl");
        }
    }

    let pathDepth = currentPath.split('/').length - 2;
    let relativePath = '../'.repeat(pathDepth);

    if (currentPath.startsWith("/en/")) {
        langSwitch.href = currentPath.replace("/en/", "/");
        flagIcon.src = relativePath + "img/nl.svg";
        flagIcon.alt = "Switch to Dutch";
    } else {
        langSwitch.href = "/en" + currentPath;
        flagIcon.src = relativePath + "img/gb.svg";
        flagIcon.alt = "Switch to English";
    }

    langSwitch.addEventListener("click", function () {
        if (currentPath.startsWith("/en/")) {
            localStorage.setItem("preferredLang", "nl");
        } else {
            localStorage.setItem("preferredLang", "en");
        }
    });
});

