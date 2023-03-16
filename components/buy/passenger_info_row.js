const template = document.createElement("template");
template.innerHTML = `
<style>
table [type="name"],
table [type="last_name"],
table [type="passport_number"] {
  padding: 15px;
  font-size: 16px;
  background: #FFFFFF;
  border: 2px solid #9EC1D7;
  border-radius: 12px;
  /*margin-bottom: 15px;*/
  transition: background 0.3s;
  color: #1B1C27;
  margin: auto;
  font-family: "Vazirmatn";
}

table [type="name"]::placeholder,
table [type="last_name"]::placeholder,
table [type="passport_number"]::placeholder  {
  color: #A9A9A9;
}

table [type="name"]:hover,
table [type="last_name"]:hover,
table [type="passport_number"]:hover {
  background: rgba(0, 0, 0, 0.1);
}

table [type="name"]:focus,
table [type="last_name"]:focus,
table [type="passport_number"]:focus{
  background: #ffffff;
  border-color: #4a304d;
  color: #222222;
}

table [type="name"]:focus::placeholder,
table [type="last_name"]:focus::placeholder,
table [type="passport_number"]:focus::placeholder {
  color: #666666;
}

</style>

<table>
    <tr>
        <td width="50px">۱</td>
        <td>
            <input type="name" placeholder="نام"/>
        </td>
        <td>
            <input type="name" placeholder="نام‌خانوادگی"/>
        </td>
        <td>
            <input type="name" placeholder="شماره پاسپورت"/>
        </td>
    </tr>
</table>
`;

window.customElements.define(
  "passenger-info-row",
  class extends HTMLElement {
    constructor() {
      super()
        .attachShadow({ mode: "open" })
        .appendChild(template.content.cloneNode(true));
    }
  }
);
