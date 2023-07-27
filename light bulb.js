Status = "";
LightBulb_image = "";

function preload(){
    LightBulb_image = LoadImage("light bulb.png")
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!")
    Status = true;
    object_detector.Detect(LightBulb_image,gotResults);
}

function gotResults(results,error){
    if(error){
        console.error(error);   
    }
    console.log(results);    
}

function draw(){
    image(LightBulb_image,0,0,640,350);
}