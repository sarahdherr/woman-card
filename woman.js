/**
 * @title: Random Quote Generator
 * @objective: Get a random quote whenever button is clicked
 */

var quoteArray = [
    {
        content: "Graphic design is building systems",
        author: "Michael Stinson"
    },
    {
        content: "I rarely agree with what clients ask me to do.",
        author: "Ross Lovegrove"
    },
    {
        content: "I think most programmers spend the first 5 years of their career mastering complexity, and the rest of their lives learning simplicity.",
        author: "Buzz Andersen"
    },
    {
        content: "Make it simple. Make it memorable. Make it inviting to look at. Make it fun to read.",
        author: "Leo Burnett"
    },
    {
        content: "What makes great design great is not a trendy technique, but the logic and conceptual aspect that were figured out in the designer's mind &ndash; or on more likely, on paper &ndash; before a mouse cursor ever opened Photoshop.",
        author: "Kyle Meyer"
    },
    {
        content: "Designers tend to whisper, ad agencies tend to shout.",
        author: " David Stuart"
    },
    {
        content: "Design is the method of putting form and content together. Design, just as art, has multiple definitions; there is no single definition. Design can be art. Design can be aesthetics. Design is so simple, that's why it is so complicated.",
        author: "Paul Rand"
    },
    {
        content: "Tell it like it is, in a way they want to hear it.",
        author: "Wihan Meerholz"
    },
    {
        content: "The best way to find any and all errors is to publish your work.",
        author: "Dan Vore"
    },
    {
        content: "Creativity is piercing the mundane to find the marvelous.",
        author: "Bill Moyers"
    },
    {
        content: "I warn you against believing that advertising is a science.",
        author: "Bill Bernbach"
    }
];

//grab html elements
var button = document.getElementById('quote-button'),
    quote = document.getElementById('quote'),
    author = document.getElementById('quote-author'),
    tweet = document.getElementById('tweet'),
    random;

//Generate a Random Quote
window.onload = randomQuote;
button.addEventListener('click', randomQuote);

//run the function so there are no double buttons happening
tweetQuote();

//random quote function
function randomQuote (){
    //get a random number to pick a random quote object
    random = Math.floor(Math.random() * quoteArray.length);
    //get that random quote's content
    quote.innerHTML = quoteArray[random].content;
    //get that random quote's author
    author.innerHTML = '&mdash; ' + quoteArray[random].author;

    //Tweet that new generated quote
    tweetQuote();
}

//Dynamically Generate Content + Button
function tweetQuote (){
    var quoteShort = quote.innerHTML,
        quoteShortAuthor = author.innerHTML.substr(2).trim(),
        msg ='';

    //are there two tweet buttons? also from http://jsfiddle.net/LEBz8/1/
    var elem = document.getElementById('twitterbutton');
    if (elem !== null) {
        elem.parentNode.removeChild(elem);
    }

    //cut the message to fit the 140 length + leave some extra
    if(quoteShort.length + quoteShortAuthor.length <= 90){
        msg = '"' +quoteShort + '" by ' + quoteShortAuthor;
    }else {
        msg = '"'+ quoteShort.substr(0, 65) + '[...]" by ' + quoteShortAuthor;
    }

    //select the button using its class reference https://bit.ly/221t0Hw
    var tweetDiv = document.querySelector('.twitter-share-button');

    //make a new twitter button to dynamically generate stuff http://jsfiddle.net/LEBz8/1/
    var link = document.createElement('a');

    //set attributes for new button
    link.setAttribute('href', 'https://twitter.com/share');
    link.setAttribute('class', 'twitter-share-button');
    link.setAttribute('id', 'tweet');
    link.setAttribute('data-text', msg);
    link.setAttribute('data-via', 'littleblacksmth');
    link.setAttribute('data-size', 'large');

    //replace the button for this one
    tweetDiv.parentNode.replaceChild(link, tweetDiv);

    //load twitter -- important
    twttr.widgets.load();
}

! function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + '://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, 'script', 'twitter-wjs');
