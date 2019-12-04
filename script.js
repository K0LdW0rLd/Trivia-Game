console.log('I Work')
//Change the player name upon click
let form = document.querySelector('#form');
const formInput = form.querySelector('input.pName');

form.addEventListener('submit', evt => {
  evt.preventDefault();
  document.querySelector('#playerName').innerHTML = formInput.value
})
