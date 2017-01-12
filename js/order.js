//Body images
var bodyImages = [
  "img/ship/cruise.png",
  "img/ship/cargo.png",
  "img/ship/viper.png"
];

var bodyCost = [
  1000,
  2500,
  7500
];

var bodyText = [
  "Cruiser",
  "Cargo Hauler",
  "Viper Sports Ship"
];

//Utility images
var utilImages = [
  "img/ship/miner.png",
  "img/ship/laser.png"
];

var utilCost = [
  200,
  400
];

var utilText = [
  "Mining laser",
  "Civilian defense laser"
];

//Scanner images
var scanImages = [
  "img/ship/scan1.png",
  "img/ship/scan2.png",
  "img/ship/scan3.png"
];

var scanCost = [
  100,
  200,
  400
];

var scanText = [
  "100km^2 scanner",
  "250km^2 scanner",
  "1000km^2 scanner"
];

//Trail images
var trailImages = [
  "img/ship/orange.png",
  "img/ship/blue.png"
];

var trailCost = [
  0,
  0
];

var trailText = [
  "Orange trails",
  "Blue trails"
];

var bodyIndex, utilIndex, scanIndex, trailIndex;

bodyIndex = utilIndex = scanIndex = trailIndex = 0; //set to 0 initially

var bodyImage, utilImage, scanImage, trailImage;

window.onload = function()
{
  bodyImage = document.getElementById("bodyImg");
  utilImage = document.getElementById("utilImg");
  scanImage = document.getElementById("scanImg");
  trailImage = document.getElementById("trailImg");

  onShipChanged();
}

function onBodyChange(offset)
{
  var offsetIndex = (bodyIndex + offset);

  if (offsetIndex < 0) {
    bodyIndex = bodyImages.length + offset;
  } else {
    bodyIndex = (bodyIndex + offset) % bodyImages.length;
  }

  onShipChanged();
}

function onUtilChange(offset)
{
  var offsetIndex = (utilIndex + offset);

  if (offsetIndex < 0) {
    utilIndex = utilImages.length + offset;
  } else {
    utilIndex = (utilIndex + offset) % utilImages.length;
  }

  onShipChanged();
}

function onScanChange(offset)
{
  var offsetIndex = (scanIndex + offset);

  if (offsetIndex < 0) {
    scanIndex = scanImages.length + offset;
  } else {
    scanIndex = (scanIndex + offset) % scanImages.length;
  }

  onShipChanged();
}

function onTrailChange(offset)
{
  var offsetIndex = (trailIndex + offset);

  if (offsetIndex < 0) {
    trailIndex = trailImages.length + offset;
  } else {
    trailIndex = (trailIndex + offset) % trailImages.length;
  }

  onShipChanged();
}

//update images
function onShipChanged() {
  bodyImage.src = bodyImages[bodyIndex];
  utilImage.src = utilImages[utilIndex];
  scanImage.src = scanImages[scanIndex];
  trailImage.src = trailImages[trailIndex];
}

function saveSelection() {
  localStorage.setItem("chosenBody", bodyIndex);
  localStorage.setItem("chosenUtil", utilIndex);
  localStorage.setItem("chosenScan", scanIndex);
  localStorage.setItem("chosenTrail", trailIndex);
}

function loadSelection() {
  bodyIndex = localStorage.getItem("chosenBody");
  utilIndex = localStorage.getItem("chosenUtil");
  scanIndex = localStorage.getItem("chosenScan");
  trailIndex = localStorage.getItem("chosenTrail");
}
