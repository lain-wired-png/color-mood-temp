const button = document.getElementById("changeBtn");
const message = document.getElementById("message");

function getRandomColor() {
  const colors = ["red", "blue", "green", "purple", "orange"];
  return colors[Math.floor(Math.random() * colors.length)];
}

button.addEventListener("click", function () {
  const color = getRandomColor();
  document.body.style.backgroundColor = color;
  message.textContent = "Mood changed to " + color;
});
