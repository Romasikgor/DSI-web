/alert("Вітаю на нашому сайті!");
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

let button = document.querySelector("button");

button.onmouseover = function () {
    button.style.backgroundColor = "#c7a9a9ff"
}

button.onmouseout = function () {
    button.style.backgroundColor = "#EE4248"
}

button.onclick = function () {
    button.style.backgroundColor = "#996363ff";
};