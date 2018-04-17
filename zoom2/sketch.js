/*
 *
 * Cinema Expandido WEB
 * Zoom (10 de abril 2018)
 * Renata Campuzano
 * 
 *
 * URL: 
 */


/*
 *****************************************
 *****************************************
 * VARIABLES
 *****************************************
 *****************************************
 */

var capture;
var video;
var tracker;

/*
 *****************************************
 *****************************************
 * LIFE CYCLE METHODS
 *****************************************
 *****************************************
 */


function preload() {
  video = createVideo("assets/videos/fingers.mov");
}

function setup() {
  createCanvas(800,600);
  initializeCamera();
  initializeVideo();
  initializeTracker()
}

function draw() {
  drawCamera();
  //drawVideo();
  drawTracker(); 
}

/*
 *****************************************
 *****************************************
 * CAMERA METHODS
 *****************************************
 *****************************************
 */
 
 function initializeCamera() {
  capture= createCapture(VIDEO);
  capture.hide();
  imageMode(CENTER);
}

function drawCamera() {
  
  
  background(0);
  var positions2 = tracker.getCurrentPosition();
  
  if (positions2.length>0){
  var differenceW = (positions2[14][0])-(positions2[0][0]);
  var differenceH = (positions2[7][1])-(positions2[33][1]);
  var zomW = round(map(differenceW, 0, windowWidth, 0, 800));
  var zomH = round(map(differenceH, 0, windowHeight, 0, 600));
  image(capture,windowWidth/2,windowHeight/2, zomW ,zomH);
  }
}

function initializeVideo(){
  video.hide();
  video.loop();
}

function drawVideo(){

  image(video,windowWidth/2,windowHeight/2);
}

/*
 *****************************************
 *****************************************
 * TRACKER METHODS
 *****************************************
 *****************************************
 */
 
 function initializeTracker(){
tracker= new clm.tracker();
tracker.init(pModel);
tracker.start(capture.elt);
}

function drawTracker(){
  var positions = tracker.getCurrentPosition();
  //var punto0x = positions[0];
  
  
  
  if (positions.length>0){
  
    for (var i=0; i<positions.length; i++){
      noStroke();
      fill(255,0,0);
      ellipse(positions[i][0], positions[i][1], 10, 10)
      
      
      
    }
    
    
  }
  
 
 
 
}
 
 