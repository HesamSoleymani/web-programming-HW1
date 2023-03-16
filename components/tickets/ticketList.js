const template = document.createElement("template");
template.innerHTML = `
    <style>
        .container{
          width:50%;
          margin:auto;
          display:flex;
          flex-direction:column;
          gap:44px;
        }
        .search-box{
          margin: 47px 0 53px 0;
        }
        .container > :last-child {
          margin-bottom: 47px;
        }
    </style>
    <div class="search-box">
      <search-box></search-box>
    </div>
    <div class="container">
      <ticket-box></ticket-box>
      <ticket-box></ticket-box>
      <ticket-box></ticket-box>
      <ticket-box></ticket-box>
    </div>
`;

window.customElements.define(
  "tickets-page",
  class extends HTMLElement {
    constructor() {
      super()
        .attachShadow({ mode: "open" })
        .appendChild(template.content.cloneNode(true));
    }
  }
);
