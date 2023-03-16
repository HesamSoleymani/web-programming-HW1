const template = document.createElement("template");
template.innerHTML = `
    <style>
        .container{
          background: var(--c3);
          border: 1px solid var(--c10);
          border-radius: 24px;
          padding:12px 40px 12px 20px;
          display:flex;
          justify-content:space-between;
          align-items:center;
        }
        .flight-class{
          display:flex;
          gap:12px;
        }
    </style>
    <div class="container">
      <flight-description 
        originCity="تهران" 
        originAirport="مهرآباد"
        destinationCity="کیش"
        destinationAirport="کیش"
        departure="10:30"
        arrival="12:30"
        duration="2:30"
      >
      </flight-description>
      <div class="flight-class">
        <flight-class title="اقتصادی" price="10000" currency="تومان"></flight-class>
        <flight-class title="اقتصادی" price="10000" currency="تومان"></flight-class>
        <flight-class title="اقتصادی" price="10000" currency="تومان"></flight-class>
        </div>
    </div>
`;

window.customElements.define(
  "ticket-box",
  class extends HTMLElement {
    constructor() {
      super()
        .attachShadow({ mode: "open" })
        .appendChild(template.content.cloneNode(true));
    }
  }
);
