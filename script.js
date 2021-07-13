let currentQuoteIndex = 2;
const eyeButton = document.getElementById('eye-button');
const quotes = document.getElementById('quotes');
let quote = document.getElementById('quote');
let quoteParagraph = document.getElementById('quoteParagraph');
let attributionParagraph = document.getElementById('attributionParagraph');

let hamburgerBtn = document.getElementById('button');
let hamburgerNav = document.getElementById('hamburger-nav');
let overlay = document.getElementById('overlay');
let overlayShowing = true;
let button = document.getElementById('button');
let hamburgerIcon = document.getElementById('hamburger-icon');
let html = document.getElementById('html');

rotateEyeButtonImages();
displayNextQuote();
toggleNav();

setInterval(function () {
  displayNextQuote();
}, 18000);

function rotateEyeButtonImages() {
  const imageLinks = [
    'https://i.ibb.co/Gv6TdB9/newEyes1.png',
    'https://i.ibb.co/rML9ywX/newEyes2.png',
    'https://i.ibb.co/8XNjKFT/newEyes3.png',
    'https://i.ibb.co/86g3kQh/newEyes4.png',
  ];
  let eyeImage = document.getElementById('eye-image');
  let linkIndex = 0;

  if (eyeImage) {
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
  if (!quoteParagraph) {
    return;
  }
  quoteParagraph.innerHTML = '';
  attributionParagraph.innerHTML = '';
}

function addNextQuoteToQuotesContainer(nextQuoteAttributionPair) {
  if (!quoteParagraph) {
    return;
  }
  let newPQuoteText = document.createTextNode(nextQuoteAttributionPair[0]);
  let newPAttributionText = document.createTextNode(nextQuoteAttributionPair[1]);
  quoteParagraph.appendChild(newPQuoteText);
  attributionParagraph.appendChild(newPAttributionText);
}


// Toggle Hamburger Nav on Mobile View

hamburgerBtn.addEventListener ('click', toggleNav);

function toggleNav() {
  if (!overlayShowing) {
    displayOverlayAndHamburgerNav();
    overlayShowing = true;
  }
  else {
    hideOverlayandHamburgerNav();
    overlayShowing = false;
  }
}

function displayOverlayAndHamburgerNav() {
  overlay.style.display = 'block';
  html.style.overflow = 'hidden';
  hamburgerNav.style.fontSize = '1.2rem';
  hamburgerNav.style.display = 'flex';
  hamburgerIcon.src = 'https://i.ibb.co/VQ6f3DL/streamline-icon-interface-delete-1-1000x1000.png';
}

function hideOverlayandHamburgerNav() {
  overlay.style.display = 'none';
  html.style.overflow = 'visible';
  hamburgerNav.style.display = 'none';
  hamburgerIcon.src = 'https://i.ibb.co/6RHMHfH/streamline-icon-interface-setting-menu-1-1000x1000.png';
}
