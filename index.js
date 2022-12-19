let lastKey = null;

const removeTransition = (e) => {
  // if (e.propertyName !== 'transform') return;
  // e.target.classList.remove('playing');
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  key.classList.remove('active');
}

const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if(!key) return; // If it detects a key not included, it returns.
  if(lastKey) {
    const lastAudio = document.querySelector(`audio[data-key="${lastKey.keyCode}"]`);
    lastAudio.currentTime = 0;
    lastAudio.pause();
    removeTransition(lastKey);
  }
  if(!lastKey)
    key.classList.add('active');
  else {
    if(e.keyCode !== lastKey.keyCode)
      key.classList.add('active');
    else 
      setTimeout(() => {
        key.classList.add('active');
      }, 100);
  }
  lastKey = e;
  audio.currentTime = 0;
  audio.play();
  audio.addEventListener('ended', () => removeTransition(e));
}

const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);