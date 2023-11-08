var guesses = 0;
var correctGuesses = 0;
var quoteUsed = "";
var yes = false;
var nameOfCharacterChosen = "";
var jsonContent = JSON.parse(quoteContent);
var homerArray = jsonContent.characters[0].quotes;
var homerId = jsonContent.characters[0].id;
var mScottArray = jsonContent.characters[2].quotes;
var mScottId = jsonContent.characters[2].id;

Chosen = jsonContent.characters;

const checkGuess = () => {
    if (guesses = 10) {
        console.log(`Score = ${correctGuesses}/${guesses}`)
    }
}

const chooseCharacter = () => { // chooseCharacter function that displays images, lets the user click on an image, the character on that image 
    const div = document.querySelector(".firstPage");  // becomes the chosen character for the game
    Chosen.forEach(element => {
        let input = document.createElement("input");
        input.innerHTML = `<img src="images/${element.id}.png"/>`
        div.appendChild(input);
        console.log(element.id);
    });

    
}

const loadQuote = () => { // load a character quote
    let x = Math.floor(Math.random() * jsonContent.characters[1].quotes.length);
    let chosenIndex = Math.floor(Math.random() * Chosen[0].quotes.length);
    let quotesIndex = Math.floor(Math.random() * jsonContent.characters[1].quotes.length);
    let characterIndex = Math.floor(Math.random() * jsonContent.characters.length); // For choosing a random character from the json
    const quoteId = document.getElementById("quoteId");

    if (x > 6) { // Load a quote from the chosen character
        let quote = document.createElement("h2");
        quote.innerHTML = `Did ${nameOfCharacterChosen} say: ${Chosen[0].quotes[chosenIndex]}`; 
        quoteId.append(quote);

        quoteUsed = Chosen[0].quotes[chosenIndex];
       // Chosen.quotes[chosenIndex].splice(chosenIndex, 1);         // no duplicates
    }
    else { // load random quote
        let quote = document.createElement("h2");
        quote.innerHTML = `Did ${nameOfCharacterChosen} say: ${jsonContent.characters[characterIndex].quotes[quotesIndex]}`; // Choose random quote from a random character
        quoteId.append(quote);
        quoteUsed = jsonContent.characters[characterIndex].quotes[quotesIndex];

    }
    return quoteUsed;
}

const checkQuote = () => { 
    Chosen[0].quotes.forEach(element => {
        console.log("CheckQuote() = " + element); 
        if (quoteUsed == element) {
            yes = true;
            console.log("checkQuote works = " + quoteUsed)
        }
    });
    console.log(yes);
    return yes;
}

const runGame = () => {
    while (guesses <= 10) {
        loadQuote();
        guesses++;
    }
}


chooseCharacter();
loadQuote();
checkQuote();