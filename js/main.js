// LANGUAGE SWITCHER ------------------------------------------------------------------------------------------ 

document.addEventListener("DOMContentLoaded", function () {
    let langSwitchDesktop = document.getElementById("switch-lang-desktop");
    let langSwitchMobile = document.getElementById("switch-lang-mobile");
    let currentPath = window.location.pathname;
    let userLang = navigator.language || navigator.userLanguage;
    let savedLang = localStorage.getItem("preferredLang");

    // Redirect op basis van browsertaal als er geen voorkeur is opgeslagen
    if (!savedLang) {
        if (userLang.startsWith("en") && !currentPath.startsWith("/en/")) {
            localStorage.setItem("preferredLang", "en");
            window.location.href = "/en" + currentPath;
        } else {
            localStorage.setItem("preferredLang", "nl");
        }
    }

    // Taalkoppeling voor desktop
    if (currentPath.startsWith("/en/")) {
        langSwitchDesktop.href = currentPath.replace("/en/", "/");
        langSwitchDesktop.textContent = "NL"; // Toon NL voor desktop
        langSwitchMobile.href = currentPath.replace("/en/", "/");
        langSwitchMobile.textContent = "NL"; // Toon NL voor mobiel
    } else {
        langSwitchDesktop.href = "/en" + currentPath;
        langSwitchDesktop.textContent = "EN"; // Toon EN voor desktop
        langSwitchMobile.href = "/en" + currentPath;
        langSwitchMobile.textContent = "EN"; // Toon EN voor mobiel
    }

    // Sla de voorkeur op bij klikken
    langSwitchDesktop.addEventListener("click", function () {
        if (currentPath.startsWith("/en/")) {
            localStorage.setItem("preferredLang", "nl");
        } else {
            localStorage.setItem("preferredLang", "en");
        }
    });

    langSwitchMobile.addEventListener("click", function () {
        if (currentPath.startsWith("/en/")) {
            localStorage.setItem("preferredLang", "nl");
        } else {
            localStorage.setItem("preferredLang", "en");
        }
    });
});

// SCROLL TO TOP BUTTON ----------------------------------------------------------------------------------

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
