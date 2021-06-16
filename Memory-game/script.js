  const cards = [
    {id:1,
    img: "./images/1.png"},
    {id:2,
    img: "./images/2.png"}
  ]

function flipCard (){
	const dataID = this.getAttribute("data-id");
	this.setAttribute("src", "./images/2.png");
};

 const grid = document.querySelector(".grid") ;

 for (let i =1; i<17; i++){
   let card = document.createElement("img");
   card.setAttribute("src", "./images/1.png");
   card.setAttribute("data-id",i);
   grid.appendChild(card);
   card.addEventListener("click", flipCard);
 }

 

 




 
 
 