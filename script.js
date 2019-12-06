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
  constructor(questions, answers, images, correctAnswer, correctImage) {
    this.questions = questions
    this.answers = answers
    this.images = images
    this.correctAnswer = correctAnswer
    this.correctImage = correctImage
  }
}
//Add images to the Answers
const vgQuestions = [
  new Question ('Doctor Ivo “Eggman” Robotnik is the enemy of which video game character?', ['Sonic the Hedgehog','Mario', 'Pac-Man', 'Kirby'], ['CSS/gamePhotos/Sonic.jpeg', 'CSS/gamePhotos/Mario.jpeg', 'CSS/gamePhotos/Pac-Man.jpeg', 'CSS/gamePhotos/Kirby.jpeg'], 'Sonic the Hedgehog', 'CSS/gamePhotos/Sonic.jpeg'),
  new Question ('The Vault Dweller is the protagonist of which video game?', ['Elder Scrolls','Final Fantasy', 'Fallout', 'Persona'], ['CSS/gamePhotos/Elder-Scrolls.jpeg', 'CSS/gamePhotos/Final-Fantasy.jpeg', 'CSS/gamePhotos/Fallout.jpeg', 'CSS/gamePhotos/Persona.jpeg'], 'Fallout', 'CSS/gamePhotos/Fallout.jpeg'),
  new Question ('Retsu and Geki are computer-controlled opponents in which video game?', ['Tekken','Street Fighter', 'Dead or Alive', 'King of Fighter'], ['CSS/gamePhotos/Tekken.jpeg', 'CSS/gamePhotos/Street-Fighter.jpeg', 'CSS/gamePhotos/DoA.jpeg', 'CSS/gamePhotos/KoF.jpeg'], 'Street Fighter', 'CSS/gamePhotos/Street-Fighter.jpeg'),
  new Question ('Mario first appeared in which classic video game?', ['Super Mario Bros.','Kirby\'s Dreamland', 'Legend of Zelda: Link\'s Awakening', 'Donkey Kong'], ['CSS/gamePhotos/Super-Mario-Bros.png', 'CSS/gamePhotos/Kirby\'s-dreamland.jpeg', 'CSS/gamePhotos/Links_Awakening.jpeg', 'CSS/gamePhotos/DonkeyKong-Game.jpeg'], 'Donkey Kong', 'CSS/gamePhotos/DonkeyKong-Game.jpeg'),
  new Question ('The Umbrella Corporation is a pharmaceutical company in which horror video game franchise?', ['Resident Evil','Silent Hill', 'Outlast', 'Left 4 Dead'], ['CSS/gamePhotos/Resident-Evil.jpeg', 'CSS/gamePhotos/Silent-Hill.jpeg', 'CSS/gamePhotos/Outlast.jpeg', 'CSS/gamePhotos/Left4Dead.jpeg'], 'Resident Evil', 'CSS/gamePhotos/Resident-Evil.jpeg'),
  new Question ('Cloud Strife is the mercenary main character of which video game?', ['Tales of Abyss','Final Fantasy VII', 'Final Fantasy VIII', 'Tales of Symphonia'], ['CSS/gamePhotos/Tales-of-Abyss.jpeg', 'CSS/gamePhotos/Final-Fantasy.jpeg', 'CSS/gamePhotos/Final-Fantasy-8.jpeg', 'CSS/gamePhotos/Tales-of-symphonia.jpeg'],'Final Fantasy VII', 'CSS/gamePhotos/Final-Fantasy.jpeg'),
  new Question ('Desmond Miles is a major character from which video game series?', ['Prey','Resident Evil', 'Assassin\'s Creed', 'Grand Theft Auto'], ['CSS/gamePhotos/prey.jpeg', 'CSS/gamePhotos/Resident-Evil.jpeg', 'CSS/gamePhotos/Assassins-creed.jpeg', 'CSS/gamePhotos/GTA.jpeg'], 'Assassin\'s Creed', 'CSS/gamePhotos/Assassins-creed.jpeg'),
  new Question ('Which seventh generation handheld gaming console was released in North America on the 24th March, 2005?', ['Nintendo 3DS','Gameboy SP', 'Nintendo DS', 'The Playstation Portable'], ['CSS/gamePhotos/nintendo3ds.jpeg', 'CSS/gamePhotos/gameboySP.jpeg', 'CSS/gamePhotos/nintendods.jpeg', 'CSS/gamePhotos/psp.jpeg'], 'The Playstation Portable', 'CSS/gamePhotos/psp.jpeg'),
  new Question ('What was the name of the company that created "The Last of Us"?', ['Sega','Bungie', 'Naughty Dog', 'SquareEnix'], ['CSS/gamePhotos/sega.png', 'CSS/gamePhotos/bungie.png', 'CSS/gamePhotos/naughtydog.jpeg', 'CSS/gamePhotos/squareEnix.png'], 'Naughty Dog', 'CSS/gamePhotos/naughtydog.jpeg'),
  new Question ('In what series of games you can find the characters “Lanturn,” “Phantump” and “Ursaring”?', ['Sonic','Final Fantasy', 'Legend of Zelda', 'Pokemon'], ['CSS/gamePhotos/sonic-game.jpeg', 'CSS/gamePhotos/Final-Fantasy-8.jpeg', 'CSS/gamePhotos/Links_Awakening.jpeg', 'CSS/gamePhotos/pokemon.webp'], 'Pokemon', 'CSS/gamePhotos/pokemon.webp'),
]
const musicQuestions = [
  new Question ('Whose 2013 world tour was called "The Mrs Carter Show"?', ['Lil Wayne','P Diddy', 'Beyonce', 'Jay-Z'], ['CSS/musicPhotos/lilwayne.jpeg', 'CSS/musicPhotos/pdiddy.jpeg', 'CSS/musicPhotos/beyonce.jpeg', 'CSS/musicPhotos/jayz.jpeg'], 'Beyonce', 'CSS/musicPhotos/beyonce.jpeg'),
  new Question ('What symphony\'s last movement includes a setting of Schiller\'s poem "Hymn to Joy"?', ['Beethoven\'s Ninth', 'Bruckner\'s Eight', 'Mahler\'s Tenth', 'Mozart\'s 40th'], ['CSS/musicPhotos/beethovan.jpeg', 'CSS/musicPhotos/bruckner.jpeg', 'CSS/musicPhotos/mahler.jpeg', 'CSS/musicPhotos/mozart.jpeg'], 'Beethoven\'s Ninth', 'CSS/musicPhotos/beethovan.jpeg'),
  new Question ('A song called "Party All the Time", released in 1985, reached the # 2 spot on Billboard\'s pop charts. Which Saturday Night Live actor recorded the song?', ['Garrett Morris', 'Eddie Murphy', 'Bill Murray', 'Joe Piscopo'], ['CSS/musicPhotos/garrett-morris.jpeg', 'CSS/musicPhotos/eddie-murphy.jpeg', 'CSS/musicPhotos/bill-murray.jpeg', 'CSS/musicPhotos/joe-piscopo.jpeg'], 'Eddie Murphy', 'CSS/musicPhotos/eddie-murphy.jpeg'),
  new Question ('Who won American Idol Season One', ['Jennefer Hudson','Jordan Sparks', 'Ruben Studdard', 'Kelly Clarkson'], ['CSS/musicPhotos/jennifer-hudson.jpeg', 'CSS/musicPhotos/jsparks.jpeg', 'CSS/musicPhotos/rstuddard.jpeg', 'CSS/musicPhotos/Kelly.jpeg'], 'Kelly Clarkson', 'CSS/musicPhotos/Kelly.jpeg'),
  new Question ('Celine Dion\'s "My Heart Will Go On" was also known as the theme from what 1997 film?', ['Shakespeare In Love', 'Titanic','The Bodyguard', 'You\'ve Got Mail'], ['CSS/musicPhotos/sinLove.jpeg', 'CSS/musicPhotos/titanic.jpeg', 'CSS/musicPhotos/bodyguard.jpeg', 'CSS/musicPhotos/mail.jpeg'], 'Titanic', 'CSS/musicPhotos/titanic.jpeg'),
  new Question ('Which Civil Rights icon sued Outkast over a 1998 single that bore her name?', ['Myrlie Evers', 'Rosa Parks', 'Coretta Scott King', 'Fannie Lou Hamer'], ['CSS/musicPhotos/mEvans.jpeg', 'CSS/musicPhotos/rParks.jpeg', 'CSS/musicPhotos/corettaKing.jpeg', 'CSS/musicPhotos/fHamer.jpeg'], 'Rosa Parks', 'CSS/musicPhotos/rParks.jpeg'),
  new Question ('Dr. Dre\'s "Nuthin\' But a \'G\' Thang" featured an appearance by what up-and-coming rapper?', ['Jay-Z', 'Nas', 'Snoop Doggy Dogg', 'Tupac Shakur'], ['CSS/musicPhotos/jayz.jpeg', 'CSS/musicPhotos/nas.jpeg', 'CSS/musicPhotos/snoopdog.jpeg', 'CSS/musicPhotos/tupac.jpeg'], 'Snoop Doggy Dogg', 'CSS/musicPhotos/snoopdog.jpeg'),
  new Question ('Which nine-minute, 1991 Guns N\' Roses hit was based on a short story by Del James?', ['Welcome To The Jungle', 'Sweet Child O\' Mine', 'Patience', 'November Rain'], ['CSS/musicPhotos/theJungle.jpeg', 'CSS/musicPhotos/sweetchild.jpeg', 'CSS/musicPhotos/patience.jpeg', 'CSS/musicPhotos/november-rain.jpeg'], 'November Rain', 'CSS/musicPhotos/november-rain.jpeg'),
  new Question ('I Want It That Way was a hit single from what 1999 Backstreet Boys album?', ['Millennium', 'Never Gone', 'Black & Blue', 'Unbreakable'], ['CSS/musicPhotos/millennium.jpeg', 'CSS/musicPhotos/never-gone.jpeg', 'CSS/musicPhotos/b&B.jpeg', 'CSS/musicPhotos/unbreakable.jpeg'], 'Millennium', 'CSS/musicPhotos/millennium.jpeg'),
  new Question ('In VH1\'s "Songs of the 90\'s", which song was voted #1?', ['Nirvana\'s "Smells Like Teen Spirit"', 'Tupac\'s "I Ain\'t Mad At Cha"', 'Beck\'s "I\'m A Loser"', 'Oasis\' "Wonderwall"'], ['CSS/musicPhotos/nirvana.jpeg', 'CSS/musicPhotos/tupac.jpeg', 'CSS/musicPhotos/beck.jpeg', 'CSS/musicPhotos/oasis.jpeg'], 'Nirvana\'s "Smells Like Teen Spirit"', 'CSS/musicPhotos/nirvana.jpeg'),
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
const playerScore = document.querySelector('#playerScore');
const correctAnswer = document.querySelector('#correctAnswer');
const correctImage = document.querySelector('#correctImage');
let modal = document.querySelector('#modal');
let span = document.querySelector('#close');
//For Video Games
choiceGame.addEventListener('click', evt =>{
  evt.preventDefault();
  chooseCategory.style.display = 'none';
  document.querySelector('body').style.backgroundImage = "url('CSS/gamePhotos/videoGameBackground.png')";
  question.innerHTML = vgameQuiz.questions[0][0].questions;
  for(let i = 0; i < answer.length; i++){
    answer[i].innerHTML = vgameQuiz.questions[0][0].answers[i];
    imageAnswers[i].src = vgameQuiz.questions[0][0].images[i];
  }
  trivia.style.display = 'flex';
  answers.style.display = 'flex';
  titleChange.innerHTML = 'Video Game Trivia';
  playerScore.innerHTML = 'Your Score ' + vgameQuiz.score;
  return getAnswer();
})
//For Music
choiceMusic.addEventListener('click', evt =>{
  evt.preventDefault();
  chooseCategory.style.display = 'none';
  document.querySelector('body').style.backgroundImage = "url('CSS/musicPhotos/musicBackground.jpeg')";
  question.innerHTML = musicQuiz.questions[0][0].questions;
  for(let i = 0; i < answer.length; i++){
    answer[i].innerHTML = musicQuiz.questions[0][0].answers[i];
    imageAnswers[i].src = musicQuiz.questions[0][0].images[i];
  }
  trivia.style.display = 'flex';
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
        document.querySelector('footer').style.display = 'block'
      } else if (evt.target.innerHTML === vgameQuiz.questions[0][0].correctAnswer) {
        modal.style.display = "block";
        correctAnswer.innerHTML = vgameQuiz.questions[0][0].correctAnswer;
        correctImage.src = vgameQuiz.questions[0][0].correctImage;
        vgameQuiz.score +=1;
        playerScore.innerHTML = 'Your Score ' + vgameQuiz.score;
        return vgRestOfQuestions()
      } else if (evt.target.innerHTML !== vgameQuiz.questions[0][0].correctAnswer) {
        modal.style.display = "block";
        correctAnswer.innerHTML = 'Wrong the correct answer is ' + vgameQuiz.questions[0][0].correctAnswer;
        correctImage.src = vgameQuiz.questions[0][0].correctImage;
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
        document.querySelector('footer').style.display = 'block'
      } else if (evt.target.innerHTML === musicQuiz.questions[0][0].correctAnswer) {
        modal.style.display = "block";
        correctAnswer.innerHTML = musicQuiz.questions[0][0].correctAnswer;
        correctImage.src = musicQuiz.questions[0][0].correctImage;
        musicQuiz.score +=1;
        playerScore.innerHTML = 'Your Score ' + musicQuiz.score;
        return mRestOfQuestions()
      } else if(evt.target.innerHTML !== musicQuiz.questions[0][0].correctAnswer) {
        modal.style.display = "block";
        correctAnswer.innerHTML = 'Wrong the correct answer is ' + musicQuiz.questions[0][0].correctAnswer;
        correctImage.src = musicQuiz.questions[0][0].correctImage;
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
    document.querySelector('footer').style.display = 'block'
  } else {
    question.innerHTML = vgameQuiz.questions[0][0].questions;
    for(let i = 0; i < answer.length; i++){
      answer[i].innerHTML = vgameQuiz.questions[0][0].answers[i];
      imageAnswers[i].src = vgameQuiz.questions[0][0].images[i];
    }
    playerScore.innerHTML = 'Your Score ' + vgameQuiz.score;
  }
}
function mRestOfQuestions() {
  musicQuiz.questions[0].shift()
  if (musicQuiz.questions[0].length <= 0) {
    alert('Game over Your Score is ' + musicQuiz.score)
    document.querySelector('footer').style.display = 'block'
  } else {
    question.innerHTML = musicQuiz.questions[0][0].questions;
    for(let i = 0; i < answer.length; i++){
      answer[i].innerHTML = musicQuiz.questions[0][0].answers[i];
      imageAnswers[i].src = musicQuiz.questions[0][0].images[i];
    }
    playerScore.innerHTML = 'Your Score ' + musicQuiz.score;
  }
}
//Supposed to dissappear on click
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(evt) {
  if (evt.target == modal) {
    modal.style.display = "none";
  }
}
