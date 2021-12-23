// The Cat Walk
let myCat = document.querySelector("img");
let leftDistance = 0;
let isMovingRight = true;
myCat.style.left = leftDistance;

function catWalk() {
  if (leftDistance > window.innerWidth - 200) {
    isMovingRight = false;
    myCat.style.transform = "scaleX(-1)";
  } else if (leftDistance < 0) {
    isMovingRight = true;
    myCat.style.transform = "scaleX(+1)";
  }
  if (isMovingRight === true) {
    leftDistance += 10;
  } else {
    leftDistance -= 10;
  }
  myCat.style.left = leftDistance + "px";
}
setInterval(catWalk, 50);
