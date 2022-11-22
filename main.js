nose_x = 0
nose_y = 0
difference = 0
right_Wrist_x = 0
left_Wrist_x = 0

function setup() {
    video = createCapture(VIDEO)
    video.size(450,450)
    canvas = createCanvas(450,450) 
    canvas.position(560.150)
    poseNet = ml5.poseNet(video,modelloaded)
    poseNet.on('pose', gotPoses)
}
function draw() {
    background("#66b0fa")
    document.getElementById("square_side").innerHTML = "width and height of a square will be " + difference  + " px"
    fill("#66fa68")
    square(nose_x,nose_x,difference)
}

function modelloaded() {
    console.log("Posenet is initialised")
}

function gotPoses(results) {
    if(results.length>0) {
        nose_x = results[0].pose.nose.x 
        nose_y = results[0].pose.nose.y 
        console.log("nose x =  " + nose_x + "nose y = " + nose_y);
        left_Wrist_x = results[0].pose.leftWrist.x
        right_Wrist_x = results[0].pose.rightWrist.x 
        difference = floor(left_Wrist_x - right_Wrist_x);
        console.log("left wrist x = " + left_Wrist_x + " right wrist x = " + right_Wrist_x)
    }
}