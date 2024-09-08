document.getElementById("btnMenu").addEventListener("click", toogleMenu);
document.getElementById("menu").style.display = "none";

function toogleMenu() {
    var x = document.getElementById("menu");
    x.style.transition = 'display 2s ease-in';
    x.style.display = (x.style.display === "flex") 
                    ? "none" : "flex";
}
