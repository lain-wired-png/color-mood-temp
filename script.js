const button = document.getElementById("changeBtn");
const message = document.getElementById("message");

button.addEventListener("click", function () {
  document.body.style.backgroundColor = "lightblue";
  message.textContent = "Now the mood is calm and blue.";
});
