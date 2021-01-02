var wall,waal;
var red, yellow, green;
var damage;
var bullet;
var takenVal = localStorage.getItem("passedName");
var play;
var damage;
var state = "a";

function preload(){
    M4LMG = loadImage("Images/Inverted/M4LMG.png");//46
    RPD = loadImage("Images/Inverted/RPDi.png");//41
    MSMC = loadImage("Images/Inverted/MSMCi.png");//40
    PDW = loadImage("Images/Inverted/PDW57i.png");//42
    M4 = loadImage("Images/Inverted/M4i.png");//39
    AK117 = loadImage("Images/Inverted/AK117i.png");//38
    DLQ33 = loadImage("Images/Inverted/DL_Q33i.png");//80
    XPR50 = loadImage("Images/Inverted/XPR_50i.png");//69
    MW11 = loadImage("Images/Inverted/MW11i.png");//65
    J358 = loadImage("Images/Inverted/J358i.png");//80
    BY15 = loadImage("Images/Inverted/BY15.png");//98
    Striker = loadImage("Images/Inverted/Strikeri.png");//90
    Play = loadImage("Images/Play.jpg");
    soundOG = loadSound("Gun Sound.mp3");
}

function setup() {
    createCanvas(900,400);

    bullet = createSprite(60,200,10,5);
    bullet.velocityX = 0;

    play = createSprite(900-125+3,375);
    play.addImage(Play);
    play.scale = 49/60;

    wall = createSprite(650,200,10,300);
    wall.shapeColor = "cyan";
    
    waal = createSprite(650,200,20,300);
    waal.visible = false;

    red = createSprite(20,25,15,15);
    red.shapeColor = "red";

    yellow = createSprite(160,25,15,15);
    yellow.shapeColor = "yellow";

    green = createSprite(360,25,15,15);
    green.shapeColor = "green";

    g1 = createSprite(120, 200);//195
    g1.addImage(M4LMG);
    g1.scale = 0.25;
    g1.visible = false;

    g2 = createSprite(100, 200);//172.5
    g2.addImage(RPD);
    g2.scale = 0.15;
    g2.visible = false;

    g3 = createSprite(80, 200);//172.5
    g3.addImage(MSMC);
    g3.scale = 0.15;
    g3.visible = false;

    g4 = createSprite(70, 200);//187.5
    g4.addImage(PDW);
    g4.scale = 0.1;
    g4.visible = false;

    g5 = createSprite(100, 200);//186
    g5.addImage(M4);
    g5.scale = 0.15;
    g5.visible = false;

    g6 = createSprite(100, 200);//181
    g6.addImage(AK117);
    g6.scale = 0.15;
    g6.visible = false;

    g7 = createSprite(130, 200);//187.5
    g7.addImage(DLQ33);
    g7.scale = 0.2;
    g7.visible = false;

    g8 = createSprite(130, 200);//200
    g8.addImage(XPR50);
    g8.scale = 0.2;
    g8.visible = false;

    g9 = createSprite(50, 200);//180
    g9.addImage(MW11);
    g9.scale = 0.2;
    g9.visible = false;

    g10 = createSprite(60, 200);//180
    g10.addImage(J358);
    g10.scale = 0.2;
    g10.visible = false;

    g11 = createSprite(110, 200);//197.5
    g11.addImage(BY15);
    g11.scale = 0.25;
    g11.visible = false;

    g12 = createSprite(80, 200);//197.5
    g12.addImage(Striker);
    g12.scale = 0.2;
    g12.visible = false;
}

function draw(){
    background("black");

    bullet.collide(wall);
    
    stroke("white");
    strokeWeight(3);
    line(0,50,900,50);
    line(0,350,654,350);

    noStroke();
    fill("white");
    textSize(27);
    text("= Fatal",37,34);
    text("= Injurious",177,34);
    text("= Safe",377,34);

    textSize(25);
    text("CERTIFICATION",685,75);

    textSize(25);
    text("NAME OF GUN: ",5,386);

    takeVal();
    ValTake();
    
    if(mousePressedOver(play)){
      bullet.velocityX = 10;
      if(state === "a"){
        soundOG.play();
        state = "b";
      }
    }
    
    if(damage <= 45 && bullet.isTouching(waal)){
        textSize(120);
        wall.shapeColor = "green";
        fill("green");
        text("A+",725,250)
    }
    else if(damage <= 55 && damage > 45 && bullet.isTouching(waal)){
        textSize(120);
        wall.shapeColor = "green";
        fill("green");
        text("A-",725,250)
    }
    else if(damage <= 65 && damage > 55 && bullet.isTouching(waal)){
        textSize(120);
        wall.shapeColor = "yellow";
        fill("yellow");
        text("B+",725,250)
    }
    else if(damage <= 75 && damage > 65 && bullet.isTouching(waal)){
        textSize(120);
        wall.shapeColor = "yellow";
        fill("yellow");
        text("B-",725,250)
    }
    else if(damage <= 80 && damage > 75 && bullet.isTouching(waal)){
        textSize(120);
        wall.shapeColor = "red";
        fill("red");
        text("C+",725,250)
    }
    else if(damage > 80 && bullet.isTouching(waal)){
        textSize(120);
        wall.shapeColor = "red";
        fill("red");
        text("C-",725,250)
    }

    drawSprites();
}

function takeVal(){
    var type = localStorage.getItem("passedType");
    textSize(27);
    if(type == "LMG"){
        fill("yellow");
    }
    if(type == "SMG"){
        fill("white");
    }
    if(type == "Assault Rifle"){
        fill("lime");
    }
    if(type == "Sniper"){
        fill("gray");
    }
    if(type == "Pistol"){
        fill("blue");
    }
    if(type == "Shotgun"){
        fill("red");
    }

    text(takenVal,195,386);
}