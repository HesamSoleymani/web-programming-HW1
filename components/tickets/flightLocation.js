import { persianDigits } from "../../utils/utils.js";

const template = document.createElement("template");
template.innerHTML = `
    <style>
      .container{
        display:flex;
        flex-direction:column;
        gap:3px;
        align-items:center;
      }
      .time{
        font-size: 20px;
        line-height: 16px;
      }
      .city{
        font-size: 20px;
      }
      .airport{
        font-size: 11px;
      }
    </style>
    <div class="container">
      <div class="time" id="time"></div>
      <div class="city" id="city"></div>
      <div class="airport" id="airport"></div>
    </div>
`;

window.customElements.define(
  "flight-location",
  class extends HTMLElement {
    constructor() {
      super()
        .attachShadow({ mode: "open" })
        .appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
      this.shadowRoot.getElementById("time").innerHTML = persianDigits(
        this.getAttribute("time")
      );
      this.shadowRoot.getElementById("city").innerHTML =
        this.getAttribute("city");
      this.shadowRoot.getElementById("airport").innerHTML =
        this.getAttribute("airport");
    }
  }
);
