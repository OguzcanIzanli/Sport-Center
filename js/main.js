// NAVBAR
const navbarMenuBtn = document.querySelector(".navbarMenuBtn");
const navbarMenuBtnIcon = document.querySelector(".navbarMenuBtn i");
const navbarButtons = document.querySelector(".navbarBtns");
const navbar = document.querySelector(".navbar");

navbarMenuBtn.addEventListener("click", () => {
    navbarButtons.classList.toggle("navbarOpen");
    const isOpen = navbarButtons.classList.contains("navbarOpen");

    navbarMenuBtnIcon.classList = isOpen
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars";
});

document.addEventListener("scroll", () => {
    window.scrollY > 100
        ? (navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)")
        : (navbar.style.backgroundColor = "");
});

// CLASSES
const classesBtns = document.querySelectorAll(".classesBtn");
const classes = document.querySelectorAll(".classes");

classesBtns.forEach((btn) => {
    btn.addEventListener("click", handleClick);
});

function handleClick(e) {
    e.preventDefault();
    classesBtns.forEach((btn) => {
        btn.innerHTML = `${btn.name.charAt(0).toUpperCase()}${btn.name.slice(
            1
        )}`;
        btn.classList.remove("selected");
    });

    e.target.innerHTML = `${e.target.name
        .charAt(0)
        .toUpperCase()}${e.target.name.slice(1)} <span class="caret"
    ><i class="fa-solid fa-caret-down"></i
></span>`;

    e.target.classList.add("selected");

    classes.forEach((classItem) => {
        classItem.classList.remove("d-flex");
        if (e.target.name == classItem.id) {
            classItem.classList.add("d-flex");
        }
    });
}
