class header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const pageTitle = this.getAttribute("page-title") || "Home";
    this.innerHTML = `      
    <div class="container">
        <header
          class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
        >
        <span class="fs-4 d-flex align-items-center mb-3 mb-md-0 me-md-auto">${pageTitle}</span>
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a href="index.html" class="nav-link" aria-current="page" id="nav-home">Home</a>
            </li>
            <li class="nav-item"><a href="about.html" class="nav-link" id='nav-about' >About</a></li>
            <li class="nav-item"><a href="resume.html" class="nav-link" id="nav-resume" >Resume</a></li>
            <li class="nav-item"><a href="projects.html" class="nav-link" id="nav-projects">Projects</a></li>
            <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
          </ul>
        </header>
      </div>`;

    const activeId = this.getAttribute("active-id");
    if (activeId) {
      const activeLink = this.querySelector(`#${activeId}`);
      if (activeLink) {
        activeLink.classList.add("active");
        activeLink.parentNode.classList.add("active-item");
      }
    }
  }
}

customElements.define("header-component", header);

cssFile = "./styles/header.css";
link = document.createElement("link");
link.rel = "stylesheet";
link.href = cssFile;
document.head.appendChild(link);
