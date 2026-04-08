this.header = `
  <script src="/static/settings.js" defer><\/script>
<header class="fixed-header">

  <div class="header-inner">

    <div class="image-container">
      <a href="/">
        <img src="/media/blacklog.png" style="max-width:80px; height:auto;">
      </a>
    </div>

    <div class="header-socials">
      <a href="https://youtube.com/@YarlsWip">
        <img src="/media/youtube.png" alt="Mein YouTube" height="60px">
      </a>
      <a href="https://github.com/Yarlswip">
        <img src="/media/github.png" alt="Mein Github" height="60px">
      </a>
    </div>

    <div class="settings-menu" id="settingsMenu">
      <ul>
        <li><button id="colorButton">Dark/Light Mode</button></li>
      </ul>
    </div>

  </div>

  <script>
    const colorButton = document.getElementById('colorButton');
    const header = document.querySelector('header');

    const bgColors = ["#191919", "#B8840A"];
    const headerColors = ["#ff2626", "#04466F"];

    const stored = localStorage.getItem("themeIndex");
    let themeIndex = stored !== null ? Number(stored) : 0;

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
  <\/script>
</header>
  <main>
    <hr>
    <div style="display: flex; align-items: center; justify-content: center;">
      <h1 id="textanim" style="font-size:50px; margin:0;"></h1>
      <img src="/media/logoleft.png" alt="Logo" class="slide-in-image" id="logo"
        style="height:250px; margin-left:20px;">
    </div>
    <script>
      const el = document.getElementById("textanim");
      const text = "WILLKOMMEN\nBEI";
      let i = 0;
      const speed = 77;

      function typeWriter() {
        if (i < text.length) {
          const ch = text.charAt(i++);
          el.innerHTML += (ch === "\n") ? "<br>" : ch;
          setTimeout(typeWriter, speed);
        } else {
          el.classList.add("slide-in-text");
          document.getElementById("logo").classList.add("visible");
        }
      }

      typeWriter();
    <\/script>`;

this.article = `
    <section class="artikel-leiste">
      <div id="artikel-container-main" class="artikel-container" data-element="scroll-wrapper">
        <!-- artikel-cards hier ... -->
      </div>
    </section>`;

this.projects = `
    <section class="artikel-leiste">
      <div id="artikel-container-projects" class="artikel-container" data-element="scroll-wrapper">
        <!-- artikel-cards hier ... -->
      </div>
    </section>`;
