document.getElementById("button-up").addEventListener("click", scrollUp);
var filtros = [];
function scrollUp() {
    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0) {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
}

buttonUp = document.getElementById("button-up");
window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;
    if (scroll > 500) {
        buttonUp.style.transform = "scale(1)";
    } else if (scroll < 500) {
        buttonUp.style.transform = "scale(0)";
    }

}
