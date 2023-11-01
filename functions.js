var guesses = 0;
var correctGuesses = 0;
var quoteUsed = "";
var yes = false;
var temp = [];
var nameOfCharacterChosen = "";
var jsonContent = JSON.parse(quoteContent);

var homerArray = jsonContent[0].homerQuotes.quotes;
var homerId = jsonContent[0].homerQuotes.id;
var mScottArray = jsonContent[2].mScottQuotes.quotes;
var mScottId = jsonContent[2].mScottQuotes.id;

Chosen = [homerArray, mScottArray];

const checkGuess = () => {
    if (guesses = 10) {
        // output correct guess / guesses
    }
}



const chooseCharacter = () => {
    const div = document.getElementsByClassName("firstPage");
    Chosen.forEach(element => {
            let img = document.createElement("p");
            img.innerHTML = `<img src="${element.id}.png"`
            console.log(element.id); 
    });

}

const loadQuote = () => {
    let x = Math.floor(Math.random() * jsonContent[1].randomQuotes.quotes.length);
    let chosenIndex = Math.floor(Math.random() * Chosen[0].length);
    let quotesIndex = Math.floor(Math.random() * jsonContent[1].randomQuotes.quotes.length);
    const quoteId = document.getElementById("quoteId");

        if (x % 2 == 0) {                               // load a character quote

            let quote = document.createElement("h2");
            quote.innerHTML = `Did ${nameOfCharacterChosen} say: ${Chosen[chosenIndex]}`; // could replace "Homer Simpson" with ${nameOfCharacterChosen}
            quoteId.append(quote);
            
            quoteUsed = Chosen[chosenIndex];

            console.log(Chosen[chosenIndex]);
            console.log(temp);
            Chosen.splice(chosenIndex, 1);         // no duplicates

        }
        else {                                          // load from quotes
            let quote = document.createElement("h2");
            quote.innerHTML = `Did Homer Simpson say: ${jsonContent[1].randomQuotes.quotes.length[quotesIndex]}`;
            quoteId.append(quote);  
            
            quoteUsed = jsonContent[1].randomQuotes.quotes.length[quotesIndex]
            
            
        }
        return quoteUsed;
            
}

const checkQuote = () => { // makes "yes" the correct answer
    Homer.forEach(element => { // fix this
        if (quoteUsed == element) {
            yes = true;
        }
    });
    return yes;
}

chooseCharacter();
loadQuote();