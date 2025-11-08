// Вспливаючі вікна!
alert("Вітаю на нашому сайті!");
let years = prompt("Скільки вам років?", 18);
if (years >= 18) {
    let zgoda = confirm("Чи погоджуєтеся ви з вимогами сайту?");
    if (zgoda) {
        alert("Ласкаво просимо :)");
    } else {
        alert("Спробуйте пізніше :)");
    }
} else {
    alert("На жаль вам не можна перебувати на цьому сайті :(")
}

// Наведення на кнопки
let button = document.querySelectorAll("button");

button.forEach(function (item) {
    item.onmouseover = function () {
        item.style.backgroundColor = "#c7a9a9ff"
    };

    item.onmouseout = function () {
        item.style.backgroundColor = "#EE4248"
    };

    item.onclick = function () {
        item.style.backgroundColor = "#996363ff";
    };
});


// Наведення на логотип (Підсказка)
let logoField = document.querySelectorAll(".logo");

logoField.forEach(function (item) {
    let helpField = item.nextElementSibling;
    item.onmouseenter = function () {
        helpField.style.display = "block";
    };

    item.onmousemove = function (e) {
        helpField.style.left = e.offsetX + "px";
        helpField.style.top = e.offsetY + "px";
    };

    item.onmouseleave = function () {
        helpField.style.display = "none";
    };
});





