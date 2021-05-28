const eyeButton = document.getElementById('eye-button');
const overlay = document.getElementById('overlay');
const quotes = document.getElementById('quotes');
let quote = document.getElementById('quote');
let overlayShowing = false; // by default, this is false

rotateEyeButtonImages();

eyeButton.addEventListener('click', toggleQuotes);

function toggleQuotes() {
  if (!overlayShowing) {
    displayOverlay();
    displayRandomQuote();
    overlayShowing = true;
  } else {
    hideOverlay();
    hideQuote();
    overlayShowing = false;
  }
}

function displayOverlay() {
  overlay.style.display = 'block';
}

function displayRandomQuote() {
  let randomQuote = getRandomQuote();
  addRandomQuoteToQuotesContainer(randomQuote);
  quotes.style.display = 'block';
}

function hideOverlay() {
  overlay.style.display = 'none';
}

function getRandomQuote() {
  let randomQuote = '';
  const listOfQuotes = [
    'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    'The way to get started is to quit talking and begin doing.',
    `Your time is limited, so don't waste it living someone else's life.`,
    'If life were predictable it would cease to be life, and be without flavor.',
  ];

  let randomIndex = Math.floor(Math.random() * listOfQuotes.length);
  randomQuote = listOfQuotes[randomIndex];
  return randomQuote;
}

function addRandomQuoteToQuotesContainer(randomQuote) {
  let newPText = document.createTextNode(randomQuote);
  quote.appendChild(newPText);
}

function hideQuote() {
  quote.remove();
  quotes.style.display = 'none';

  let newQuoteEl = document.createElement('p');
  newQuoteEl.setAttribute('id', 'quote');
  quotes.appendChild(newQuoteEl);
  quote = document.getElementById('quote');
}

function rotateEyeButtonImages() {
  setInterval(function() {
    console.log('you rotated the eyes!'); // TODO THIS COMMIT: remove this
  }, 5000);
}
