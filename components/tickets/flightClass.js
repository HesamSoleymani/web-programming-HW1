import { persianDigits } from "../../utils/utils.js";

const template = document.createElement("template");
template.innerHTML = `
    <style>
      .container{
        width: 110px;
        height: 118px;
        box-sizing: border-box;
        background: var(--c2);
        border-radius: 18px;
        display:flex;
        flex-direction:column;
        align-items:center;
        padding:12px;
        cursor:pointer;
      }
      .title{
        font-size: 11px;
        flex-grow:0;
      }
      hr{
        display: block;
        height: 1px;
        border: 0;
        border-top: 1px solid var(--c10);
        flex-grow:0;
        width:100%;
      }
      .price{
        display:flex;
        flex-direction:column;
        flex-grow:1;
        justify-content:center;
        align-items:center;
      }
      .amount{
        font-size: 16px;
      }
      .currency{
        font-size: 11px;
      }
      @media (max-width: 576px){
        .container{
          height: auto;
          width:100%;
        }
      }
    </style>
    <div class="container">
      <div class="title" id="title">اقتصادی</div>
      <hr/>
      <div class="price" id="price">
        <div class="amount" id="amount">۱۰۰۰۰۰۰</div>
        <div class="currency" id="currency">تومان</div>
      </div>
    </div>
`;

window.customElements.define(
  "flight-class",
  class extends HTMLElement {
    constructor() {
      super()
        .attachShadow({ mode: "open" })
        .appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
      this.shadowRoot.getElementById("title").innerHTML =
        this.getAttribute("title");
      this.shadowRoot.getElementById("amount").innerHTML = persianDigits(
        this.getAttribute("price")
      );
      this.shadowRoot.getElementById("currency").innerHTML =
        this.getAttribute("currency");
    }
  }
);
