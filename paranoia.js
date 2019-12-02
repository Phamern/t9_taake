let video;
let width = 640;
let height = 520;

let snapCount = 0;
let snapInterval;

function setup() {

  // load images
  let pic1 = localStorage.getItem('pic0');
  if(pic1){
    showSnap(pic1);
  }
  let pic2 = localStorage.getItem('pic1');
  if(pic2){
    showSnap(pic2);
  }
  let pic3 = localStorage.getItem('pic2');
  if(pic3){
    showSnap(pic3);
  }
  let pic4 = localStorage.getItem('pic3');
  if(pic4){
    showSnap(pic4);
  }

  if(!pic1) {
    // capture images
      createCanvas(width, height);
      video = createCapture(VIDEO, function(event) {
      snapInterval = setInterval(takesnap, 1000);
    });
    video.size(width, height);
    video.hide();
  }
};


function takesnap() {
  if(snapCount < 5) {

    let snap = video.get();
    var myImage = snap.canvas.toDataURL("image/png"); 
    localStorage.setItem('pic'+ snapCount, myImage);

    //showSnap(myImage);
  } else {
    clearInterval(snapInterval);
    video.remove();
  }
  snapCount++;
};

function showSnap(myImage) {
  // create image element
  let images = document.querySelector(".images");
  let image = document.createElement('img');
  image.src = myImage;

  // append image to page
  images.appendChild(image);
}