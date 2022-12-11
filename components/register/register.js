const template = document.createElement("template");
template.innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Log in</title>
    <meta charset="UTF-8">
    <title>Login Page</title>
    <link href="https://fonts.googleapis.com/css2?family=Muli:wght@400;700&display=swap" rel="stylesheet">
</head>
<style>
body {
  margin: 0;
  color: #222222;
  background-color: #FFFFFF;
}

body, input, button {
  font-family: "Muli", sans-serif, -apple-system, BlinkMacSystemFont,
  "Helvetica Neue", Helvetica, sans-serif;
  outline: none;
}

.main-container{
  position: relative;
}

.form-container{
  max-width: 450px;
  margin: auto;
  background-color: #FFFFFF;
  overflow: hidden;
  padding: 50px;
  color: #ffffff;
  border-radius: 3px;
}

.the-form {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.the-form [type="name"],
.the-form [type="last_name"],
.the-form [type="passport_number"],
.the-form [type="email"],
.the-form [type="password"],
.the-form [type="repeat_password"] {
  padding: 15px;
  font-size: 16px;
  background: #FFFFFF;
  border: 2px solid #9EC1D7;
  border-radius: 12px;
  margin-bottom: 15px;
  transition: background 0.3s;
  color: #1B1C27;
}

.the-form [type="name"]::placeholder,
.the-form [type="last_name"]::placeholder,
.the-form [type="passport_number"]::placeholder,
.the-form [type="email"]::placeholder,
.the-form [type="password"]::placeholder,
.the-form [type="repeat_password"]::placeholder  {
  color: #A9A9A9;
}

.the-form [type="name"]:hover,
.the-form [type="last_name"]:hover,
.the-form [type="passport_number"]:hover,
.the-form [type="email"]:hover,
.the-form [type="password"]:hover,
.the-form [type="repeat_password"]:hover {
  background: rgba(0, 0, 0, 0.1);
}

.the-form [type="name"]:focus,
.the-form [type="last_name"]:focus,
.the-form [type="passport_number"]:focus,
.the-form [type="email"]:focus,
.the-form [type="password"]:focus,
.the-form [type="repeat_password"]:focus {
  background: #ffffff;
  border-color: #4a304d;
  color: #222222;
}

.the-form [type="name"]:focus::placeholder,
.the-form [type="last_name"]:focus::placeholder,
.the-form [type="passport_number"]:focus::placeholder,
.the-form [type="email"]:focus::placeholder,
.the-form [type="password"]:focus::placeholder,
.the-form [type="repeat_password"]:focus::placeholder {
  color: #666666;
}

.the-form [type="submit"] {
  background: #18465A;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 18px;
  font-size: 20px;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 20px;
  color: #FFFFFF;
}

.the-form [type="hyper_link"] {
  margin: auto;
  padding: 15px;
}
</style>
<body>
<div class="main-container">
    <div class="form-container">
        <div class="the-form">
            <input type="name" dir="rtl" name="name" id="name" placeholder="نام">

            <input type="last_name" dir="rtl" name="last_name" id="last_name" placeholder="نام خانوادگی">

            <input type="passport_number" dir="rtl" name="passport_number" id="passport_number" placeholder="شماره گذرنامه">

            <input type="email" dir="rtl" name="email" id="email" placeholder="پست الکترونیکی">

            <input type="password" dir="rtl" name="password" id="password" placeholder="رمز عبور">

            <input type="repeat_password" dir="rtl" name="repeat_password" id="repeat_password" placeholder="تکرار رمز عبور">

            <button type="submit" dir="rtl">ثبت‌ نام</button>

            <a type="hyper_link" href="#">وارد شوید</a>
        </div>
    </div>
</div>
</body>
</html>
`;

window.customElements.define(
  "register-page",
  class extends HTMLElement {
    constructor() {
      super()
        .attachShadow({ mode: "open" })
        .appendChild(template.content.cloneNode(true));
    }
  }
);
