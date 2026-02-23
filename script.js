const alphabets = [
  { letter: "A", name: "Apple", image: "apple.jpg" },
  { letter: "B", name: "Ball", image: "ball.jpg" },
  { letter: "C", name: "Cat", image: "cat.jpg" },
  { letter: "D", name: "Dog", image: "dog.jpg" },
  { letter: "E", name: "Elephant", image: "elephant.jpg" },
  { letter: "F", name: "Fish", image: "fish.jpg" },
  { letter: "G", name: "Grapes", image: "grapes.jpg" },
  { letter: "H", name: "Horse", image: "horse.jpg" },
  { letter: "I", name: "Ice Cream", image: "icecream.jpg" },
  { letter: "J", name: "Joker", image: "joker.jpg" },
  { letter: "K", name: "Kite", image: "kite.jpg" },
  { letter: "L", name: "Lion", image: "lion.jpg" },
  { letter: "M", name: "Mango", image: "mango.jpg" },
  { letter: "N", name: "Nest", image: "nest.jpg" },
  { letter: "O", name: "Owl", image: "owl.jpg" },
  { letter: "P", name: "Parrot", image: "parrot.jpg" },
  { letter: "Q", name: "Queen", image: "queen.jpg" },
  { letter: "R", name: "Rabbit", image: "rabbit.jpg" },
  { letter: "S", name: "Sun", image: "sun.jpg" },
  { letter: "T", name: "Tiger", image: "tiger.jpg" },
  { letter: "U", name: "Umbrella", image: "umbrella.jpg" },
  { letter: "V", name: "Violin", image: "violin.jpg" },
  { letter: "W", name: "Whale", image: "whale.jpg" },
  { letter: "X", name: "Xylophone", image: "xylophone.jpg" },
  { letter: "Y", name: "Yacht", image: "yacht.jpg" },
  { letter: "Z", name: "Zebra", image: "zebra.jpg" }
];

let lives = 3;
let currentAlphabet;

const alphabetEl = document.getElementById("alphabet");
const alphabetNameEl = document.getElementById("alphabetName");
const alphabetImageEl = document.getElementById("alphabetImage");
const buttonsEl = document.getElementById("buttons");
const lifeCountEl = document.getElementById("lifeCount");
const gameOverEl = document.getElementById("gameOver");

function generateButtons() {
  buttonsEl.innerHTML = "";
  alphabets.forEach(a => {
    const btn = document.createElement("button");
    btn.textContent = a.letter;
    btn.onclick = () => checkAnswer(a.letter);
    buttonsEl.appendChild(btn);
  });
}

function loadAlphabet() {
  currentAlphabet = alphabets[Math.floor(Math.random() * alphabets.length)];
  alphabetEl.textContent = currentAlphabet.letter;
  alphabetNameEl.textContent = `${currentAlphabet.letter} for ${currentAlphabet.name}`;
  alphabetImageEl.src = `Images/${currentAlphabet.image}`; // folder name matches the HTML
}


function checkAnswer(letter) {
  if (letter === currentAlphabet.letter) {
    loadAlphabet();
  } else {
    lives--;
    lifeCountEl.textContent = lives;
    if (lives === 0) {
      gameOverEl.classList.remove("hidden");
    }
  }
}

function restartGame() {
  lives = 3;
  lifeCountEl.textContent = lives;
  gameOverEl.classList.add("hidden");
  loadAlphabet();
}

generateButtons();
loadAlphabet();
