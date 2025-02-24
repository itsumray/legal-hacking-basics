// Quiz functionality
function startQuiz() {
  document.getElementById('quiz-container').style.display = "block";
}

function submitQuiz() {
  const answer = document.querySelector('input[name="q1"]:checked');
  const result = document.getElementById('quiz-result');

  if (answer && answer.value === 'A') {
    result.textContent = 'Correct!';
    result.style.color = 'green';
  } else {
    result.textContent = 'Incorrect, try again!';
    result.style.color = 'red';
  }
}

// Toggle tutorial content visibility
function toggleContent(id) {
  const content = document.getElementById(id);
  content.style.display = content.style.display === "none" ? "block" : "none";
}
