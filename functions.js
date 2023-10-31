var guesses = 0;
var correctGuesses = 0;
var quoteUsed = "";
var yes = false;
var temp = [];

var Homer = [
    "If he's so smart, how come he's dead?", 
    "Operator, give me the number for 911!", 
    "Stupidity got us into this mess, and stupidity will get us out.",
    "I wish God were alive to see this.", 
    "Fame was like a drug, but what was even more like a drug were the drugs.", 
    "You’ll have to speak up. I’m wearing a towel.",
    "I was working on a flat tax proposal and I accidentally proved there’s no god.", 
    "Marriage is like a coffin and each kid is another nail.", 
    "I’m in no condition to drive…wait! I shouldn’t listen to myself, I’m drunk!",
    "I’m a white male, age 18 to 49. Everyone listens to me, no matter how dumb my suggestions are."
];

var quotes = [
    "0", 
    "1", 
    "2", 
    "3", 
    "4", 
    "5", 
    "6", 
    "7", 
    "8", 
    "9"
];

var mScott = [
    "0", 
    "1", 
    "2", 
    "3", 
    "4", 
    "5", 
    "6", 
    "7", 
    "8", 
    "9"
];

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
            quote.innerHTML = `Did Homer Simpson say: ${Homer[homerIndex]}`; // could replace "Homer Simpson" with ${nameOfCharacterChosen}
            quoteId.append(quote);
            
            quoteUsed = Homer[homerIndex];

            console.log(Homer[homerIndex]);
            console.log(temp);
            Homer.splice(homerIndex, 1);         // no duplicates
            console.log(Homer);
        }
        else {                                          // load from quotes
            let quote = document.createElement("h2");
            quote.innerHTML = `Did Homer Simpson say: ${quotes[quotesIndex]}`;
            quoteId.append(quote);  
            
            quoteUsed = quotes[quotesIndex]
            
            quotes.splice(quotesIndex, 1);
        }
        return quoteUsed;
            
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