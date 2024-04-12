//헤더

fetch("/temp/header/header.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("header-placeholder").innerHTML = data;
    });
