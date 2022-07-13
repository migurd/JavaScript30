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
    case 82:
      rudeus.play();
      break;
    case 77:
      roxy.play();
      break;
    case 83:
      sylphiette.play();
      break;
    case 69:
      eris.play();
      break;
    case 79:
      orsted.play();
      break;
    case 75:
      kishirika.play();
      break;
    case 87:
      ruijerd.play();
      break;
    case 78:
      norn.play();
      break;
    case 65:
      aisha.play();
      break;
  }
}

document.addEventListener("keydown", (e) => pressedKey(e));