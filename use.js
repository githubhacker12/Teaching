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

document.querySelector(".branch").addEventListener("change", () => {
  document.querySelector(".other_input").style.display =
    document.querySelector("#branch_selector").value === "Other"
      ? "flex"
      : "none";
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
