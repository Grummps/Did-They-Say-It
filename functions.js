document.addEventListener("DOMContentLoaded", () => {
    var guesses = 0;
    var correctGuesses = 0;
    var quoteUsed = "";
    var yes = false;
    var nameOfCharacterChosen = "";
    var chosenArray = [];
    var jsonContent;
    var characterList;
    var clickedYes = false;
    var clickedNo = false;
    const divShow = document.querySelector("#storedQuotes");

    // function to make a synchronous AJAX request to get quotes
    function getQuotes() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'quotes.php', false);  // false makes the request synchronous
        xhr.send();

        if (xhr.status === 200) {
            const jsonData = JSON.parse(xhr.responseText);
            return jsonData.characters;
        } else {
            throw new Error(`Error fetching quotes. Status: ${xhr.status}`);
        }
    }

    jsonContent = getQuotes();
    characterList = jsonContent;

    // create a block that the quote will load into
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

        chooseCharacter();

    }

    // choose character page 
    const chooseCharacter = () => {
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
                firstPage.style.display = "none"; // Hide the character selection div

                // Create the block that will load the quote and let the user choose yes or no
                createQuoteBlock();
                loadQuote();
                answerButton();
            });
            firstPage.appendChild(image);
        });
    }


    // load a character quote
    const loadQuote = () => {
        let x = Math.floor(Math.random() * 10);
        let chosenIndex = Math.floor(Math.random() * chosenArray.length);
        let characterIndex = Math.floor(Math.random() * jsonContent.length); // For choosing a random character from the json
        let quotesIndex = Math.floor(Math.random() * jsonContent[characterIndex].quotes.length);

        const quoteId = document.getElementById("quoteId");

        if (x > 8) { // Load a quote from the chosen character
            let chosenQuote = chosenArray[chosenIndex];
            let quote = document.querySelector("#container #quoteId h2");
            quote.innerHTML = `Did <h2 id="charName"> ${nameOfCharacterChosen} </h2> say: "${chosenQuote}"`;
            quoteId.append(quote);
            quoteUsed = chosenQuote;

            // check if quote matches with the character chosen
            checkQuote();
            // remove duplicate
            chosenArray.splice(chosenIndex, 1);

        } else { // load random quote
            let quote = document.querySelector("#quoteId h2");
            quote.innerHTML = `Did <h2 id="charName"> ${nameOfCharacterChosen} </h2> say: "${jsonContent[characterIndex].quotes[quotesIndex]}"`; // Choose random quote from a random character
            quoteId.append(quote);
            quoteUsed = jsonContent[characterIndex].quotes[quotesIndex];

            // check if quote matches with the character chosen
            checkQuote();
            // remove used quote so no duplicates arise
            jsonContent[characterIndex].quotes.splice(quotesIndex, 1);
        }
        return quoteUsed;
    }

    // Quote functions
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // stores the quotes with correct answers
    const storeQuotes = () => {
        divShow.style.display = "none";

        if (yes) {
            let h2 = document.createElement("h2");
            h2.innerHTML = `${nameOfCharacterChosen} said "${quoteUsed}"`;
            divShow.append(h2);
        } else {
            let h2 = document.createElement("h2");
            h2.innerHTML = `${nameOfCharacterChosen} did not say "${quoteUsed}"`;
            divShow.append(h2);
        }

    }

    // shows the quotes
    const showQuotes = () => {
        divShow.style.display = "block";
    }

    // will check if the quote loaded matches the chosen character: false for no, true for yes
    const checkQuote = () => {
        yes = false;
        characterList.find(character => {
            if (character.id === nameOfCharacterChosen) { // finds the character in array that matches nameOfCharacterChosen
                character.quotes.forEach(element => { // enters quotes array for that character
                    if (quoteUsed === element) {      // checks if the quoteUsed from loadQuote matches a quote from the quotes array 
                        yes = true;
                    }
                });
            }
        });
        return yes;
    }

    // Button functions
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // function that handles the yes and no buttons
    const answerButton = () => {
        const buttonYes = document.querySelector('#YesNo button:nth-child(1)');
        const buttonNo = document.querySelector('#YesNo button:nth-child(2)');
        buttonYes.addEventListener('click', handleYesButtonClick);
        buttonNo.addEventListener('click', handleNoButtonClick);
    }

    // function that hides the yes or no buttons at the end of the game
    const hideButtons = () => {
        const buttonYes = document.querySelector('#YesNo button:nth-child(1)');
        const buttonNo = document.querySelector('#YesNo button:nth-child(2)');
        buttonNo.style.display = "none";
        buttonYes.style.display = "none";
    }

    // yes button logic
    const handleYesButtonClick = () => {
        clickedYes = false;
        clickedNo = false;
        storeQuotes();
        if (yes) {
            correctGuesses++;
            guesses++;
        } else {
            guesses++;
        }

        if (shouldEndGame()) {
            hideButtons();
            let endGame = document.querySelector("#quoteId h2");
            endGame.innerHTML = `Score: ${correctGuesses}/${guesses}`;
            showQuotes();
            restartGame();
        }
        clickedYes = true;
        storeAnswers();

        if (guesses < 10) {
            loadQuote();
        }

    }

    // no button logic
    const handleNoButtonClick = () => {
        clickedYes = false;
        clickedNo = false;
        storeQuotes();
        if (!yes) {
            correctGuesses++;
            guesses++;
        } else {
            guesses++;
        }

        if (shouldEndGame()) {
            hideButtons();
            let endGame = document.querySelector("#quoteId h2");
            endGame.innerHTML = `Score: ${correctGuesses}/${guesses}`;
            showQuotes();
            restartGame();
        }
        clickedNo = true;
        storeAnswers();

        if (guesses < 10) {
            loadQuote();
        }

    }

    // stores the user's answers for each question
    const storeAnswers = () => {
        let answerText = '';
        let answerClass = '';

        if (clickedYes) {
            answerText = 'Yes';
            if (yes) {
                answerClass = 'correct-answer'
            } else {
                answerClass = 'incorrect-answer'
            }
        }

        if (clickedNo) {
            answerText = 'No';
            if (yes) {
                answerClass = 'incorrect-answer'
            } else {
                answerClass = 'correct-answer'
            }
        }

        let p = document.createElement("p");
        p.innerHTML = `You answered: <span class="${answerClass}">${answerText}</span>`;
        divShow.append(p);
    }


    //  if guesses equal 10, the game should end, game ends if the function returns true
    const shouldEndGame = () => {
        let trueOrFalse = false;
        if (guesses === 10) {
            trueOrFalse = true;
        }
        return trueOrFalse;
    }

    // restart button event handler
    const handleRestartClick = () => {
        location.reload();
    }

    // creates a button that lets the user restart the game
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

});