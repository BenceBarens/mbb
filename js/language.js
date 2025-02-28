document.addEventListener("DOMContentLoaded", function () {
    let langSwitch = document.getElementById("switch-lang");
    let flagIcon = document.getElementById("flag-icon");
    let currentPath = window.location.pathname;
    let userLang = navigator.language || navigator.userLanguage;
    let savedLang = localStorage.getItem("preferredLang");

    if (!savedLang) {
        if (userLang.startsWith("en") && !currentPath.startsWith("/en/")) {
            localStorage.setItem("preferredLang", "en");
            window.location.href = "/en" + currentPath;
        } else {
            localStorage.setItem("preferredLang", "nl");
        }
    }

    if (currentPath.startsWith("/en/")) {
        langSwitch.href = currentPath.replace("/en/", "/");
        flagIcon.src = "img/nl.svg";
        flagIcon.alt = "Switch to Dutch";
    } else {
        langSwitch.href = "/en" + currentPath;
        flagIcon.src = "img/gb.svg";
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
//ALLEEN VOOR GITHUB TESTING
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("a").forEach(link => {
        if (link.getAttribute("href") && !link.getAttribute("href").startsWith("http")) {
            link.setAttribute("href", "/mbb/" + link.getAttribute("href"));
        }
    });
});
