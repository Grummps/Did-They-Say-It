var guesses = 0;
var correctGuesses = 0;


const Homer = ["If he's so smart, how come he's dead?", "Operator, give me the number for 911!", "Stupidity got us into this mess, and stupidity will get us out.",
"I wish God were alive to see this.", "Fame was like a drug, but what was even more like a drug were the drugs.", "6", "7", "8", "9","10"];
const quotes = ["To be or not to be, that is the question.", "God bless.", "2", "3", "4", "5", "6", "7", "8", "9","10"];
var quoteUsed = "";
var yes = false;


const checkGuess = () => {
    if (guesses = 10) {
        // output correct guess / guesses
    }
}

const loadQuote = () => {
    let x = Math.floor(Math.random() * Homer.length);
    let homerIndex = Math.floor(Math.random() * Homer.length);
    let quotesIndex = Math.floor(Math.random() * quotes.length);
    const quoteId = document.getElementById("quoteId");
    if (x % 2 == 0) {                               // load a Homer quote
        let quote = document.createElement("h2");
        quote.innerHTML = `Did Homer Simpson say: ${Homer[homerIndex]}`;
        quoteId.append(quote);
    }
    else {                                          // load from quotes
        let quote = document.createElement("h2");
        quote.innerHTML = `Did Homer Simpson say: ${quotes[quotesIndex]}`;
        quoteId.append(quote);  
    } 
}

const checkQuote = () => { // makes "yes" the correct answer
    Homer.forEach(element => {
        if (quoteUsed == element) {
            yes = true;
        }
    });
    return yes;
}

loadQuote();