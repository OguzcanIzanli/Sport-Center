// NAVBAR
const navbarMenuBtn = document.querySelector(".navbarMenuBtn");
const navbarMenuBtnIcon = document.querySelector(".navbarMenuBtn i");
const navbarButtons = document.querySelector(".navbarBtns");

navbarMenuBtn.addEventListener("click", () => {
    navbarButtons.classList.toggle("navbarOpen");
    const isOpen = navbarButtons.classList.contains("navbarOpen");

    navbarMenuBtnIcon.classList = isOpen
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars";
});
