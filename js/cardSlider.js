// Array of sample card data
var cardData = [
  { title: "Card 1", content: "Content 1" },
  { title: "Card 2", content: "Content 2" },
  { title: "Card 3", content: "Content 3" },
  { title: "Card 4", content: "Content 4" },
  { title: "Card 5", content: "Content 5" },
  { title: "Card 6", content: "Content 6" }
];

// Function to initialize card slider
function initializeSlider() {
  var cardContainer = document.getElementById("cardContainer");
  cardData.forEach(function(card) {
    var cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.innerHTML = "<h3>" + card.title + "</h3><p>" + card.content + "</p>";
    cardContainer.appendChild(cardElement);
  });
}

// Function to slide cards
function slideCards(direction) {
  var cardContainer = document.getElementById("cardContainer");
  var cards = cardContainer.children;
  var firstCard = cards[0];
  var lastCard = cards[cards.length - 1];

  if (direction === "left") {
    cardContainer.appendChild(firstCard);
  } else if (direction === "right") {
    cardContainer.insertBefore(lastCard, cardContainer.firstChild);
  }
}

// Initialize the slider
initializeSlider();