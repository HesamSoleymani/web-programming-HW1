import { persianDigits } from "../../utils/utils.js";

const template = document.createElement("template");
template.innerHTML = `
    <style>
      .container{
        display:flex;
        gap:8px;
        align-items:center;
        flex-grow:1;
      }
      .duration{
        font-size:11px;
      }
    </style>
    <div class="container">
      <flight-location id="origin">
      </flight-location>
      <div class="duration" id="duration">
      </div>
      <flight-location id="destination">
      </flight-location>
    </div>
`;

window.customElements.define(
  "flight-description",
  class extends HTMLElement {
    constructor() {
      super()
        .attachShadow({ mode: "open" })
        .appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
      this.shadowRoot.getElementById(
        "duration"
      ).innerHTML = `....... ${persianDigits(
        this.getAttribute("duration")
      )} .......`;
      this.shadowRoot
        .getElementById("origin")
        .setAttribute("time", this.getAttribute("departure"));
      this.shadowRoot
        .getElementById("origin")
        .setAttribute("city", this.getAttribute("originCity"));
      this.shadowRoot
        .getElementById("origin")
        .setAttribute("airport", this.getAttribute("originAirport"));
      this.shadowRoot
        .getElementById("destination")
        .setAttribute("time", this.getAttribute("arrival"));
      this.shadowRoot
        .getElementById("destination")
        .setAttribute("city", this.getAttribute("destinationCity"));
      this.shadowRoot
        .getElementById("destination")
        .setAttribute("airport", this.getAttribute("destinationAirport"));
    }
  }
);
