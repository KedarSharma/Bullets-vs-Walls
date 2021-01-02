var M4LMG, RPD;
var MSMC, Chicom;
var AK47, ASM10;
var DLQ33, Arctic50;
var MW11, J358;
var BY15, Striker;
var g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12;
var a;
var damage;

function preload() {
  M4LMG = loadImage("Images/Actual/M4LMG.png");
  RPD = loadImage("Images/Actual/RPD.png");
  MSMC = loadImage("Images/Actual/MSMC.png");
  PDW = loadImage("Images/Actual/PDW57.png");
  M4 = loadImage("Images/Actual/M4.png");
  AK117 = loadImage("Images/Actual/AK117.png");
  DLQ33 = loadImage("Images/Actual/DL Q33.png");
  XPR50 = loadImage("Images/Actual/XPR 50.png");
  MW11 = loadImage("Images/Actual/MW11.png");
  J358 = loadImage("Images/Actual/J358.png");
  BY15 = loadImage("Images/Actual/BY15.png");
  Striker = loadImage("Images/Actual/Striker.png");
}

function setup() {
  createCanvas(800, 420);

  g1 = createSprite(500, 100);
  g1.addImage(M4LMG);
  g1.scale = 0.25;
  g1.visible = false;

  g2 = createSprite(500, 125);
  g2.addImage(RPD);
  g2.scale = 0.25;
  g2.visible = false;

  g3 = createSprite(500, 125);
  g3.addImage(MSMC);
  g3.visible = false;

  g4 = createSprite(500, 100);
  g4.addImage(PDW);
  g4.scale = 0.1;
  g4.visible = false;

  g5 = createSprite(500, 100);
  g5.addImage(M4);
  g5.scale = 0.25;
  g5.visible = false;

  g6 = createSprite(520, 110);
  g6.addImage(AK117);
  g6.scale = 0.25;
  g6.visible = false;

  g7 = createSprite(500, 100);
  g7.addImage(DLQ33);
  g7.scale = 0.15;
  g7.visible = false;

  g8 = createSprite(500, 100);
  g8.addImage(XPR50);
  g8.scale = 0.25;
  g8.visible = false;

  g9 = createSprite(500, 100);
  g9.addImage(MW11);
  g9.scale = 0.25;
  g9.visible = false;

  g10 = createSprite(500, 100);
  g10.addImage(J358);
  g10.scale = 0.25;
  g10.visible = false;

  g11 = createSprite(500, 100);
  g11.addImage(BY15);
  g11.scale = 0.25;
  g11.visible = false;

  g12 = createSprite(500, 100);
  g12.addImage(Striker);
  g12.scale = 0.25;
  g12.visible = false;
}

