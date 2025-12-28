// LANGUAGE SWITCHER ------------------------------------------------------------------------------------------ 

document.addEventListener("DOMContentLoaded", function () {
    let langSwitchDesktop = document.getElementById("switch-lang-desktop");
    let langSwitchMobile = document.getElementById("switch-lang-mobile");
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
        langSwitchDesktop.href = currentPath.replace("/en/", "/");
        langSwitchDesktop.textContent = "NL";
        langSwitchMobile.href = currentPath.replace("/en/", "/");
        langSwitchMobile.textContent = "NL";
    } else {
        langSwitchDesktop.href = "/en" + currentPath;
        langSwitchDesktop.textContent = "EN";
        langSwitchMobile.href = "/en" + currentPath;
        langSwitchMobile.textContent = "EN";
    }


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
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// SCROLL PARALEX ---------------------------------------------------------------------------------------

const bg = document.querySelector('body::after');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    document.body.style.setProperty('--bg-offset', `${scrollY * -0.5}px`);
});

// BACK BUTTON -------------------------------------------------------------------------------------------

function goBack(fallbackUrl) {
  const referrer = document.referrer;
  const sameOrigin = referrer && new URL(referrer).origin === location.origin;

  if (sameOrigin && history.length > 1) {
    history.back();
  } else {
    location.href = fallbackUrl;
  }
}
