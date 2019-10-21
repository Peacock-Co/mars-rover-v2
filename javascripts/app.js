// Rover Object Goes Here
// ======================
let rover = {
  direction: "N",
  name: "Rover",
  x: 0,
  Y: 0,
  travelog: []
};
// ======================

function turnLeft(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N"
      break;
  }
  console.log(`turnLeft was called! and it´s facing ${rover.direction}`);
}

function turnRight(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N"
      break;
  }
  console.log(`moveRight was called! And it´s facing ${rover.direction}`);
}

function moveForward(rover) {
  switch (rover.direction) {
    case "N":
      rover.x -= 1;
      break;
    case "E":
      rover.y -= 1;
      break;
    case "S":
      rover.x -= 1;
      break;
    case "W":
      rover.y -= 1;
      break;
  }
  console.log(`moveForward was called, and it´s moving forward ${rover.direction}`)
}

function moveBackward(rover) {
  switch (rover.direction) {
    case "N":
      rover.x -= 1;
      break;
    case "E":
      rover.y -= 1;
      break;
    case "S":
      rover.x -= 1;
      break;
    case "W":
      rover.y -= 1;
      break;
  }
  console.log(`moveForward was called, and it´s moving backward ${rover.direction}`)
}

function roverInstructions(rover, instructions) {
  let i = 0;

  for (i = 0; i < instructions.length; i++) {
    switch (instructions[i]) {
      case "f":
        moveForward(rover);
        break;
      case "b":
        moveBackward(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      default:
        break;
    }
  }
  let place = [rover.x, rover.y];
  rover.travelog.push(place);

  console.log(`The ${rover.name} is ${place}`);
}
