var guesses = 0;
var correctGuesses = 0;
var quoteUsed = "";
var yes = false;
var nameOfCharacterChosen = "";
var jsonContent = JSON.parse(quoteContent);
var chosenArray = [];
var gameOver = false;

Chosen = jsonContent.characters;

const checkGuess = () => {
    if (guesses === 10) {
        console.log(`Score = ${correctGuesses}/${guesses}`);
    }
}

const chooseCharacter = () => {
    const firstPage = document.querySelector(".firstPage");
//    document.getElementById("YesNo").style.display = "none";
//    document.getElementById("quoteId").style.display = "none";
    Chosen.forEach(character => {
        let image = document.createElement("img");
        image.src = `images/${character.id}.png`;
        image.alt = character.id;
    //    firstPage.appendChild(image);
        image.addEventListener("click", () => {
            nameOfCharacterChosen = character.id;
            Chosen.forEach(element => {
                if (element.id === nameOfCharacterChosen) {
                    chosenArray = element.quotes; // Puts quotes of chosen character into chosen array
                }
            });
            console.log(chosenArray);
            firstPage.style.display = "none"; // Hide the character selection div

            // Create the block that will load the quote and let the user choose yes or no
            let div = document.createElement("div");
            let divContainer = document.getElementById("container");            
            let h2 = document.createElement("h2");
            let form = document.createElement("form");
            let buttonYes = document.createElement("button");
            let buttonNo = document.createElement("button");

            buttonYes.innerHTML = "Yes";
            buttonNo.innerHTML = "No";
            div.id = "quoteId";
            divContainer.appendChild(div);
            div.appendChild(h2);
            div.appendChild(form);
            form.id = "YesNo";

            buttonYes.type = "button";
            buttonNo.type = "button";
            form.appendChild(buttonYes);
            form.appendChild(buttonNo);
        //    document.getElementById("quoteId").style.display = "block"; // Show the quote div
        //    document.getElementById("YesNo").style.display = "block";

        });
        firstPage.appendChild(image);
    });
} 



const loadQuote = () => { // load a character quote
  //  const result = await chooseCharacter();
    let x = Math.floor(Math.random() * jsonContent.characters[1].quotes.length);
    let chosenIndex = Math.floor(Math.random() * chosenArray.length);
    let quotesIndex = Math.floor(Math.random() * jsonContent.characters[1].quotes.length);
    let characterIndex = Math.floor(Math.random() * jsonContent.characters.length); // For choosing a random character from the json
    const quoteId = document.getElementById("quoteId");

    if (x > 6) { // Load a quote from the chosen character
        let chosenQuote = chosenArray[chosenIndex];
        let quote = document.querySelector("#quoteId h2");
        quote.innerHTML = `Did ${nameOfCharacterChosen} say: ${chosenQuote}`;
        quoteId.append(quote);

        quoteUsed = chosenQuote;
        // Chosen.quotes[chosenIndex].splice(chosenIndex, 1);         // no duplicates
    }
    else { // load random quote
        let quote = document.querySelector("#quoteId h2");
        quote.innerHTML = `Did ${nameOfCharacterChosen} say: ${jsonContent.characters[characterIndex].quotes[quotesIndex]}`; // Choose random quote from a random character
        quoteId.append(quote);
        quoteUsed = jsonContent.characters[characterIndex].quotes[quotesIndex];
    }
    return quoteUsed;
}


const checkQuote = () => {
    yes = false;
    Chosen.find(character => {
        if (character.id === nameOfCharacterChosen) {
            character.quotes.forEach(element => {
                if (quoteUsed === element) {
                    yes = true;
                }
            });
        }
    });
    console.log(yes);
    return yes;
}

const answerButton = () => {

    const yesButton = document.querySelector('#YesNo button:nth-child(1)');
    const noButton = document.querySelector('#YesNo button:nth-child(2)');

    yesButton.addEventListener('click', handleYesButtonClick);
    noButton.addEventListener('click', handleNoButtonClick);

}

const handleYesButtonClick = () => {
//    const quoteId = document.getElementById("quoteId");
//    const quoteInner = document.querySelector("#quoteId h2");

    if (yes) {
        correctGuesses++;
        guesses++;
        console.log(guesses);
    } else {
        guesses++;
        console.log(guesses);
    }
//    quoteInner.innerHTML = "";
//    quoteId.appendChild(quoteInner);
    loadQuote();
    console.log("Yes button clicked");

}

const handleNoButtonClick = () => {
//    const quoteId = document.getElementById("quoteId");
//    const quoteInner = document.querySelector("#quoteId h2");
    console.log(quoteInner);

    if (!yes) {
        correctGuesses++;
        guesses++;
        console.log(guesses);
    } else {
        guesses++;
        console.log(guesses);
    }
//    quoteInner.innerHTML = "";
//    quoteId.appendChild(quoteInner);
    loadQuote();
    console.log("No button clicked");
}

const gameStatus = () => {
    if (guesses === 10) {
        gameOver = true;
    }
    return gameOver;
}

const runGame = () => {
    chooseCharacter();
    document.addEventListener("DOMContentLoaded", loadQuote);
    checkQuote();
    answerButton();
    checkGuess();
}


runGame();
