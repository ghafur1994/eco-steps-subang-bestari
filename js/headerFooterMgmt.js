class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container ">
          <a class="navbar-brand" href="index.html">
            <span style="padding-right:3px; padding-top: 3px; display:inline-block;">
              <img class="logo_default" src="images/icon-eco-steps-subest.png"></img>
            </span>
            <span>
              Eco Steps SK Subang Bestari
            </span>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul class="navbar-nav  ">
                <li class="nav-item active">
                  <a class="nav-link" href="index.html"> Utama </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="about.html"> Tentang Kami </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="affiliate.html"> Sahabat Kami</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="pic.html"> Kenali Kami</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contact.html"> Hubungi Kami </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
        `
  }
}

class SpecialTitle extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <title>Eco Steps Subang Bestari</title>
            <link rel="icon" 
                href= "images/icon-eco-steps-subest.png"
                type="image/x-icon"/>
        `
  }
}

class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="container-fluid footer_section">
      <p>
        &copy; 2024 All Rights Reserved. Design by
        Pelajar Sekolah Kebangsaan Subang Bestari
      </p>
    </footer>
    `
  }
}

customElements.define('special-header', SpecialHeader);
customElements.define('special-title', SpecialTitle);
customElements.define('special-footer', SpecialFooter)



