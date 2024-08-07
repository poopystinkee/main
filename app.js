// Author: Felix Davis-Eldridge
// Date created: 17/06/2024
// Last updated: 24/06/2024

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show'); // determines whether elements on a page are visible or not
      } else { 
        entry.target.classList.remove('show');
      }
    });
  }, {}); 
  
  const hiddenElements = document.querySelectorAll('.hidden'); 
  hiddenElements.forEach((el) => observer.observe(el)); // grabs all hidden elements

  // get the navbar element
const nav = document.querySelector('.nav');

// check if the user has scrolled to the bottom of the page
function checkScrollPosition() {
  const scrollPosition = window.scrollY + window.innerHeight;
  const documentHeight = document.body.offsetHeight;

  if (scrollPosition >= documentHeight) {
    nav.classList.add('bottom');
  } else {
    nav.classList.remove('bottom');
  }
}

// event listener to window scroll event
window.addEventListener('scroll', checkScrollPosition);