const body = document.querySelector("body");
const quoteText = document.querySelector("#quote");
const authorName = document.querySelector("#author");
const newQuoteBtn = document.querySelector(".new-quote-btn");
const copyQuoteBtn = document.querySelector("#copy-quote");
const twterShareBtn = document.querySelector(".share-btn");
const exportBtn = document.querySelector("#download"); 

let currentImage = "";
let author = "";
let quote = "";

const imageUrls = [
  "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
  "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg",
  "https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg",
  "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg",
  "https://images.pexels.com/photos/34950/pexels-photo.jpg",
  "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg",
  "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
  "https://images.pexels.com/photos/129105/pexels-photo-129105.jpeg",
  "https://images.pexels.com/photos/127080/pexels-photo-127080.jpeg",
  "https://images.pexels.com/photos/1410225/pexels-photo-1410225.jpeg",
  "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
  "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
  "https://images.pexels.com/photos/220182/pexels-photo-220182.jpeg",
  "https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg",
  "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg",
  "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg",
  "https://images.pexels.com/photos/733475/pexels-photo-733475.jpeg",
  "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
  "https://images.pexels.com/photos/104827/pexels-photo-104827.jpeg",
  "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg",
  "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg",
  "https://images.pexels.com/photos/164455/pexels-photo-164455.jpeg",
  "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg",
  "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg",
  "https://images.pexels.com/photos/461137/pexels-photo-461137.jpeg",
  "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg",
  "https://images.pexels.com/photos/226290/pexels-photo-226290.jpeg",
  "https://images.pexels.com/photos/210415/pexels-photo-210415.jpeg",
  "https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg",
  "https://images.pexels.com/photos/301401/pexels-photo-301401.jpeg",
  "https://images.pexels.com/photos/403571/pexels-photo-403571.jpeg",
  "https://images.pexels.com/photos/104827/pexels-photo-104827.jpeg",
  "https://images.pexels.com/photos/574267/pexels-photo-574267.jpeg",
  "https://images.pexels.com/photos/358574/pexels-photo-358574.jpeg",
  "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg",
  "https://images.pexels.com/photos/708146/pexels-photo-708146.jpeg",
  "https://images.pexels.com/photos/713505/pexels-photo-713505.jpeg",
  "https://images.pexels.com/photos/356286/pexels-photo-356286.jpeg",
  "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg",
  "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg",
  "https://images.pexels.com/photos/144236/pexels-photo-144236.jpeg",
  "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg",
  "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg",
  "https://images.pexels.com/photos/45176/pexels-photo-45176.jpeg",
  "https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg",
  "https://images.pexels.com/photos/130097/pexels-photo-130097.jpeg",
  "https://images.pexels.com/photos/62640/pexels-photo-62640.jpeg",
  "https://images.pexels.com/photos/14107/pexels-photo-14107.jpeg",
  "https://images.pexels.com/photos/15239/pexels-photo-15239.jpeg",
  "https://images.pexels.com/photos/156093/pexels-photo-156093.jpeg",
  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg",
  "https://images.pexels.com/photos/36087/pexels-photo-36087.jpeg",
  "https://images.pexels.com/photos/163244/pexels-photo-163244.jpeg",
  "https://images.pexels.com/photos/2318555/pexels-photo-2318555.jpeg"
];

const url = "https://api.freeapi.app/api/v1/public/quotes/quote/random";

function loadQuote() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
        quote = data.data.content;
        quoteText.innerText = quote;
        author= data.data.author;
        authorName.innerText = `--${author}`;
    })
    .catch((error) => {
      console.error("Error fetching quote:", error);
    });
}

function changeBg() {
  let imageNumber = Math.floor(Math.random() * imageUrls.length);
  let imageUrl = imageUrls[imageNumber];
  currentImage = imageUrl;
  console.log(currentImage);
  const img = new Image();
  img.src = imageUrl;
  img.onload = function () {
    body.style.backgroundImage = `url(${imageUrl})`;
  };
}

function copyToClipboard() {
  if (!quoteText || !authorName) {
    return;
  }

  const textToCopy = `${quoteText.textContent}  ${authorName.textContent}`;

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      console.log("Copied to clipboard:", textToCopy);

      const copyButton = document.querySelector("#copy-quote");
      if (copyButton) {
        copyButton.innerHTML = `<i class="fas fa-check"></i>`;


        setTimeout(() => {
          copyButton.innerHTML = `<i class="fas fa-copy"></i>`; 
        }, 1500);
      }
    })
    .catch((err) => {
      console.error("Error copying text:", err);
    });
}

function shareOnX() {
  if (!quoteText || !authorName){
     return;
  }

  const textToShare = `${quoteText.textContent}  ${authorName.textContent}`;
  const encodedText = encodeURIComponent(textToShare);
  const twitterUrl = `https://x.com/compose/post?text=${encodedText}`;
  window.open(twitterUrl, "_blank");
}

function downloadImage() {
  if (!currentImage) {
    console.log("NO image found");
    return;
  }
  const imageName = currentImage.split("/").pop();
  const downloadLink = document.createElement("a");
  downloadLink.href = currentImage;
  downloadLink.download = imageName;
  downloadLink.click();
}


let isCooldown = false;

function handleNewQuote() {
  if (isCooldown){
     return;
  }

  isCooldown = true;
  newQuoteBtn.disabled = true;
  let timeLeft = 4;
  newQuoteBtn.innerText = `Wait ${timeLeft}s`;

  const countdown = setInterval(() => {
    timeLeft--;
    newQuoteBtn.innerText = `Wait ${timeLeft}s`;

    if (timeLeft === 0) {
      clearInterval(countdown);
      newQuoteBtn.innerText = "Get New Quote";
      newQuoteBtn.disabled = false;
      isCooldown = false;
    }
  }, 1000);

  changeBg();
  loadQuote();
}

// Event Listeners
exportBtn.addEventListener("click", downloadImage);
newQuoteBtn.addEventListener("click", handleNewQuote);
copyQuoteBtn.addEventListener("click", copyToClipboard);
twterShareBtn.addEventListener("click", shareOnX);

// Load initial content
changeBg();
loadQuote();
