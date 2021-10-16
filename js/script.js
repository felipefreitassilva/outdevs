function toggleMenu() {

    var button = document.getElementById("button");
    var mobileMenu = document.getElementById("mobileMenu");

    if (mobileMenu.style.display === "flex") {
        button.innerHTML = "=";
        mobileMenu.style.display = "none";
    } else {
        button.innerHTML = "X";
        mobileMenu.style.display = "flex";
        mobileMenu.classList.add("openAnimation");
        mobileMenu.classList.remove("displayNone");
    }
}

function displayNone() {
    var mobileMenu = document.getElementById("mobileMenu");
    if (screen.width > 966) {
        mobileMenu.classList.add("displayNone");
    } else {
        mobileMenu.classList.remove("displayNone");
    }
}