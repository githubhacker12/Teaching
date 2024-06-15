// Function to toggle dropdown menu
function setupDropdown(elementSelector, linkSelector, ulSelector) {
  const element = document.querySelector(elementSelector);
  const linkIcon = document.querySelector(linkSelector);
  const ulElement = document.querySelector(ulSelector);

  element.addEventListener("mouseover", () => {
    linkIcon.className = "bi bi-caret-up";
    ulElement.style.display = "block";
  });

  element.addEventListener("mouseout", () => {
    linkIcon.className = "bi bi-caret-down-fill";
    ulElement.style.display = "";
  });
}

// Setup dropdowns
setupDropdown(".course", ".course_link i", ".course_ul");
setupDropdown(".bootcamp", ".bootcamp_link i", ".bootcamp_ul");

// Toggle menu visibility
const barsEl = document.querySelector(".bars");
const xmarkEl = document.querySelector(".xmark");
const linksEl = document.querySelector(".links");

barsEl.addEventListener("click", () => {
  barsEl.style.display = "none";
  xmarkEl.style.display = "block";
  linksEl.style.display = "flex";
});

xmarkEl.addEventListener("click", () => {
  xmarkEl.style.display = "none";
  linksEl.style.display = "none";
  barsEl.style.display = "block";
});

// Topics(Q/A)
const syl_qElements = document.querySelectorAll(".syl_q");

syl_qElements.forEach((element, index) => {
  element.addEventListener("click", () => {
    let ele = element.className.slice(10, 11);
    let answerElement = document.querySelector(`.syl_${ele}_a`);

    let answerIElement = document.querySelector(`.syl_${ele}_q i`);
    answerElement.style.display =
      answerElement.style.display === "" ? "flex" : "";

    answerIElement.className === "fa-solid fa-plus"
      ? (answerIElement.className = "fa-solid fa-minus")
      : (answerIElement.className = "fa-solid fa-plus");
  });
});

// Function to get the current aspect ratio
function getAspectRatio() {
  return window.innerWidth / window.innerHeight;
}

let initialAspectRatio = getAspectRatio();

window.addEventListener("resize", () => {
  let newAspectRatio = getAspectRatio();
  let newWidth = window.innerWidth;

  if (newAspectRatio !== initialAspectRatio && newWidth > 900) {
    window.location.reload();
  }
});

document.querySelector(".branch").addEventListener("change", () => {
  document.querySelector(".other_input").style.display =
    document.querySelector("#branch_selector").value === "Other"
      ? "flex"
      : "none";
});

// window scrool
window.addEventListener("scroll", function () {
  var currentX = window.scrollX;
  var currentY = window.scrollY;
  console.log("Current scroll position - X: " + currentX + ", Y: " + currentY);
  if (currentY > 30) {
    document.querySelector("header").style.boxShadow =
      "0px 5px 5px rgb(186, 220, 239)";
  } else {
    document.querySelector("header").style.boxShadow = "";
  }
});

