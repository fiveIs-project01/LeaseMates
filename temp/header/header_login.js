fetch("../../../temp/header/header_login.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("header-login-placeholder").innerHTML = data;
    });