var bg,bgImg;
var mouse,mouseImg1,mouseA,mouseImg2;
var cat,catA,catImg1,catImg2;
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    mouseA = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg1 = loadImage("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse4.png");
    catA = loadAnimation("images/cat2.png","images/cat3.png");
    catImg1 = loadImage("images/cat1.png");
    catImg2 = loadAnimation("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg = createSprite(500,400,20,20);
    bg.addImage(bgImg);
    mouse = createSprite(150,650,20,20);
    mouse.addImage(mouseImg1);
    mouse.scale = 0.2;
    cat = createSprite(850,650,20,20);
    cat.addImage(catImg1);
    cat.scale = 0.2;
    
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        mouse.addAnimation("mouseSeeing",mouseImg2);
        mouse.changeAnimation("mouseSeeing");
        cat.addAnimation("catSitting",catImg2);
        cat.changeAnimation("catSitting");
        cat.velocityX = 0;
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode === LEFT_ARROW){
   mouse.addAnimation("mouseTeasing",mouseA);
   mouse.changeAnimation("mouseTeasing");
   cat.addAnimation("catrunning",catA);
    cat.changeAnimation("catrunning");
   cat.velocityX = -6;
 }
 if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseA);
    mouse.changeAnimation("mouseTeasing");
    cat.addAnimation("catrunning",catA);
    cat.changeAnimation("catrunning");
    cat.velocityX = 6;  
}

}
