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
			<div id="artikel-container" class="artikel-container" element="scroll-wrapper">

				<article class="artikel-card">
					<a href="ich.html">
						<img src="/media/ubermich.jpg" alt="Über mich">
						<div class="overlay">
							<h3>Über mich</h3>
							<p>26.12.2025</p>
						</div>
					</a>
				</article>

				<article class="artikel-card">
					<a href="voca.html">
						<img src="/media/text.jpg" alt="Karteikarten">
						<div class="overlay">
							<h3>Karteikarten Beta</h3>
							<p>WIP 15.11.2025</p>
						</div>
					</a>
				</article>

				<article class="artikel-card">
					<a href="artik/altes.html">
						<img src="/media/kompass.jpg" alt="Artikel">
						<div class="overlay">
							<h3>Alte Webseiten</h3>
							<p>15.11.2025</p>
						</div>
					</a>
				</article>

				<article class="artikel-card">
					<a href="artik/plan.html">
						<img src="/media/sonst.jpg" alt="Pläne">
						<div class="overlay">
							<h3>Meine Pläne</h3>
							<p>24.09.2025</p>
						</div>
					</a>
				</article>

				<article class="artikel-card">
					<a href="artik/panzer.html">
						<img src="/media/panzerlogo.jpg" alt="Panzer">
						<div class="overlay">
							<h3>Panzerspielchen</h3>
							<p>15.08.2025</p>
						</div>
					</a>
				</article>

				<article class="artikel-card">
					<a href="artik/manifest.html">
						<img src="/media/text.jpg" alt="Manifest">
						<div class="overlay">
							<h3>Manifest</h3>
							<p>20.06.2025</p>
						</div>
					</a>
				</article>
			</div>
		</section>`;

this.projects = `
		<section class="artikel-leiste">
			<div id="artikel-container" class="artikel-container" element="scroll-wrapper">

				<article class="artikel-card">
					<a href="/artik/punzer.html">
						<img src="/media/panzerlogo.jpg" alt="Punzer">
						<div class="overlay">
							<h3>Panzerspielchen</h3>
							<p>30.03.2026</p>
						</div>
					</a>
				</article>

				<article class="artikel-card">
					<a href="madreact.html">
						<img src="/media/kompass.jpg" alt="MadReaktionstest">
						<div class="overlay">
							<h3>Reaktionstest der jeden Beleidigt!</h3>
							<p>28.03.2026</p>
						</div>
					</a>
				</article>
                
			</div>
		</section>`;