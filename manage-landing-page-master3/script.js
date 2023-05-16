const openMenu = document.querySelector('#openMenu');
const closeMenu = document.querySelector('#closeMenu');
const sideMenu = document.querySelector('#sideMenu');

openMenu.addEventListener('click', () => {
    sideMenu.style.display = "block";
    openMenu.style.display = "none";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    document.body.style.transition = "background-color 0.5s ease";
    closeMenu.style.display = "block"
})

function hideMenu() {
    sideMenu.style.display = "none";
    document.body.style.backgroundColor = "";
    openMenu.style.display = "block"
}

closeMenu.addEventListener("click", hideMenu);

sideMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", hideMenu);
});

document.addEventListener("click", (event) => {
    if (!sideMenu.contains(event.target) && event.target != openMenu) {
        hideMenu();
    }
})