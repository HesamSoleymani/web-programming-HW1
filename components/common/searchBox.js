const template = document.createElement("template");
template.innerHTML = `
  <style>
    .container{
        width:80%;
        height:80px;
        background: var(--c3);
        border: 1px solid rgba(0,0,0,0.2);
        box-shadow: 0px 4px 10px -1px rgba(0,0,0,0.2);
        border-radius: 20px;
        margin:auto;
        position:relative;
        cursor: pointer;
    }
    .submit{
        position:absolute;
        bottom:0;
        left:32px;
        margin:0;
        padding: 8px 32px;
        background: var(--c4);
        color: var(--c2);
        border-radius: 20px;
        font-size:14px;
        font-weight:bold;
        transform: translateY(50%);
    }
    @media (max-width: 576px){
        .container{
            width:90%;
        }
        .submit{
            left: 50%;
            transform: translate(-50%,50%);
        }
    }
  </style>

<div class="container">
    <p class="submit">مشاهده بلیط ها</p>
</div>
`;

window.customElements.define(
  "search-box",
  class extends HTMLElement {
    constructor() {
      super()
        .attachShadow({ mode: "open" })
        .appendChild(template.content.cloneNode(true));
    }
  }
);
