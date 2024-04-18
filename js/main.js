// NAVBAR - START
const navbarMenuBtn = document.querySelector(".navbarMenuBtn"); // Navbar Dropdown Menu Button
const navbarMenuBtnIcon = document.querySelector(".navbarMenuBtn i"); // Dropdown Menu Button Icon
const navbarButtons = document.querySelector(".navbarBtns"); // Navbar Buttons
const navbar = document.querySelector(".navbar"); // Navbar

// Navbar Dropdown Menu Actions
navbarMenuBtn.addEventListener("click", () => {
    navbarButtons.classList.toggle("navbarOpen");
    const isOpen = navbarButtons.classList.contains("navbarOpen");

    navbarMenuBtnIcon.classList = isOpen
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars";
});

// Navbar Page Scroll Event
document.addEventListener("scroll", () => {
    window.scrollY > 100
        ? (navbar.style.backgroundColor = "#355592")
        : (navbar.style.backgroundColor = "");
});
// NAVBAR - END

// CLASSES - START
const classesBtns = document.querySelectorAll(".classesBtn"); // Classes Buttons
const classes = document.querySelectorAll(".classes"); // Classes (yoga, group, solo, stretching..)

classesBtns.forEach((btn) => {
    btn.addEventListener("click", handleClick);
});

function handleClick(e) {
    e.preventDefault();

    // Remove Class Selection
    classesBtns.forEach((btn) => {
        btn.innerHTML = `${btn.name.charAt(0).toUpperCase()}${btn.name.slice(
            1
        )}`;
        btn.classList.remove("selected");
    });

    // When clicked one of the classes buttons, selection effect is applied, caret symbol is added and the relevant class is called.
    e.target.innerHTML = `${e.target.name
        .charAt(0)
        .toUpperCase()}${e.target.name.slice(1)} <span class="caret">
                                                    <i class="fa-solid fa-caret-down"></i>
                                                </span>`;

    e.target.classList.add("selected");

    classes.forEach((classItem) => {
        classItem.classList.remove("d-flex");
        if (e.target.name == classItem.id) {
            classItem.classList.add("d-flex");
        }
    });
}
// CLASSES - END

// BMI CALCULATOR - START
const calculatorInputs = document.querySelectorAll("input");
const calculatorCaret = document.querySelector(".calculatorCaret");
const requiredMsg = document.querySelector(".required");

let caretLocation;
let weight;
let height;

calculatorInputs.forEach((input) =>
    input.addEventListener("input", (e) => {
        e.target.id == "height"
            ? (height = Number(e.target.value) / 100)
            : (weight = Number(e.target.value));

        requiredMsg.innerHTML = "";

        height < 1.2 || height > 2.4
            ? (requiredMsg.innerHTML =
                  "Your height should between 120 cm and 240 cm.")
            : weight < 40 || weight > 240
            ? (requiredMsg.innerHTML =
                  "Your weight should between 40 kg and 240 kg.")
            : (caretLocation = ((weight / height ** 2 - 18.5) * 81) / 16.5);

        caretLocation < 9
            ? (calculatorCaret.style.left = "9%")
            : caretLocation > 90
            ? (calculatorCaret.style.left = "90%")
            : (calculatorCaret.style.left = `${caretLocation}%`);
    })
);
// BMI CALCULATOR - END

// CONTACT - START
// Initialize and add the map
let map;

async function initMap() {
    // The location of İzmir
    const position = { lat: 38.4, lng: 27.074 };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // The map, centered at İzmir
    map = new Map(document.getElementById("map"), {
        zoom: 15,
        center: position,
        mapId: "DEMO_MAP_ID",
    });

    // The marker, positioned at İzmir
    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "İzmir",
    });
}

initMap();
// CONTACT - END
