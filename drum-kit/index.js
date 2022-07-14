window.addEventListener('keydown', function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return; // Stop the function
  audio.currentTime = 0 // rewind time
  
  const key = document.querySelector(`.square[data-key="${e.keyCode}"]`);
  audio.play();
  key.classList.add('playing'); 
});

function removeTransition(e) {
  if(e.propertyName !== 'transform') return; // skip if it is not a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.square');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));