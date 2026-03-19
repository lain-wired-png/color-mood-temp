const button = document.getElementById("changeBtn");
const message = document.getElementById("message");

const moods = [
  { color: "lightblue", text: "Now the mood is calm and blue." },
  { color: "lightpink", text: "Now the mood is soft and pink." },
  { color: "lightgreen", text: "Now the mood is fresh and green." },
];

let index = 0;

button.addEventListener("click", function () {
  document.body.style.backgroundColor = moods[index].color;
  message.textContent = moods[index].text;
  index = (index + 1) % moods.length;
});
