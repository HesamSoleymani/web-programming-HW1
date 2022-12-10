const template = document.createElement("template");
template.innerHTML = `
    <style>
        .container{
        }
    </style>
    <div class="container">
      test home
    </div>
`;

window.customElements.define(
  "home-page",
  class extends HTMLElement {
    constructor() {
      super()
        .attachShadow({ mode: "open" })
        .appendChild(template.content.cloneNode(true));
    }
  }
);
