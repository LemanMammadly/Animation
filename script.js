const witchElement = document.querySelector('.witch');

function changeBackgroundImage() {
  const horrorBefore = document.querySelector('.horror-before');
  horrorBefore.style.backgroundImage = 'url(/assets/img/8CD56091-1335-4697-8388-512728CCC1EF_4_5005_c.jpeg)';
}

witchElement.addEventListener('animationend', changeBackgroundImage);