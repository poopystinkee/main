// Create an IntersectionObserver instance
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {});

// Get all elements with the 'hidden' class
const hiddenElements = document.querySelectorAll('.hidden');

// Observe each hidden element
hiddenElements.forEach((el) => observer.observe(el));

// Get the scroll icon element
const scrollIcon = document.getElementById('scroll-icon');

// Event listener for the window scroll event
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    scrollIcon.classList.remove('hidden');
  } else {
    scrollIcon.classList.add('hidden');
  }

  const titleSection = document.querySelector('#title-image');
  const body = document.body;
  if (window.scrollY > titleSection.offsetTop + titleSection.offsetHeight) {
    body.classList.add('scrolled');
  } else {
    body.classList.remove('scrolled');
  }
});

const button = document.querySelector('button');
const scrollThreshold = 200; // adjust this value to change the scroll threshold (where the button becomes visible)

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const scrollHeight = document.body.scrollHeight;
  const windowHeight = window.innerHeight;

  if (scrollTop <= scrollThreshold || scrollTop + windowHeight >= scrollHeight - scrollThreshold) {
    button.classList.add('show');
  } else {
    button.classList.remove('show');
  }
});

const questions = [
  {
      question: "How many principal figures has Papanui High School had since its founding?",
      options: ["7", "8", "12"],
      correct: 1
  },
  {
      question: "Why was Papanui considered one of the most progressive schools at the time in all of the country back in the 1960s?",
      options: ["Because of the very up to date facilities", "Because of the highly qualified staffing", "Because of the implementation of co-education"],
      correct: 2
  },
  {
      question: "What year was the Graham Condon pool facility installed in collaboration with the school?",
      options: ["2011", "1979", "2002"],
      correct: 0
  }
];

let currentQuestion = 0;
let score = 0;

document.getElementById("question").innerHTML = questions[currentQuestion].question;
document.getElementById("option1-label").innerHTML = questions[currentQuestion].options[0];
document.getElementById("option2-label").innerHTML = questions[currentQuestion].options[1];
document.getElementById("option3-label").innerHTML = questions[currentQuestion].options[2];

document.getElementById("submit-btn").addEventListener("click", checkAnswer);

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption.id === `option${questions[currentQuestion].correct + 1}`) {
      score++;
      document.getElementById("result").innerHTML = `Correct! Your score is ${score} out of ${currentQuestion + 1}`;
  } else {
      document.getElementById("result").innerHTML = `Incorrect. The correct answer was ${questions[currentQuestion].options[questions[currentQuestion].correct]}. Your score is ${score} out of ${currentQuestion + 1}`;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
      document.getElementById("question").innerHTML = questions[currentQuestion].question;
      document.getElementById("option1-label").innerHTML = questions[currentQuestion].options[0];
      document.getElementById("option2-label").innerHTML = questions[currentQuestion].options[1];
      document.getElementById("option3-label").innerHTML = questions[currentQuestion].options[2];
      document.querySelector('input[name="option"]:checked').checked = false;
  } else {
      document.getElementById("question-container").style.display = "none";
      document.getElementById("result").innerHTML = `Quiz complete! Your final score is ${score} out of ${questions.length}`;
  }
}