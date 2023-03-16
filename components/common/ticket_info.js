const template = document.createElement("template");
template.innerHTML = `
<style>
td {
    text-align: center;
    font-family: "Vazirmatn";
    font-size: 20px;
    height: 30px;
  }
  
  .middle-row-middle-cell {
    font-size: 11px;
  }
  
  .lower-row {
    font-size: 11px;
  }
</style>

<table>
        <tr>
            <td>۱۴۰۱/۰۹/۲۹</td>
            <td width="50px">تا</td>
            <td>۱۴۰۱/۰۹/۲۹</td>
        </tr>
        <tr>
            <td>۱,۳۴۲,۱۰۰ تومان</td>
            <td></td>
            <td>اقتصادی</td>
        </tr>
</table>
`;

window.customElements.define(
  "ticket-info-component",
  class extends HTMLElement {
    constructor() {
      super()
        .attachShadow({ mode: "open" })
        .appendChild(template.content.cloneNode(true));
    }
  }
);
