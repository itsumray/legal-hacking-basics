function startQuiz() {
  const quizContainer = document.getElementById('quiz');
  quizContainer.innerHTML = `
    <h4>What does Nmap do?</h4>
    <ul>
      <li><input type="radio" name="q1" value="A"> A) Scans networks for vulnerabilities</li>
      <li><input type="radio" name="q1" value="B"> B) Cracks passwords</li>
      <li><input type="radio" name="q1" value="C"> C) Detects malware</li>
    </ul>
    <button onclick="submitQuiz()">Submit</button>
  `;
}

function submitQuiz() {
  const answer = document.querySelector('input[name="q1"]:checked');
  if (answer && answer.value === 'A') {
    alert('Correct!');
  } else {
    alert('Try again!');
  }
}

function toggleContent(id) {
  const content = document.getElementById(id);
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}
