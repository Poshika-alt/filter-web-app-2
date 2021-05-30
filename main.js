function preload(){

}

function setup(){
canvas=createCanvas(400,500);
canvas.center();
video=createCapture(VIDEO);
video.size(400,500);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);

}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("devilX="+results[0].pose.devil.x);
        console.log("devilY="+results[0].pose.devil.y);
    }
}


function modelLoaded(){
    console.log('poseNet is intialized');
}

function draw(){
    image(video,0,0,300,300);
    }

    function take_snapshot(){
        save('myImage');
    }