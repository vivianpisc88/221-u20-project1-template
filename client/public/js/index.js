
function checkKeyPress(e) {
  if (e.keyCode == 32) {
    goToLocation('/feed');
  }
}

let title= document.getElementById("splash_title");
title.addEventListener('click', () => {
  console.log("Testing");
})

let fadeText= document.getElementById('fade_text');


function onSpacebarPress(event) {
  if (event.code == 'Space' || event.key === ' ') {
    window.location.href = 'http://localhost:1337/feed';
  }
}

document.addEventListener('keydown', onSpacebarPress);

fadeText.onclick = () => {
  window.location = "/feed";
}
