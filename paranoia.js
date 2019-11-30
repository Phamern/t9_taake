let video;
let secondVid;
let width = 640;
let height = 520;
let button;

let snapshots = [];

function setup() {
  createCanvas(width, height);
  //background(255, 0, 105);
  video = createCapture(VIDEO);
  secondVid = createCapture(VIDEO);
  video.size(width, height);
  secondVid.size(width, height);
  video.hide();
  //loadPixels();
  //button = createButton('snap');
  //button.mousePressed(takesnap);
};


function takesnap() {
  video.loadPixels();
  if(snapshots.length < 5) {
   snapshots.push(video.get());
  }
  secondVid.loadPixels();
  if(snapshots.length < 5) {
   snapshots.push(secondVid.get());
  }
  //save();
  // tint(255, 0, 105);
  // image(video, 0, 0);
};

function draw() {
  for(let i = 0; i < snapshots.length; i++) {
    //tint(255, 50);
    image(snapshots[i], 0, 0);
    if(snapshots.length > 5) {
      break;
    };
  }
};

setInterval(takesnap, 1000);

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");

img1.innerHTML = `<img src="${snapshots[4]}"></img>`;


console.log(snapshots);