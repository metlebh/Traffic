let red = document.querySelector('.red');
let yellow = document.querySelector('.yellow');
let green = document.querySelector('.green');

function switchLights() {
  setTimeout(() => {
    red.classList.add('active');
    setTimeout(() => {
      red.classList.remove('active');
      yellow.classList.add('active');
      setTimeout(() => {
        yellow.classList.remove('active');
        green.classList.add('active');
        setTimeout(() => {
          green.classList.remove('active');
          switchLights();
        }, 2500);
      }, 2500);
    }, 2500);
  }, 0);
}

switchLights();
