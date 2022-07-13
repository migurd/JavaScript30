const rudeus = new Audio("./src/rudeus.mp3");
const roxy = new Audio("./src/roxy.mp3");
const sylphiette = new Audio("./src/sylphiette.mp3");
const eris = new Audio("./src/eris.mp3");
const orsted = new Audio("./src/orsted.mp3");
const kishirika = new Audio("./src/kishirika.mp3");
const ruijerd = new Audio("./src/ruijerd.mp3");
const norn = new Audio("./src/norn.mp3");
const aisha = new Audio("./src/aisha.mp3");

const box = document.querySelector('.square');

const pressedKey = e => {
  switch(e.keyCode) {
    case 65:
      rudeus.play();
      break;
    case 83:
      roxy.play();
      break;
    case 68:
      sylphiette.play();
      break;
    case 70:
      eris.play();
      break;
    case 71:
      orsted.play();
      break;
    case 72:
      kishirika.play();
      break;
    case 74:
      ruijerd.play();
      break;
    case 75:
      norn.play();
      break;
    case 76:
      aisha.play();
      break;
  }
}

document.addEventListener("keydown", (e) => pressedKey(e));