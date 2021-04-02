var backImg;
var tom, tomImg1, tomImg2, tomImg3, tomImg4;
var mouse, mouseImg1, mouseImg2, mouseImg3,mouseImg4;
function preload() {
    backImg = loadImage("images/garden.png");

    tomImg1 = loadImage("images/cat1.png");
    tomImg2 = loadImage("images/cat2.png");
    tomImg3 = loadImage("images/cat3.png");
    tomImg4 = loadImage("images/cat4.png");

    mouseImg1 = loadImage("images/mouse1.png");
    mouseImg2 = loadImage("images/mouse2.png");
    mouseImg3 = loadImage("images/mouse3.png");
    mouseImg4 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(800,600);

    tom = createSprite(650,450,1,3);
    tom.addImage(tomImg1);
    tom.scale = 0.2;

    mouse = createSprite(100,500,1,3);
    mouse.addImage(mouseImg1);
    mouse.scale = 0.1;
}

function draw() {

    background(backImg);
    
    if(tom.x - mouse.x < (tom.width - mouse.width)/2){
        mouse.addImage("mouseHappy",mouseImg4);
        mouse.changeImage("mouseHappy",mouseImg4);

        tom.addImage("tomHappy",tomImg4);
        tom.changeImage("tomHappy",tomImg4);
        tom.velocityX = 0;
}

    drawSprites();
    tom.display();
    mouse.display();
}


function keyPressed(){
    if(keyCode === RIGHT_ARROW){
       mouse.addImage("mouseTeasing",mouseImg2);
       mouse.changeImage("mouseTeasing",mouseImg2);
    }
    if(keyCode === LEFT_ARROW){
       tom.addImage("tomRunning",tomImg2);
       tom.changeImage("tomRunning",tomImg2);
       tom.velocityX = -2;
    }
}   
        
        
        
        
        
        
        
        
        