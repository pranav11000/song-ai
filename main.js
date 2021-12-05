song1="";
song2="";
song1_status="";
song2_status="";
score_right_wrist=0;
score_left_wrist=0;
rightWristX=0;
rightWristY=0;
leftWristY=0;
leftWristX=0;

function preload()
{
song1 = loadSound("Never Gonna Give You Up Original.mp3");
song2 = loadSound("Egzod & EMM - Game Over (Mp3Noi.com).mp3");
}

function setup()
{
  canvas = createCanvas(500, 478);
  canvas.center();
 
  video = createCapture(VIDEO);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
console.log('posenet is initialized');
}

function gotPoses(results)
{
if(results.length > 0)
 {
   console.log(results);
   scoreLeftWrist = results[0].pose.keypoints[9].score;
   console.log("scoreLeftWrist =" + scoreLeftWrist);
   
   leftWristX = results[0].pose.leftWrist.x;
   leftWristY = results[0].pose.leftWrist.y;
   console.log("leftwristX =" + leftWristX + "leftWristY =" + leftWristY);
   
   rightWristX = results[0].pose.rightWrist.x;
   rightWristY = results[0].pose.rightWrist.y;
   console.log("rightWristX = " + rightWristX + "rightWristY =" + rightWristY);
 }
}

function draw() 
{
  image(video, 0, 0, 600, 500);
  song1_status = song1.isPlaying();
  song2_status = song2.isplaying();
  fill("#FF0000");
  stroke("#FF0000");
  if(scoreRightWrist > 0.2) 
  { 
    circle(rightWristX,rightWristY,20); 
    song2.stop(); 
    if(song1_status == false) 
    {
       song1.play(); 
      document.getElementById("song_name").innerHTML = "Playing - Rickroll"
     } 
    }
    if(scoreLeftWrist > 0.2) 
  { 
    circle(leftWristX,leftWristY,20); 
    song1.stop(); 
    if(song1_status == false) 
    {
       song2.play(); 
      document.getElementById("song_name").innerHTML = "Playing - game over"
     } 
    }
}

function play()
{
  
}