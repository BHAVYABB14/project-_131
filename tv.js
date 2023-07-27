Status = "";
TV_image = "";

function preload(){
    TV_image = LoadImage("tv.png")
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
    object_detector.Detect(TV_image,gotResults);
}

function gotResults(results,error){
    if(error){
        console.error(error);   
    }
    console.log(results);    
}

function draw(){
    image(TV_image,0,0,640,350);
}