
img = "";
status = "";

function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
}

function draw(){
    image(img,0,0,640,420);
    fill("#ff0000");
    text("Dog",45,75);
    noFill();
    stroke("#ff0000");
    rect(30,60,450,350);

    fill("#ff0000");
    text("Cat",320,120);
    noFill();
    stroke("#ff0000");
    rect(300,90,270,320);
}

function modelLoaded(){
    console.log("modelLoaded");
    status = true;
    objectDetector.detect(img,gotResult);
}

function gotResult(){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}