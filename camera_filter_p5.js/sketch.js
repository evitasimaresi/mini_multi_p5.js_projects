var video;
function setup() {
  createCanvas(windowHeight, windowWidth);
  background(51);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
}

function draw() {
  background(255);
  let gridSize = int(map(mouseX, 0, width, 15, 50));
  video.loadPixels();
  for (let y = 0; y < video.height; y += gridSize) {
    for (let x = 0; x < video.width; x += gridSize) {
      let index = (y * video.width + x) * 4;
      let r = video.pixels[index];
      let dia = map(r, 0, 255, gridSize, 2);
      fill(255, 0, 0);
      noStroke();
      circle(x + gridSize / 2, y + gridSize / 2, dia);
    }
  }
}