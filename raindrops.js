/* global createCanvas, colorMode, HSB, color, noStroke, fill, noFill, strokeWeight,
background, ellipse, text, stroke, line, globalS, globalB
width, height, mouseX, mouseY, rect, ellipse, random
mouseIsPressed, priorX, priorY, collideCircleCircle
keyCode, UP_ARROW, textSize, DOWN_ARROW, RIGHT_ARROW, LEFT_ARROW, consol, collideRectCircle, loadImage, image
*/

let drops, waterDrop, glass, glassCup, bg;
let hit;
let glassHeight = 250;
let whiteHeight = 250;


function setup() {
  createCanvas(700, 500);
  colorMode(HSB, 100);

  waterDrop = loadImage("https://cdn.glitch.com/f0eb7cd4-96a9-432d-ba27-3a506c3ce5ec%2F84-842085_water-drop-clip-art-droplets-clipart-transparent-png%20(1).png?v=1626880265760");
  glassCup = loadImage('https://cdn.glitch.com/f0eb7cd4-96a9-432d-ba27-3a506c3ce5ec%2Fimages_q%3Dtbn_ANd9GcS0ERAmNn8m2WNLS37lzzL5YInvnqJQmL8vLlR9uJp15yGzfDEVYJPWFsju3uFQnqICENI%26usqp%3DCAU.png?v=1626881290310')
  bg = loadImage("https://cdn.glitch.com/f0eb7cd4-96a9-432d-ba27-3a506c3ce5ec%2Fpngtree-restaurant-table-window-green-plant-cartoon-background-tablewindowgreenplantcartoonbackground-image_60063.jpeg?v=1626881021067");
  
  drops = [
    {
      x: 200,
      y: 0,
      d: 10,
      fallSpeed: 1
    },
    {
      x: random(width),
      y: random(height),
      d: random(20, 25),
      fallSpeed: 1.3
    },
    {
      x: random(width),
      y: random(height),
      d: random(20, 25),
      fallSpeed: 1
    },
    {
      x: random(width),
      y: random(height),
      d: random(20, 25),
      fallSpeed: 1.5
    },
    {
      x: random(width),
      y: random(height),
      d: random(20, 25),
      fallSpeed: 1.5
    },
    {
      x: random(width),
      y: random(height),
      d: random(20, 25),
      fallSpeed: 1.5
    },
    {
      x: random(width),
      y: random(height),
      d: random(20, 25),
      fallSpeed: 2
    },
    {
      x: random(width),
      y: random(height),
      d: random(20, 25),
      fallSpeed: 2
    }
  ];
}

function draw() {
  background(bg);
  noStroke();
  fill(60, 80, 80);

  for (let i = 0; i < drops.length; i++) {
    let drop = drops[i];
    drop.y += drop.fallSpeed;

    if (drop.y > height) {
      drop.y = 0;
      drop.x = random(width);
    }

    image(waterDrop, drop.x, drop.y, drop.d, drop.d);
    //ellipse(drop.x, drop.y, drop.d);
  }

  water();
  drawGlass();
  hitGlass();
}

function drawGlass() {
  fill("white");
  rect(285, 248, width/4, glassHeight);
  //rect(450, 450, 20, 60);
}

function hitGlass() {
  for (let i = 0; i < drops.length; i++) {
    let drop = drops[i];
    hit = collideRectCircle(280, 248, width/4, whiteHeight, drop.x, drop.y, drop.d);

    if (hit) {
      glassHeight -= 2//0.05;
      drop.y = 510;
    }
   // else
  }
}
function water() {
  fill("blue");
  rect(285, 250, width/4, 250);
  image(glassCup, 200, 135, width/2, 450);
}

function mousePressed() {
  // Right click on canvas, "inspect" then go to "console" tab to view this logging.
  console.log("Drop 1 x value:");
  console.log(drops[0].x);
  // Print statements don't show you which line the logging comes from.
  print("Drop 2 x value:");
  let drop = drops[1];
  print(drop.x);

  console.log("Drop 3 x value:");
  drop = drops[2];
  console.log(drop.x);
}
