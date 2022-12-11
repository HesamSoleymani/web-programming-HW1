const template = document.createElement("template");
template.innerHTML = `
  <style>
    .header {
      background: var(--c3);
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      padding: 30px 0;
    }
    .logo {
      height: 44px;
    }
    .menu{
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      gap:32px;
    }
    .active-menu{
      font-weight: bold;
    }
    li{
      cursor:pointer;
    }
  </style>

  <div class="header">
    <ul class="menu">
      <li id="home">
        خانه
      </li>
      <li id="tickets">
        جست‌وجوی بلیط
      </li>
    </ul>
    <img class="logo" src="../../assets/svgs/logo.svg"/>
    <ul class="menu">
      <li id="login">
        ورود
      </li>
      <li id="register">
        ثبت نام
      </li>
    </ul>
  </div>
`;

window.customElements.define(
  "header-component",
  class extends HTMLElement {
    constructor() {
      super()
        .attachShadow({ mode: "open" })
        .appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
      if (this.getAttribute("menu"))
        this.shadowRoot
          .getElementById(this.getAttribute("menu"))
          .classList.add("active-menu");
      this.shadowRoot.querySelectorAll("li").forEach((item) =>
        item.addEventListener("click", (e) => {
          history.pushState(
            {},
            "",
            `${window.location.origin}?page=${e.target.id}`
          );
          this.dispatchEvent(
            new CustomEvent("page-changed", {
              bubbles: true,
            })
          );
        })
      );
    }
  }
);
