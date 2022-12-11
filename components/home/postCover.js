const template = document.createElement("template");
template.innerHTML = `
  <style>
    .container {
        border-radius:20px;
        background-image: url("../../assets/images/blogPostsCovers/1.jpg");
        background-size:cover;
        background-position:center;
        height: 220px;
        position:relative;
        cursor: pointer;
    }
    .title{
        position: absolute;
        bottom:0;
        width:100%;
        padding: 8px 0;
        text-align:center;
        margin:0;
        border-radius: 0 0 20px 20px;
        color:white;
        background: rgba(0, 0, 0, 0.5);
    }
    @media (max-width: 576px){
        .container{
            height:240px;
        }
    }
  </style>

  <div class="container">
    <h5 class="title">
        عنوان مطلب  
    </h5>
  </div>
`;

window.customElements.define(
  "post-cover",
  class extends HTMLElement {
    constructor() {
      super()
        .attachShadow({ mode: "open" })
        .appendChild(template.content.cloneNode(true));
    }
  }
);
