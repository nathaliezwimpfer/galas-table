let currentQuoteIndex = 2;
const eyeButton = document.getElementById('eye-button');
const quotes = document.getElementById('quotes');
let quote = document.getElementById('quote');
let quoteParagraph = document.getElementById('quoteParagraph');
let attributionParagraph = document.getElementById('attributionParagraph');

rotateEyeButtonImages();
displayNextQuote();

setInterval(function () {
  displayNextQuote();
}, 5000);

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
  }, 5000);
}

function displayNextQuote() {
  const quoteLibrary = {
    quoteOne: [
      `"Artists possess a broad toolkit of methodologies and practices that can
      help potential collaborators in every sector approach problems in new
      ways, engage audiences and customers more deeply, and find connections and
      adjacencies between seemingly unrelated ideas... Artists are imagination
      partners. Always ready to pose the “what if” questions that blow up our
      old thinking and lead to radically new ideas."`,
      `— Steven J Tepper, Dean, Arizona State University`
    ],
    quoteTwo: [
      `"If design has become the poster child of and a primary tool for problem
      solving, I propose that art, characterized by open-ended inquiry
      driven by imagination and creativity, is an essential and missing
      ingredient in our quest to remake our world to be a more equitable, just
      and sustainable place."`,
      `— Robert Ransick, VP of Academic Affairs at the Minneapolis College of
      Art and Design`
    ],
    quoteThree: [
      `"Both artists and entrepreneurs function as our society’s scouts,
      forerunners who are sensitive to changing conditions, on the lookout for
      broader perspectives and new opportunities, who report back to the rest of
      us about the emerging landscape ahead. Uniting artistic and
      entrepreneurial visions unlocks a powerful potential for responding to
      community needs in unexpected, creative ways."`,
      `— Yo-Yo Ma, Cellist`
    ],
  };
  let nextQuoteAttributionPair = getNextQuoteAttributionPair(quoteLibrary);
  removePreviousQuoteFromContainer();
  addNextQuoteToQuotesContainer(nextQuoteAttributionPair);
}

/*
  here's what quoteLibary looks like:
  quoteLibrary: {
    quoteOne: [`"quote content"`, `quote attribution content`],
    quoteTwo: [`"quote content"`, `quote attribution content`],
    quoteThree: [`"quote content"`, `quote attribution content`]
  }
*/
function getNextQuoteAttributionPair(quoteLibrary) {
  // arrayOfKeys === [quoteOne, quoteTwo, quoteThree];
  let nextKey;
  const arrayOfKeys = Object.keys(quoteLibrary);

  if (currentQuoteIndex >= 2) {
    nextKey = arrayOfKeys[0];
    currentQuoteIndex = 0;
  } else {
    nextKey = arrayOfKeys[currentQuoteIndex + 1];
    currentQuoteIndex++;
  }

  return quoteLibrary[nextKey];
}

function removePreviousQuoteFromContainer() {
  quoteParagraph.innerHTML = '';
  attributionParagraph.innerHTML = '';
}

function addNextQuoteToQuotesContainer(nextQuoteAttributionPair) {
  let newPQuoteText = document.createTextNode(nextQuoteAttributionPair[0]);
  let newPAttributionText = document.createTextNode(nextQuoteAttributionPair[1]);
  quoteParagraph.appendChild(newPQuoteText);
  attributionParagraph.appendChild(newPAttributionText);
}
