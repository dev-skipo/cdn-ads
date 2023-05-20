// Get the popup banner and close button elements
const popupBanner = document.getElementById('popupBanner');
const closeButton = document.getElementById('closeButton');

// Function to show the popup banner
function showPopupBanner() {
  popupBanner.style.display = 'flex';
}

// Function to hide the popup banner
function hidePopupBanner() {
  popupBanner.style.display = 'none';
}

// Event listener for the close button
closeButton.addEventListener('click', hidePopupBanner);

// Show the popup banner
showPopupBanner();

