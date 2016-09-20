var link = document.querySelector(".search-hotel-btn");
var popup = document.querySelector(".search-hotel-form");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");
var storage = localStorage.getItem("adults");

link.addEventListener("click", function (event) {
    event.preventDefault();
    if (popup.classList.contains("form-show")) {
        popup.classList.remove("form-show");
    } else {
        popup.classList.add("form-show");
    }
});

popup.addEventListener("submit", function (event) {
    if (!adults.value || !children.value) {
        event.preventDefault();
        popup.classList.add('error');
        alert("Нужно ввести количество взрослых и детей");
    } else {
        localStorage.setItem("adults", adults.value);
        localStorage.setItem("children", children.value);
    }
});