/* Position of the mouse */
const circle = document.getElementById('fixed-circle');

let posX = 0;
let posY = 0;

/* Speed of the movement */
const speedValue = document.getElementById('speed');
const velocityValue = document.getElementById('velocity');

let movementX = 0;
let movementY = 0;
let velocity = 0;
let rotation = 0;

/* Get speed, position and calc velocity */
function logMouseMovement(event){
  movementX = event.movementX;
  movementY = event.movementY;
  posX = event.pageX;
  posY = event.pageY;
  rotation = Math.atan2(movementY, movementX) * 60;
}

function calcVelocity(mvmX, mvmY){
  velocity = Math.sqrt(Math.pow(mvmX, 2)) + Math.sqrt(Math.pow(mvmY, 2));
}

/* Update values */
document.addEventListener('mousemove', function(e){
  logMouseMovement(e);
  calcVelocity(movementX, movementY);
  speedValue.innerHTML = `Speed = (${movementX}, ${movementY})`;
  velocityValue.innerHTML = `Velocity = ${velocity}`;

  circle.setAttribute('style', `
    top: ${posY}px; 
    left: ${posX}px; 
    visibility: inherit;
    transform: translate(-50%, -50%) rotate(${Math.round(rotation)}deg);
    width: calc(40px + ${velocity}px);
  `);
});