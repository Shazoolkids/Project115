function preload() {}
function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110,250);
  video = createCapture(VIDEO);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
 }
 function modelLoaded() 
 {
   console.log("PoseNet Is Initialized");
 }
function gotPoses(results) 
{
  if(results.length > 0 )
 {
   console.log(results);
   console.log("nose x = " + results[0].pose.nose.x);
   console.log("nose y = " + results[0].pose.nose.y);
 }
}
function take_snapshot() {
  save("woah.png");
}
