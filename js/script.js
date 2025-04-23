const btn = document.querySelector("button");

btn.addEventListener("click", createCard);
function createCard() {
  const nameInput = document.querySelector("#name");
  const professionInput = document.querySelector("#profession");
  const bioInput = document.querySelector("#bio");

  const name = nameInput.value.trim();
  const profession = professionInput.value.trim();
  const bio = bioInput.value.trim();

  if (!name || !profession || !bio) {
    console.log("empty");
    return;
  }

  const card = document.createElement("div");
  card.className = "card";

  const circle = document.createElement("div");
  circle.className = "circle";
  circle.textContent = name[0].toUpperCase();

  const nameEl = document.createElement("div");
  nameEl.textContent = name;

  const professionEl = document.createElement("div");
  professionEl.textContent = profession;

  const bioEl = document.createElement("div");
  bioEl.textContent = bio;

  card.appendChild(circle);
  card.appendChild(nameEl);
  card.appendChild(professionEl);
  card.appendChild(bioEl);

  document.querySelector("#cardContainer").appendChild(card);

  nameInput.value = "";
  professionInput.value = "";
  bioInput.value = "";
}



const input = document.querySelector("#message");
const button = document.querySelector("#send");
const chat = document.querySelector("#chat");

const botReplies = [
  "Salom",
  "bu nima deganing",
  "Voaleykum",
  "Yo botmasmanmi?",
  "Men botman",
  "Yaxshi",
  "Bo'lishi mumkin",
];

button.addEventListener("click", function () {
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  const reply = botReplies[Math.floor(Math.random() * botReplies.length)];
  setTimeout(() => addMessage(reply, "bot"), 500);
});

function addMessage(text, type) {
  const msg = document.createElement("div");
  msg.className = `msg ${type}`;

  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;

  const time = `${hours}:${minutes}`;

  const timeSpan = document.createElement("span");
  timeSpan.className = "time";
  timeSpan.textContent = time;

  msg.textContent = text;
  msg.appendChild(timeSpan);

  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}


