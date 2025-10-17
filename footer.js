class footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="container">
        <footer
          class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
        >
          <div class="col-md-4 d-flex align-items-center">
            <span class="mb-3 mb-md-0 text-body-secondary"
              >© 2025 Riley Arneson</span
            >
          </div>
          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3 text-body-secondary">Contact</li>
            <li class="ms-3">
              <a
                class="text-body-secondary"
                href="https://www.linkedin.com/in/riley-arneson-126bb014b/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="bi bi-linkedin"></i>
              </a>
            </li>
            <li class="ms-3">
              <a
                class="text-body-secondary"
                href="https://github.com/Riguy29"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="bi bi-github"></i>
              </a>
            </li>
            <li class="ms-3">
              <a
                class="text-body-secondary"
                href="mailto: riguygb@gmail.com?subject=Contact from portfolio&body=Ask me anything!"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="bi bi-envelope-at-fill"></i>
              </a>
            </li>
            <li class="ms-3">
              <div
                type="button"
                class="text-body-secondary"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="top"
                data-bs-content="(920) 660-7674"
              >
                <i class="bi bi-telephone-fill"></i>
              </div>
            </li>
          </ul>
        </footer>
      </div>`;
  }
}

customElements.define("footer-component", footer);
