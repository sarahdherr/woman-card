/**
 * @title: Random Quote Generator
 * @objective: Get a random quote whenever button is clicked
 */

var quoteArray = [
    {
        content: "The Mother of WiFi",
        author: "Hedy Lamarr",
              image:"https://pbs.twimg.com/media/DCir6qzXUAIsiF-.jpg"

    },
    {
        content: "Invented the Compiler",
        author: "Grace Hopper",
 image:"http://www.folioart.co.uk/images/uploads/Kiki-Ljung-Folio-Illustration-Grace-Hopper-S.jpg"

    },


    {
        content: "Coded us to the moon.",
        author: "Margaret Hamilton",
        image:"https://pbs.twimg.com/media/DCiqVNlWsAAlN0L.jpg"
    }
];

//grab html elements
var button = document.getElementById('quote-button'),
    quote = document.getElementById('quote'),
    author = document.getElementById('quote-author'),
    tweet = document.getElementById('tweet'),
    image = document.getElementById('image'),
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
    author.innerHTML = quoteArray[random].author;
   //get image
    image.innerHTML = quoteArray[random].image;

    //Tweet that new generated quote
    tweetQuote();
}

//Dynamically Generate Content + Button
function tweetQuote (){
    var quoteShort = quote.innerHTML,
        quoteImage = image.innerHTML,
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
