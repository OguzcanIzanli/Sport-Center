// NAVBAR - START
const navbarDropdownBtn = document.querySelector(".navbarDropdownBtn"); // Navbar Dropdown Menu Button
const navbarDropdownBtnIcon = document.querySelector(".navbarDropdownBtn i"); // Dropdown Menu Button Icon
const navbarButtons = document.querySelector(".navbarBtns"); // Navbar Buttons
const header = document.querySelector("header"); // Header

// Navbar Dropdown Menu Actions
navbarDropdownBtn.addEventListener("click", () => {
    navbarButtons.classList.toggle("navbarOpen");
    const isOpen = navbarButtons.classList.contains("navbarOpen");

    navbarDropdownBtnIcon.classList = isOpen
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars";
});

// Smooth transition between sections on the page
document.querySelectorAll('a[href^="#"]').forEach((navBtn) => {
    navBtn.addEventListener("click", function (e) {
        e.preventDefault();
        let sectionId = this.getAttribute("href");

        navbarButtons.classList.remove("navbarOpen");
        navbarDropdownBtnIcon.classList = "fa-solid fa-bars";

        document.querySelector(`${sectionId}`).scrollIntoView({
            behavior: "smooth",
        });
    });
});

// Navbar Page Scroll Event
document.addEventListener("scroll", () => {
    window.scrollY > 100
        ? (header.style.backgroundColor = "#355592")
        : (header.style.backgroundColor = "");

    navbarButtons.classList.remove("navbarOpen"); // Close the navbar when scrolling
    navbarDropdownBtnIcon.classList = "fa-solid fa-bars";
});

// Close the dropdown menu when click the document except navbar
document.addEventListener("click", (e) => {
    if (e.clientY > 60) {
        navbarButtons.classList.remove("navbarOpen");
        navbarDropdownBtnIcon.classList = "fa-solid fa-bars";
    }
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
const bmiResult = document.querySelector(".bmiResult");

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
            : (caretLocation = (weight / height ** 2 - 13) * (80 / 27.5) + 9) &&
              (bmiResult.innerHTML = ` : ${(weight / height ** 2)
                  .toString()
                  .slice(0, 4)} kg/m<sup>2</sup>`);

        console.log(caretLocation);
        caretLocation < 9
            ? (calculatorCaret.style.left = "9%")
            : caretLocation > 89
            ? (calculatorCaret.style.left = "89%")
            : (calculatorCaret.style.left = `${caretLocation}%`);
    })
);
// BMI CALCULATOR - END
