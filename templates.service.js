this.header = `
<script src="/static/settings.js" defer></script>
<header class="fixed-header">
    <div class="image-container">
        <a href="/">
            <img src="/media/blacklogo.png" alt="Homepage" height="60px">
        </a>
    </div>

    <div class="image-container">
        <a href="https://youtube.com/@YarlsWip">
            <img src="/media/youtube.png" alt="Mein YouTube" height="60px">
        </a>
    </div>

    <div class="image-container">
        <a href="https://github.com/Yarlswip">
            <img src="/media/github.png" alt="Mein Github" height="60px">
        </a>
    </div>

    <div class="image-container">
        <a href="https://x.com/kiserkaese">
            <img src="/media/twitter.png" alt="Mein Twitter" height="60px">
        </a>
    </div>

    <div class="image-container settings-container">
        <button class="settings-btn" id="settingsBtn">
            <img src="/media/zahnrad.png" alt="Einstellungen" height="60px">
        </button>
    </div>
    <div class="settings-menu" id="settingsMenu">
      <ul>
            <button id="colorButton">Dark/Light Mode</button>
    <script>
        const colorButton = document.getElementById('colorButton');
        const header = document.querySelector('header');

        const bgColors = ["#191919", "#B8840A"];
        const headerColors = ["#ff2626", "#04466F"];

        let themeIndex = Number(localStorage.getItem("themeIndex")) || 0;

        function applyTheme(index) {
            document.body.style.backgroundColor = bgColors[index];
            header.style.backgroundColor = headerColors[index];
        }

        applyTheme(themeIndex);

        colorButton.addEventListener('click', () => {
            themeIndex = (themeIndex + 1) % bgColors.length;
            localStorage.setItem("themeIndex", themeIndex);
            applyTheme(themeIndex);
        });
    </script>
        </ul>
    </div>
</header>`;
