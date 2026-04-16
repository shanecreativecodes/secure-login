const user = {
  username: "shanesniper",
  password: "sniper123" 
};

let attemptsLeft = 5;

const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");

function login() {
  const inputUser = document.getElementById("username").value;
  const inputPass = document.getElementById("password").value;

  if (attemptsLeft <= 0) {
    message.textContent = "Account locked. Too many attempts.";
    message.style.color = "red";
    return;
  }

  if (inputUser === "" || inputPass === "") {
    message.textContent = "Please fill in all fields.";
    message.style.color = "orange";
    return;
  }

  if (inputUser === user.username && inputPass === user.password) {
    message.textContent = "Login successful!";
    message.style.color = "lime";

    localStorage.setItem("loggedIn", "true");

  } else {
    attemptsLeft--;

    message.textContent = "Invalid credentials.";
    message.style.color = "red";

    attemptsText.textContent = "Attempts left: " + attemptsLeft;
  }
}