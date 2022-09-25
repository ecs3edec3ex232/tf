wrist_l_x = 0;
wrist_r_x = 0;
difference = "";

function setup(){
    canvas = createCanvas(620, 590);
    canvas.position(811, 149); 

    video = createCapture(VIDEO);
    video.size(550, 550);
    video.position(100, 149);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#FFFFFF');
    textSize(difference);
    fill('#00D100');
    text('Emma',100,100);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
    if(results.length > 0){

        wrist_l_x = results[0].pose.leftWrist.x;
        wrist_r_x = results[0].pose.rightWrist.x;
        difference =floor( wrist_l_x - wrist_r_x);

        console.log(results);
    }
}