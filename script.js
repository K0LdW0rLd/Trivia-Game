console.log('I Work')
//Change the player name upon click
let form = document.querySelector('#form');
const formInput = form.querySelector('input.pName');

form.addEventListener('submit', evt => {
  evt.preventDefault();
  document.querySelector('#playerName').innerHTML = formInput.value
  document.querySelector('form').style.display = 'none';
  document.querySelector('.chooseCategory').style.display = 'flex';
})
//Create a class for the quiz and the questions
class Quiz {
  constructor(questions) {
    this.questions = questions
    this.score = 0
  }
}

class Question {
  constructor(questions, answers, correctAnswer) {
    this.questions = questions
    this.answers = answers
    this.correctAnswer = correctAnswer
  }
}

const vgQuestions = new Question
console.log(vgQuestions)
const musicQuestions = new Question
console.log(musicQuestions)
