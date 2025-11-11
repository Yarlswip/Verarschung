document.addEventListener("DOMContentLoaded", () => {
    const settingsBtn = document.getElementById("settingsBtn");
    const settingsMenu = document.getElementById("settingsMenu");

    if (!settingsBtn || !settingsMenu) {
        console.error("Nicht mein problem Error!(Checke bitte ob JavaScript im deinen Browseraktiviert ist!)");
        return;
    }

    settingsBtn.addEventListener("click", () => {
        settingsMenu.classList.toggle("show");
    });


    document.addEventListener("click", (e) => {
        if (!settingsBtn.contains(e.target) && !settingsMenu.contains(e.target)) {
            settingsMenu.classList.remove("show");
        }
    });
});
