// Create a new element
var adContainer = document.createElement("div");
adContainer.className = "ad-container";

// Create a link element
var adLink = document.createElement("a");
adLink.href = "https://www.google.com";

// Create an image element
var adImage = document.createElement("img");
adImage.src = "https://i.ibb.co/88yrXnS/FB-ad.png";
adImage.className = "ad-image";
adImage.alt = "Advertisement";

// Append the image to the link element
adLink.appendChild(adImage);

// Append the link to the container element
adContainer.appendChild(adLink);

// Append the container element to the body of the HTML page
document.body.appendChild(adContainer);
