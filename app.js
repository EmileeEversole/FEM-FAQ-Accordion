const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  const title = question.querySelector(".question-title");
  const answer = question.querySelector(".question-answer");

  title.addEventListener('click', () => {

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove('show-answer');
      }
    });

    question.classList.toggle('show-answer');

  });
});