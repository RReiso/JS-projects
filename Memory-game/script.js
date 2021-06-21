let cards = [
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
	{ img: 11, src: "./images/6.jpeg" },
	{ img: 12, src: "./images/6.jpeg" },
	{ img: 13, src: "./images/7.jpeg" },
	{ img: 14, src: "./images/7.jpeg" },
	{ img: 15, src: "./images/8.jpeg" },
	{ img: 16, src: "./images/8.jpeg" },
];

//Shuffle cards in the Cards array
cards = cards.sort(() => Math.random() - 0.5);

const grid = document.querySelector(".grid");
let flippedCards = []; 
let clickEnabled = true; //Cards are clickable when true

//set up game board
for (let i = 0; i < 16; i++) {
	let card = document.createElement("img");
	setInitialBackground(card);
	card.setAttribute("data-id", i);
	grid.appendChild(card);
	card.addEventListener("click", flipCard);
}

function setInitialBackground(card) {
	card.setAttribute("src", "./images/0.png");
}

function flipCard() {
	if (clickEnabled === true) {
    //If the card has been flipped, no interaction. Code is executed if the card has not been flipped
		if (!this.getAttribute("data-flipped")) {
			this.setAttribute("data-flipped", "yes");
			this.classList.toggle("flip");
			const dataID = this.getAttribute("data-id");
			this.setAttribute("src", cards[dataID].src);
			flippedCards.push(cards[dataID].src); //store the flipped card in the array
		}

    //Once two cards have been flipped, disable "clickability"
		if (flippedCards.length === 2) {
			clickEnabled = false;
			setTimeout(checkForMatch, 700);
		}
	}
}

function checkForMatch() {
	if (flippedCards[0] !== flippedCards[1]) {
		const firstCard = document.querySelector(`img[src="${flippedCards[0]}"`);
		const secondCard = document.querySelector(`img[src="${flippedCards[1]}"`);
		setInitialBackground(firstCard);
		setInitialBackground(secondCard);
		firstCard.removeAttribute("data-flipped");
		secondCard.removeAttribute("data-flipped");
		firstCard.classList.toggle("flip");
		secondCard.classList.toggle("flip");
	}
	flippedCards = [];
	clickEnabled = true;
}
