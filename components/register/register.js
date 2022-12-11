const template = document.createElement("template");
template.innerHTML = `
    test register
`;

window.customElements.define(
  "register-page",
  class extends HTMLElement {
    constructor() {
      super()
        .attachShadow({ mode: "open" })
        .appendChild(template.content.cloneNode(true));
    }
  }
);
