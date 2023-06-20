window.addEventListener('scroll', () => {
  const y = window.scrollY;
  let header = document.getElementById("header");
  if (y < 1) {
    header.style.backdropFilter = "blur(0px)";
  }
  else {
    header.style.backdropFilter = "blur(5px)";
  }
});

let idMove = setInterval(move, 10);
let y;
let cmX = [-100, -100, -100, -100, -100, -100, -100, -100, -100, -100];
let whchi = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function move() {
  for (let i = 0; i < 10; i++) {
    let moveCm = document.getElementById("content" + (i+1));
    if (whchi[i] === 0){
      y = window.pageYOffset;
      if(y > window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches ? 300 + 900 * i : 1025 + 265 * i) {
        cmX[i] += (cmX[i]*-1)/10;
        moveCm.style.position = "relative";
        moveCm.style.left = cmX[i] + "%";
        if(cmX >- 0.5){
          moveCm.classList.toggle("after");
          moveCm.style.left = 0 + "%";
          cmX[i] =- 100;
          whchi[i] = 1;
        }
      }
    }
  }
}