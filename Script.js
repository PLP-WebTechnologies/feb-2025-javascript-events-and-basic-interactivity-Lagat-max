// Button click: change text
const magicBtn = document.getElementById("magicBtn");
magicBtn.addEventListener("click", () => {
  magicBtn.textContent = "You clicked me!";
  magicBtn.style.backgroundColor = "green";
});

// Keypress detection
document.addEventListener("keydown", (e) => {
  document.getElementById("keyOutput").textContent = `You pressed: ${e.key}`;
});

// Secret double-click
const secretBox = document.getElementById("secretBox");
secretBox.addEventListener("dblclick", () => {
  alert("🎉 You discovered the secret!");
});

// Accordion toggle
const accBtn = document.querySelector(".accordion-btn");
const accContent = document.querySelector(".accordion-content");
accBtn.addEventListener("click", () => {
  accContent.style.display = accContent.style.display === "block" ? "none" : "block";
});

// Form validation
const form = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email.includes("@") || password.length < 8) {
    formMessage.textContent = "Invalid email or password too short (min 8 characters)";
    formMessage.style.color = "yellow";
  } else {
    formMessage.textContent = "Form submitted successfully!";
    formMessage.style.color = "lightgreen";
  }
});
