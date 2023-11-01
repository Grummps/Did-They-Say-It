var guesses = 0;
var correctGuesses = 0;
var quoteUsed = "";
var yes = false;
var temp = [];
var nameOfCharacterChosen = "";



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

var Quotes = [
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
    "Sometimes I’ll start a sentence, and I don’t even know where it’s going. I just hope I find it along the way.", 
    "Well, well, well how the turntables.", 
    "You all took a life here today. You did. The life of the party.", 
    "Wikipedia is the best thing ever. Anyone in the world can write anything they want about any subject. So you know you are getting the best possible information.", 
    "I am running away from my responsibilities. And it feels good.", 
    "I love inside jokes. I’d love to be a part of one someday.", 
    "I’m not superstitious but I am a little stitious.", 
    "They’re trying to make me an escape goat.", 
    "I don’t hate it. I just don’t like it at all and it’s terrible.", 
    "Mo’ money, mo’ problems."
];

var quoteArrays = [Homer, Quotes, mScott];
var characterArrays = [Homer, mScott];


const checkGuess = () => {
    if (guesses = 10) {
        // output correct guess / guesses
    }
}

const chooseCharacter = () => {
    const div = document.getElementsByClassName("firstPage");
    characterArrays.forEach(element => {
        let img = document.createElement("p");
        img.innerHTML = `<img src="${element}.png"`
    });

}

const loadQuote = () => {
    let x = Math.floor(Math.random() * Homer.length);
    let chosenIndex = Math.floor(Math.random() * Chosen.length);
    let quotesIndex = Math.floor(Math.random() * quotes.length);
    const quoteId = document.getElementById("quoteId");

        if (x % 2 == 0) {                               // load a character quote
            let quote = document.createElement("h2");
            quote.innerHTML = `Did ${nameOfCharacterChosen} say: ${Chosen[chosenIndex]}`; // could replace "Homer Simpson" with ${nameOfCharacterChosen}
            quoteId.append(quote);
            
            quoteUsed = Chosen[chosenIndex];

            console.log(Chosen[chosenIndex]);
            console.log(temp);
            Chosen.splice(chosenIndex, 1);         // no duplicates
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
    Homer.forEach(element => { // fix this
        if (quoteUsed == element) {
            yes = true;
        }
    });
    return yes;
}


loadQuote();