const template = document.createElement("template");
template.innerHTML = `
    test login
`;

window.customElements.define(
  "login-page",
  class extends HTMLElement {
    constructor() {
      super()
        .attachShadow({ mode: "open" })
        .appendChild(template.content.cloneNode(true));
    }
  }
);
