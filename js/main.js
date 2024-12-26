var btn = document.getElementById("btn");
var generateText = document.getElementById("newQuote");


var quotes = {
    value: [
        `“Be yourself; everyone else is already taken.”
        ― Oscar Wilde`,
        `“So many books, so little time.”
        ― Frank Zappa`,
        `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
        ― Albert Einstein`,
        `“A room without books is like a body without a soul.”
        ― Marcus Tullius Cicero`,
        `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
        ― Dr. Seuss`,
        `“In three words I can sum up everything I've learned about life: it goes on.”
        ― Robert Frost`,
        `“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”
        ― C.S. Lewis, The Four Loves`,
        `“A friend is someone who knows all about you and still loves you.”
        ― Elbert Hubbard`
    ]
};


let lastIndex = -1; 

function displayRandomQuote() {
    let randomIndex;

    
    do {
        randomIndex = Math.floor(Math.random() * quotes.value.length);
    } while (randomIndex === lastIndex);

    
    document.getElementById("newQuote").innerHTML = quotes.value[randomIndex];

    
    lastIndex = randomIndex;
}





