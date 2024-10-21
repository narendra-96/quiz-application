const questionElement = document.getElementById("question");
let answerContainer = document.getElementById("answers-container");

let questions;
async function fetching() {
  const url =
    "https://quizapi.io/api/v1/questions?apiKey=VSlw4ubV6YFOFu3nkCIx8VZvZNyO7VG8SuXWxiwC&limit=20";
  const options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    questions = result;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

async function displayQuestions() {
  await fetching();
  questions.forEach(function (ques) {
    questionElement.textContent = ques.question;
    getAnswers(ques);
  });
}

function getAnswers(a) {
  let answers = a.answers;
  for (let k in answers) {
    let button = document.createElement("button");
    button.textContent = answers[k];
    answerContainer.appendChild(button);
  }
}
displayQuestions();