function draw() {
  background("green");

  gunType();
  EnterName();

  a = document.getElementById("gunType");

  textSize(25);
	fill("yellow");
	stroke("red");
	strokeWeight(3);
  text("Damage dealt: ", 20, 250);
  
	fill("white");
  stroke("red");
  

  if (EnterName() == "M4LMG") {
    g1.visible = true;
    g2.visible = false;
    g3.visible = false;
    g4.visible = false;
    g5.visible = false;
    g6.visible = false;
    g7.visible = false;
    g8.visible = false;
    g9.visible = false;
    g10.visible = false;
    g11.visible = false;
    g12.visible = false;
    text(46,190,250);
  }
  if (EnterName() == "RPD") {
    g1.visible = false;
    g2.visible = true;
    g3.visible = false;
    g4.visible = false;
    g5.visible = false;
    g6.visible = false;
    g7.visible = false;
    g8.visible = false;
    g9.visible = false;
    g10.visible = false;
    g11.visible = false;
    g12.visible = false;
    text(41,190,250);
  }
  if (EnterName() == "M4") {
    g1.visible = false;
    g2.visible = false;
    g3.visible = false;
    g4.visible = false;
    g5.visible = true;
    g6.visible = false;
    g7.visible = false;
    g8.visible = false;
    g9.visible = false;
    g10.visible = false;
    g11.visible = false;
    g12.visible = false;
    text(39,190,250);
  }
  if (EnterName() == "AK117") {
    g1.visible = false;
    g2.visible = false;
    g3.visible = false;
    g4.visible = false;
    g5.visible = false;
    g6.visible = true;
    g7.visible = false;
    g8.visible = false;
    g9.visible = false;
    g10.visible = false;
    g11.visible = false;
    g12.visible = false;
    text(38,190,250);
  }
  if (EnterName() == "MSMC") {
    g1.visible = false;
    g2.visible = false;
    g3.visible = true;
    g4.visible = false;
    g5.visible = false;
    g6.visible = false;
    g7.visible = false;
    g8.visible = false;
    g9.visible = false;
    g10.visible = false;
    g11.visible = false;
    g12.visible = false;
    text(40,190,250);
  }
  if (EnterName() == "PDW-57") {
    g1.visible = false;
    g2.visible = false;
    g3.visible = false;
    g4.visible = true;
    g5.visible = false;
    g6.visible = false;
    g7.visible = false;
    g8.visible = false;
    g9.visible = false;
    g10.visible = false;
    g11.visible = false;
    g12.visible = false;
    text(42,190,250);
  }
  if (EnterName() == "DL Q33") {
    g1.visible = false;
    g2.visible = false;
    g3.visible = false;
    g4.visible = false;
    g5.visible = false;
    g6.visible = false;
    g7.visible = true;
    g8.visible = false;
    g9.visible = false;
    g10.visible = false;
    g11.visible = false;
    g12.visible = false;
    text(87,190,250);
  }
  if (EnterName() == "XPR 50") {
    g1.visible = false;
    g2.visible = false;
    g3.visible = false;
    g4.visible = false;
    g5.visible = false;
    g6.visible = false;
    g7.visible = false;
    g8.visible = true;
    g9.visible = false;
    g10.visible = false;
    g11.visible = false;
    g12.visible = false;
    text(79,190,250);
  }
  if (EnterName() == "MW11") {
    g1.visible = false;
    g2.visible = false;
    g3.visible = false;
    g4.visible = false;
    g5.visible = false;
    g6.visible = false;
    g7.visible = false;
    g8.visible = false;
    g9.visible = true;
    g10.visible = false;
    g11.visible = false;
    g12.visible = false;
    text(56,190,250);
  }
  if (EnterName() == "J358") {
    g1.visible = false;
    g2.visible = false;
    g3.visible = false;
    g4.visible = false;
    g5.visible = false;
    g6.visible = false;
    g7.visible = false;
    g8.visible = false;
    g9.visible = false;
    g10.visible = true;
    g11.visible = false;
    g12.visible = false;
    text(63,190,250);
  }

  if (EnterName() == "BY15") {
    g1.visible = false;
    g2.visible = false;
    g3.visible = false;
    g4.visible = false;
    g5.visible = false;
    g6.visible = false;
    g7.visible = false;
    g8.visible = false;
    g9.visible = false;
    g10.visible = false;
    g11.visible = true;
    g12.visible = false;
    text(85,190,250);
  }
  if (EnterName() == "Striker") {
    g1.visible = false;
    g2.visible = false;
    g3.visible = false;
    g4.visible = false;
    g5.visible = false;
    g6.visible = false;
    g7.visible = false;
    g8.visible = false;
    g9.visible = false;
    g10.visible = false;
    g11.visible = false;
    g12.visible = true;
    text(73,190,250);
  }

  textSize(30);
  fill("yellow");
  noStroke();
  text("Wall Safety Organisation", 200, 30);

  stroke("red");
  strokeWeight(3);
  line(198, 42, 535, 42);

  text(EnterName() + " \(" + gunType() + "\)", 170, 100);

  drawSprites();
}

function gunType() {
  var typing = document.getElementById("gunType");
  var type = typing.options[typing.selectedIndex].value;
  return type;
}

function passval(){
  var selectedOne = document.getElementById("gunName").value;
  var selectedType = document.getElementById("gunType").value;
  localStorage.setItem("passedName",selectedOne);
  localStorage.setItem("passedType",selectedType);
  return true; 
}