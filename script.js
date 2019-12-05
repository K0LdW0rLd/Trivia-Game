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
class Question {
  constructor(questions, answers, images, correctAnswer) {
    this.questions = questions
    this.answers = answers
    this.images = images
    this.correctAnswer = correctAnswer
  }
}
//Add images to the Answers
const vgQuestions = [
  new Question ('Doctor Ivo “Eggman” Robotnik is the enemy of which video game character?', ['Sonic the Hedgehog','Mario', 'Pac-Man', 'Kirby'], ['CSS/photos/Sonic.jpeg', 'CSS/photos/Mario.jpeg', 'CSS/photos/Pac-Man.jpeg', 'CSS/photos/Kirby.jpeg'], 'Sonic the Hedgehog'),
  new Question ('The Vault Dweller is the protagonist of which video game?', ['Elder Scrolls','Final Fantasy', 'Fallout', 'Persona'], 'Fallout'),
  new Question ('Retsu and Geki are computer-controlled opponents in which video game?', ['Tekken','Street Fighter', 'Dead or Alive', 'King of Fighter'], 'Street Fighter'),
  new Question ('Mario first appeared in which classic video game?', ['Super Mario Bros.','Kirby\'s Dreamland', 'Legend of Zelda: Link\'s Awakening', 'Donkey Kong'], 'Donkey Kong'),
  new Question ('The Umbrella Corporation is a pharmaceutical company in which horror video game franchise?', ['Resident Evil','Silent Hill', 'Outlast', 'Left 4 Dead'], 'Resident Evil'),
  new Question ('Cloud Strife is the mercenary main character of which video game?', ['Tales of Abyss','Final Fantasy VII', 'Final Fantasy VIII', 'Tales of Symphonia'], 'Final Fantasy VII'),
  new Question ('Desmond Miles is a major character from which video game series?', ['Prey','Resident Evil', 'Assassin\'s Creed', 'Grand Theft Auto'], 'Assassin\'s Creed'),
  new Question ('Which seventh generation handheld gaming console was released in North America on the 24th March, 2005?', ['Nintendo 3DS','Gameboy SP', 'Nintendo DS', 'The Playstation Portable'], 'The Playstation Portable'),
  new Question ('What was the name of the company that created "The Last of Us"?', ['Sega','Bungie', 'Naughty Dog', 'SquareEnix'], 'Naughty Dog'),
  new Question ('In what series of games you can find the characters “Lanturn,” “Phantump” and “Ursaring”?', ['Sonic','Final Fantasy', 'Legend of Zelda', 'Pokemon'], 'Pokemon'),
]
const musicQuestions = [
  new Question ('Whose 2013 world tour was called "The Mrs Carter Show"?', ['Lil Wayne','P Diddy', 'Beyonce', 'Jay-Z'], 'Beyonce'),
  new Question ('What symphony\'s last movement includes a setting of Schiller\'s poem "Hymn to Joy"?', ['Beethoven\'s Ninth', 'Bruckner\'s Eight', 'Mahler\'s Tenth', 'Mozart\'s 40th'], 'Beethoven\'s Ninth'),
  new Question ('A song called "Party All the Time", released in 1985, reached the # 2 spot on Billboard\'s pop charts. Which Saturday Night Live actor recorded the song?', ['Garrett Morris', 'Eddie Murphy', 'Bill Murray', 'Joe Piscopo'], 'Eddie Murphy'),
  new Question ('Who won American Idol Season One', ['Jennefer Hudson','Jordan Sparks', 'Ruben Studdard', 'Kelly Clarkson'], 'Kelly Clarkson'),
  new Question ('Celine Dion\'s "My Heart Will Go On" was also known as the theme from what 1997 film?', ['Shakespeare In Love', 'Titanic','The Bodyguard', 'You\'ve Got Mail'], 'Titanic'),
  new Question ('Which Civil Rights icon sued Outkast over a 1998 single that bore her name?', ['Myrlie Evers', 'Rosa Parks', 'Coretta Scott King', 'Fannie Lou Hamer'], 'Rosa Parks'),
  new Question ('Dr. Dre\'s "Nuthin\' But a \'G\' Thang" featured an appearance by what up-and-coming rapper?', ['Jay-Z', 'Nas', 'Snoop Doggy Dogg', 'Tupac Shakur'], 'Snoop Doggy Dogg'),
  new Question ('Which nine-minute, 1991 Guns N\' Roses hit was based on a short story by Del James?', ['Welcome To The Jungle', 'Sweet Child O\' Mine', 'Patience', 'November Rain'], 'November Rain'),
  new Question ('I Want It That Way was a hit single from what 1999 Backstreet Boys album?', ['Millennium', 'Never Gone', 'Black & Blue', 'Unbreakable'], 'Millennium'),
  new Question ('In VH1\'s "Songs of the 90\'s", which song was voted #1?', ['Nirvana\'s "Smells Like Teen Spirit"', 'Tupac\'s "I Ain\'t Mad At Cha"', 'Beck\'s "I\'m A Loser"', 'Oasis\' "Wonderwall"'], 'Nirvana\'s "Smells Like Teen Spirit"'),
]
class Quiz {
  constructor() {
    this.questions = []
    this.score = 0
  }
  addQuiz(stuff){
    this.questions.push(stuff)
  }
}
//Create Video Game Class and and the questins to it
const vgameQuiz = new Quiz()
vgameQuiz.addQuiz(vgQuestions);
//Create Video Game Class and and the questins to it
const musicQuiz = new Quiz()
musicQuiz.addQuiz(musicQuestions);
//Add event listener to listen for Icon click
const choiceGame = document.querySelector('#choiceGame')
const choiceMusic = document.querySelector('#choiceMusic')
const answerNodeList = document.querySelectorAll('#answer')
const answer = Array.from(answerNodeList);
const imageNodeList = document.querySelectorAll('#answerImages')
const imageAnswers = Array.from(imageNodeList);
const chooseCategory = document.querySelector('.chooseCategory');
const question = document.querySelector('#question');
const trivia = document.querySelector('.trivia');
const answers= document.querySelector('.answers');
const titleChange = document.querySelector('.titleChange');
const playerScore = document.querySelector('#playerScore')
//For Video Games
choiceGame.addEventListener('click', evt =>{
  evt.preventDefault();
  chooseCategory.style.display = 'none';
  question.innerHTML = vgameQuiz.questions[0][0].questions;
  for(let i = 0; i < answer.length; i++){
    answer[i].innerHTML = vgameQuiz.questions[0][0].answers[i];
    imageAnswers[i].src = vgameQuiz.questions[0][0].images[i];
  }
  trivia.style.display = 'block';
  answers.style.display = 'flex';
  titleChange.innerHTML = 'Video Game Trivia';
  playerScore.innerHTML = 'Your Score ' + vgameQuiz.score;
  return getAnswer();
})
//For Music
choiceMusic.addEventListener('click', evt =>{
  evt.preventDefault();
  chooseCategory.style.display = 'none';
  question.innerHTML = musicQuiz.questions[0][0].questions;
  for(let i = 0; i < answer.length; i++){
    answer[i].innerHTML = musicQuiz.questions[0][0].answers[i];
  }
  trivia.style.display = 'block';
  answers.style.display = 'flex';
  titleChange.innerHTML = 'Music Trivia';
  playerScore.innerHTML = 'Your Score ' + musicQuiz.score;
  return getAnswer();
})
//runs depending on The title
function getAnswer(){
  if (titleChange.innerHTML === 'Video Game Trivia') {
    return vgrightOrWrong();
  } else if (titleChange.innerHTML === 'Music Trivia') {
    return mrightOrWrong();
  }
}
//Function get answer runs this function
function vgrightOrWrong(){
  answer.forEach(i => {
    i.addEventListener('click', evt =>{
      evt.preventDefault();
      if (vgameQuiz.questions[0].length === 0) {
        alert('Game over Your Score is ' + vgameQuiz.score)
      } else if (evt.target.innerHTML === vgameQuiz.questions[0][0].correctAnswer) {
        console.log('Correct Answer');
        vgameQuiz.score +=1;
        playerScore.innerHTML = 'Your Score ' + vgameQuiz.score;
        return vgRestOfQuestions()
      } else if (evt.target.innerHTML !== vgameQuiz.questions[0][0].correctAnswer) {
        console.log('Wrong answer the correct answer is ' + vgameQuiz.questions[0][0].correctAnswer);
        return vgRestOfQuestions()
      }
    })
  })
}
//Function get answer runs this function
function mrightOrWrong(){
  answer.forEach(i => {
    i.addEventListener('click', evt =>{
      evt.preventDefault();
      if (musicQuiz.questions[0].length <= 0) {
        alert('Game over Your Score is ' + musicQuiz.score)
      } else if (evt.target.innerHTML === musicQuiz.questions[0][0].correctAnswer) {
        console.log('Correct Answer');
        musicQuiz.score +=1;
        playerScore.innerHTML = 'Your Score ' + musicQuiz.score;
        return mRestOfQuestions()
      } else if(evt.target.innerHTML !== musicQuiz.questions[0][0].correctAnswer) {
        console.log('Wrong answer the correct answer is ' + musicQuiz.questions[0][0].correctAnswer);
        return mRestOfQuestions()
      }
    })
  })
}

//function that runs through the rest of the questions for each category
function vgRestOfQuestions() {
  vgameQuiz.questions[0].shift()
  if (vgameQuiz.questions[0].length === 0) {
    alert('Game over Your Score is ' + vgameQuiz.score)
  } else {
    question.innerHTML = vgameQuiz.questions[0][0].questions;
    for(let i = 0; i < answer.length; i++){
      answer[i].innerHTML = vgameQuiz.questions[0][0].answers[i];
    }
    playerScore.innerHTML = 'Your Score ' + vgameQuiz.score;
  }
}
function mRestOfQuestions() {
  musicQuiz.questions[0].shift()
  if (musicQuiz.questions[0].length <= 0) {
    alert('Game over Your Score is ' + musicQuiz.score)
  } else {
    question.innerHTML = musicQuiz.questions[0][0].questions;
    for(let i = 0; i < answer.length; i++){
      answer[i].innerHTML = musicQuiz.questions[0][0].answers[i];
    }
    playerScore.innerHTML = 'Your Score ' + musicQuiz.score;
  }
}


//Create a Modal box that displays the correct answer
