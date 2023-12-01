var guesses = 0;
var correctGuesses = 0;
var quoteUsed = "";
var yes = false;
var nameOfCharacterChosen = "";
var jsonContent = JSON.parse(quoteContent);
var chosenArray = [];
var gameOver = false;

characterList = jsonContent.characters;

const createQuoteBlock = () => {
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


    // document.getElementById("quoteId").style.display = "block";
    // document.getElementById("YesNo").style.display = "block";
}

const chooseCharacter = () => { // choose character page 
    const firstPage = document.querySelector(".firstPage");
    characterList.forEach(character => {
        let image = document.createElement("img");
        image.src = `images/${character.id}.png`;
        image.alt = character.id;
        image.addEventListener("click", () => { // starts the game
            nameOfCharacterChosen = character.id;
            characterList.forEach(element => {
                if (element.id === nameOfCharacterChosen) {
                    chosenArray = element.quotes; // Puts quotes of chosen character into chosen array
                }
            });
            console.log(chosenArray);
            firstPage.style.display = "none"; // Hide the character selection div

            // Create the block that will load the quote and let the user choose yes or no
            createQuoteBlock();
            loadQuote();
            answerButton();
            checkQuote();

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

    if (x > 8) { // Load a quote from the chosen character
        let chosenQuote = chosenArray[chosenIndex];
        let quote = document.querySelector("#container #quoteId h2");
        quote.innerHTML = `Did ${nameOfCharacterChosen} say: ${chosenQuote}`;
        quoteId.append(quote);

        quoteUsed = chosenQuote;
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
    characterList.find(character => {
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
    const buttonYes = document.querySelector('#YesNo button:nth-child(1)');
    const buttonNo = document.querySelector('#YesNo button:nth-child(2)');
    buttonYes.addEventListener('click', handleYesButtonClick);
    buttonNo.addEventListener('click', handleNoButtonClick);

}

const hideButtons = () => {
    const buttonYes = document.querySelector('#YesNo button:nth-child(1)');
    const buttonNo = document.querySelector('#YesNo button:nth-child(2)');
    buttonNo.style.display = "none";
    buttonYes.style.display = "none";
}

const handleYesButtonClick = () => {

    checkQuote();
    if (yes) {
        correctGuesses++;
        guesses++;
        console.log(guesses);
    } else {
        guesses++;
        console.log(guesses);
    }

    if (shouldEndGame()) {
        hideButtons();
        let endGame = document.querySelector("#quoteId h2");
        endGame.innerHTML = `Score: ${correctGuesses}/${guesses}`;
        restartGame();
    }

    if (guesses < 10) {
        loadQuote();
    }
    console.log("Yes button clicked");

}

const handleNoButtonClick = () => {

    checkQuote();
    if (!yes) {
        correctGuesses++;
        guesses++;
        console.log(guesses);
    } else {
        guesses++;
        console.log(guesses);
    }

    if (shouldEndGame()) {
        hideButtons();
        let endGame = document.querySelector("#quoteId h2");
        endGame.innerHTML = `Score: ${correctGuesses}/${guesses}`;
        restartGame();
    }

    if (guesses < 10) {
        loadQuote();
    }

    console.log("No button clicked");
}

const shouldEndGame = () => {
    let trueOrFalse = false;
    if (guesses === 10) {
        trueOrFalse = true;
    }
    return trueOrFalse;
}

const handleRestartClick = () => {
    location.reload();
}

const restartGame = () => {
    const buttonRes = document.createElement("button");
    const form = document.querySelector("form");

    buttonRes.type = "button";
    buttonRes.innerHTML = "Restart Game";

    form.appendChild(buttonRes);

    const restartButton = document.querySelector("#YesNo button:last-child");
    restartButton.addEventListener("click", handleRestartClick);
}

const runGame = () => {
    chooseCharacter();
}

runGame();
