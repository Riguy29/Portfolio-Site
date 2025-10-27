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
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <svg class="bi me-2" width="40" height="32" aria-hidden="true">
              <use xlink:href="#bootstrap"></use>
            </svg>
            <span class="fs-4">${pageTitle}</span>
          </a>
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a href="cover.html" class="nav-link" aria-current="page" id="nav-home">Home</a>
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
      }
    }
  }
}

customElements.define("header-component", header);
