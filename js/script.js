/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// Store in some quotes in the array.

const quotes = [
  {
    quote: "I can accept failure, everyone fails at something. But I cannot accept not trying.",
    source:"Michael Jordan",
    tags:"self-help"
  },
  {
    quote: "When everything constantly needs approval, you create a culture of nonthinkers.",
    source: "Jason Fried",
    citation: "Rework",
    tags: "culture"
  },
  {
    quote: "If you don’t know what you are doing wrong, you can never know what you are doing right.",
    source: "Matthew Syed",
    citation: "Bounce: The Myth of Talent and the Power of Practice",
    tags: "productivity"
  },
  {
    quote: "Sometimes life hits you in the head with a brick. Don’t lose faith.",
    source: "Steve Jobs",
    citation: "Stanford Commencement Speech",
    year: "2005"
  },
  {
    quote: "The most powerful conqueror on Earth is justice.",
    source: "Ertuğrul Bey"
  },
  {
    quote: "Being aware of your fear is smart. Overcoming it is the mark of a successful person.",
    source: "Seth Godin",
    tags: "self-help"
  },
  {
    quote: "Don’t you dare think you can determine my worth.",
    source: "Park Sae‑ro‑yi",
    citation: "Itaewon Class"
  },
  {
    quote: "If you have the guts to die, you should try your best to stay alive.",
    source: "Park Sae‑ro‑yi",
    citation: "Itaewon Class"
  },
  {
    quote: "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
    source: "Bill Gates"
  }
];

/***
 * `getRandomQuote` function
***/

function getRandomQuote () {
  // Get some random number cap by array length.
  const randomNumber = Math.floor(Math.random() * quotes.length);
  // Convert random number as array.
  return quotes[randomNumber];
}

/***
 * `randomColors` function
 * Generate random background colors
 * Source: https://codepen.io/DvlprXCII/pen/ygYKMj 
***/


function randomColors() {
  let colorArray = [];    

  for(let i =0; i < 3 ; i++){
    colorArray.push(Math.floor(Math.random() * (255 - 0) + 0));
  }
  // rgb -> hex
  let color = colorArray
    .map( x => x.toString(16))
    .join('');

  return `#${color}`;
}



/***
 * `printQuote` function
***/

function printQuote () {
  // Store random quote object
  const getQuote = getRandomQuote();

  let html = '';

  // Store HTML string

  html += `<p class="quote">${getQuote.quote}</p>
    <p class="source">${getQuote.source}`;

  // Boolean check on citation
  if (getQuote.citation) {
     html += `<span class="citation">${getQuote.citation}</span>`;
  } 

  // Boolean check on year
  if (getQuote.year) {
     html += `<span class="year">${getQuote.year}</span>`;
  } 

  html += `</p>`;

  // Boolean check on tag
  if (getQuote.tags) {
    html += `<div class="tag">Tag: ${getQuote.tags}</div>`
  }

  // Display Quotes
  document.getElementById('quote-box').innerHTML = html; 
  document.body.style.backgroundColor = randomColors();

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


/***
 * Hit spacebar to change quote
 * Source: https://stackoverflow.com/questions/24386354/execute-js-code-after-pressing-the-spacebar/24386518 
***/

document.body.onkeyup = function(e){
 if(e.keyCode == 32){ // Spacebar keyCode
     printQuote();
 }
}

/***
 * Auto-refreshed quotes
 * Source: https://www.w3schools.com/jsref/met_win_setinterval.asp
***/

setInterval(function(){ 
  printQuote(); 
}, 10000); // Equal to 10 seconds







