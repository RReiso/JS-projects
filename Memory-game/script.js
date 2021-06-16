const cards = [
	{ img: "initial", src: "./images/0.png" },
	{ img: 1, src: "./images/1.jpeg" },
	{ img: 2, src: "./images/1.jpeg" },
	{ img: 3, src: "./images/2.jpeg" },
	{ img: 4, src: "./images/2.jpeg" },
	{ img: 5, src: "./images/3.jpeg" },
	{ img: 6, src: "./images/3.jpeg" },
	{ img: 7, src: "./images/4.jpeg" },
	{ img: 8, src: "./images/4.jpeg" },
	{ img: 9, src: "./images/5.jpeg" },
	{ img: 10, src: "./images/5.jpeg" },
];
let flippedCards = [];

function flipCard() {
  if (clickEnabled === true){
    const dataID = this.getAttribute("data-id");
    this.setAttribute("src", cards[dataID].src);
    flippedCards.push(cards[dataID].src);
    if (flippedCards.length === 2) {
      clickEnabled = false;
      setTimeout(checkForMatch, 600);
    }
	}
}

function checkForMatch() {
	if (flippedCards[0] !== flippedCards[1]) {
		const firstCard = document.querySelector(`img[src="${flippedCards[0]}"`);
    const secondCard = document.querySelector(`img[src="${flippedCards[1]}"`);
		setInitialBackground(firstCard);
    setInitialBackground(secondCard);
	}
	flippedCards = [];
  clickEnabled = true;
}

const grid = document.querySelector(".grid");
let clickEnabled = true;

for (let i = 1; i < 17; i++) {
	let card = document.createElement("img");
	setInitialBackground(card);
	card.setAttribute("data-id", i);
	grid.appendChild(card);
	card.addEventListener("click", flipCard);
}

function setInitialBackground(card){
  card.setAttribute("src", "./images/0.png");
}