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

const vgQuestions = [
  new Question ('Doctor Ivo “Eggman” Robotnik is the enemy of which video game character?', ['Sonic the Hedgehog','Mario', 'Pac-Man', 'Kirby'], 'Sonic the Hedgehog'),
  new Question ('The Vault Dweller is the protagonist of which video game?', ['Oblivion','Final Fantasy', 'Fallout', 'Persona'], 'Fallout'),
  new Question ('Retsu and Geki are computer-controlled opponents in which video game?', ['Tekken','Street Fighter', 'Dead or Alive', 'King of Fighter'], 'Street Fighter'),
  new Question ('Mario first appeared in which classic video game?', ['Super Mario Bros.','Kirby\'s Dreamland', 'Legend of Zelda: Link\'s Awakening', 'Donkey Kong'], 'Donkey Kong'),
  new Question ('The Umbrella Corporation is a pharmaceutical company in which horror video game franchise?', ['Resident Evil','Silent Hill', 'Outlast', 'Left 4 Dead'], 'Resident Evil'),
  new Question ('Cloud Strife is the mercenary main character of which video game?', ['Tales of Abyss','Final Fantasy VII', 'Final Fantasy VIII', 'Tales of Symphonia'], 'Final Fantasy VII'),
  new Question ('Desmond Miles is a major character from which video game series?', ['Prey','Resident Evil', 'Assassin\'s Creed', 'Grand Theft Auto'], 'Assassin\'s Creed'),
  new Question ('Which seventh generation handheld gaming console was released in North America on the 24th March, 2005?', ['Nintendo 3DS','Gameboy SP', 'Nintendo DS', 'The Playstation Portable'], 'The Playstation Portable'),
  new Question ('What was the name of the company that created "The Last of Us"?', ['Sega','Bungie', 'Naughty Dog', 'SquareEnix'], 'Naughty Dog'),
  new Question ('In what series of games you can find the characters “Lanturn,” “Phantump” and “Ursaring”?', ['Sonic','Final Fantasy', 'Legend of Zelda', 'Pokemon'], 'Pokemon'),
]
console.log(vgQuestions)
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
console.log(musicQuestions)
