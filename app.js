// Author: Felix Davis-Eldridge
// Date created: 17/06/2024
// Last updated: 24/06/2024

// Create an IntersectionObserver instance
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // Add the 'show' class when the element is visible
    } else {
      entry.target.classList.remove('show'); // Remove the 'show' class when the element is not visible
    }
  });
}, {});

// Get all elements with the 'hidden' class
const hiddenElements = document.querySelectorAll('.hidden');

// Observe each hidden element
hiddenElements.forEach((el) => observer.observe(el));

// Get the navbar element
const nav = document.querySelector('.nav');

// Function to check the scroll position
function checkScrollPosition() {
  const scrollPosition = window.scrollY + window.innerHeight;
  const documentHeight = document.body.offsetHeight;

  if (scrollPosition >= documentHeight) {
    nav.classList.add('bottom'); // Add the 'bottom' class when the user reaches the bottom of the page
  } else {
    nav.classList.remove('bottom'); // Remove the 'bottom' class when the user is not at the bottom of the page
  }
}

// Event listener for the window scroll event
window.addEventListener('scroll', checkScrollPosition);

const scrollIcon = document.getElementById('scroll-icon');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) { // adjust the value to your liking
    scrollIcon.classList.remove('hidden');
  } else {
    scrollIcon.classList.add('hidden');
  }
});