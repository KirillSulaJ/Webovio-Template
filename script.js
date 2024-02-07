const btn = document.getElementById("menu");
const bar = document.getElementById("menu-bar");

function menu() {
    if (bar.style.display == "none") {
        bar.style.display = "block";
    } else {
        bar.style.display = "none";
    }
}

document.getElementById('menu').onclick = function(){
    menu();
}

window.addEventListener('scroll', function () {
    bar.style.display = "none";
  });