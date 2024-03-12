var quotes = [
   {
    quote:"My mother always used to say: The older you get, the better you get, unless you’re a banana",
    author: "Betty White"
   },
   {
    quote:"I saw a study that said speaking in front of a crowd is considered the number one fear of the average person. Number two was death. This means to the average person, if you have to be at a funeral, you would rather be in the casket than doing the eulogy",
    author:"Jerry Seinfeld"
   },
   {
    quote: "My therapist told me the way to achieve true inner peace is to finish what I start. So far I’ve finished two bags of M&Ms and a chocolate cake. I feel better already.",
    author: "Dave Barry"
   },
   {
    quote: "Trying is the first step toward failure.",
    author: "Homer Simpson"
   },
   {
    quote: "You know you’re getting old when you stoop to tie your shoelaces and wonder what else you could do while you’re down there.",
    author: "George Burns"
   },
   
];

function displayQuote(index) {
    var quoteElement = document.getElementById("quote");
    var authorElement = document.getElementById("author");

    quoteElement.textContent = quotes[index].quote;
    authorElement.textContent = quotes[index].author;
}

var currentIndex = 0;

function nextQuote() {
    currentIndex = (currentIndex + 1) % quotes.length;
    displayQuote(currentIndex);
}

function prevQuote() {
    currentIndex = (currentIndex - 1) % quotes.length;
    displayQuote(currentIndex);
}
document.getElementById("nextQuoteBtn").addEventListener("click", nextQuote);

// Initial quote display
displayQuote(currentIndex);