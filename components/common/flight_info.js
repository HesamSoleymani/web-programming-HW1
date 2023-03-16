const template = document.createElement("template");
template.innerHTML = `
<style>
td {
    text-align: center;
    font-family: "Vazirmatn";
    font-size: 20px;
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
        <td>۱۳:۰۰</td>
        <td></td>
        <td>۱۰:۳۰</td>
    </tr>
    <tr>
        <td>کیش</td>
        <td class="middle-row-middle-cell">----۰۲:۳۰----</td>
        <td>تهران</td>
    </tr>
    <tr>
        <td class="lower-row" height="28px">فرودگاه کیش</td>
        <td class="lower-row" height="28px"></td>
        <td class="lower-row" height="28px">فرودگاه تهران</td>
    </tr>
</table>
`;

window.customElements.define(
  "flight-info-component",
  class extends HTMLElement {
    constructor() {
      super()
        .attachShadow({ mode: "open" })
        .appendChild(template.content.cloneNode(true));
    }
  }
);
