const eyeButton = document.getElementById('eye-button');
const overlay = document.getElementById('overlay');
const visionBody = document.getElementById('vision-body');
const quotes = document.getElementById('quotes');
let quote = document.getElementById('quote');
let quoteParagraph = document.getElementById('quoteParagraph');
let attributionParagraph = document.getElementById('attributionParagraph');
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

overlay.addEventListener('click', hideOverlayAndQuote);

function hideOverlayAndQuote() {
  if (overlayShowing) {
    hideOverlay();
    hideQuote();
    overlayShowing = false;
  }
}

/*visionBody.addEventListener('click', hideOverlayAndQuote);

function hideOverlayAndQuote() {
  if (overlayShowing) {
    hideOverlay();
    hideQuote();
    overlayShowing = false;
  }
}
*/

function displayOverlay() {
  overlay.style.display = 'block';
}

function displayRandomQuote() {
  let randomQuoteAttributionPair = getRandomQuoteAttributionPair();
  addRandomQuoteToQuotesContainer(randomQuoteAttributionPair);
  quotes.style.display = 'block';
  quotes.style.fontSize = '36px';
}

function hideOverlay() {
  overlay.style.display = 'none';
}

function getRandomQuoteAttributionPair() {
  const quoteLibrary = {
    quoteOne: [`"If design has become the poster child of and a primary tool for problem solving, I propose that art, characterized by open-ended inquiry driven by imagination and creativity, is an essential and missing ingredient in our quest to remake our world to be a more equitable, just and sustainable place."`, `— Robert Ransick, VP of Academic Affairs at the Minneapolis College of Art and Design`],
    quoteTwo: [`"Both artists and entrepreneurs function as our society’s scouts, forerunners who are sensitive to changing conditions, on the lookout for broader perspectives and new opportunities, who report back to the rest of us about the emerging landscape ahead. Uniting artistic and entrepreneurial visions unlocks a powerful potential for responding to community needs in unexpected, creative ways."`, `— Yo-Yo Ma, Cellist`],
    quoteThree: [`"Artists possess a broad toolkit of methodologies and practices that can help potential collaborators in every sector approach problems in new ways, engage audiences and customers more deeply, and find connections and adjacencies between seemingly unrelated ideas...Artists are imagination partners. Always ready to pose the “what if” questions that blow up our old thinking and lead to radically new ideas."`, `— Steven J Tepper, Dean, Arizona State University`],
  };

  const arrayOfKeys = Object.keys(quoteLibrary);
  const randomQuoteAttributionPair = quoteLibrary[arrayOfKeys[ arrayOfKeys.length * Math.random() << 0]];
  return randomQuoteAttributionPair;
}

function addRandomQuoteToQuotesContainer(randomQuoteAttributionPair) {
  let newPQuoteText = document.createTextNode(randomQuoteAttributionPair[0]);
  let newPAttributionText = document.createTextNode(randomQuoteAttributionPair[1]);
  quoteParagraph.appendChild(newPQuoteText);
  attributionParagraph.appendChild(newPAttributionText);
}

function hideQuote() {
  quoteParagraph.remove();
  attributionParagraph.remove();
  quotes.style.display = 'none';

  let newQuoteEl = document.createElement('p');
  let newAttributionEl = document.createElement('p');
  newQuoteEl.setAttribute('id', 'quoteParagraph');
  newAttributionEl.setAttribute('id', 'attributionParagraph');
  quotes.appendChild(newQuoteEl);
  quotes.appendChild(newAttributionEl);
  quoteParagraph = document.getElementById('quoteParagraph');
  attributionParagraph = document.getElementById('attributionParagraph');
}

function rotateEyeButtonImages() {
  const imageLinks = [
    'https://i.ibb.co/5MQTX81/Eye1.png',
    'https://i.ibb.co/VLDLLh6/Eye2.png',
    'https://i.ibb.co/hdQF94W/Eye3.png',
    'https://i.ibb.co/vPvW3tK/Eye4.png',
  ];
  let eyeImage = document.getElementById('eye-image');
  let linkIndex = 0;
  eyeImage.src = imageLinks[linkIndex];
  setInterval(function() {
    if (linkIndex === 3) {
      linkIndex = 0;
    } else {
      linkIndex = linkIndex + 1;
    }
    eyeImage.src = imageLinks[linkIndex];
  }, 4000);
}
