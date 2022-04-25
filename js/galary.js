let pageId = document.getElementsByClassName('page-id');

if (pageId[0].id == 1) {
  var imageUrls = [
    'url("../assets/img/header-houses/house1/galary-popup/popup1.jpg")',
    'url("../assets/img/header-houses/house1/galary-popup/popup2.jpg")',
    'url("../assets/img/header-houses/house1/galary-popup/popup3.jpg")',
    'url("../assets/img/header-houses/house1/galary-popup/popup4.jpg")',
    'url("../assets/img/header-houses/house1/galary-popup/popup5.jpg")',
  ];
} else if (pageId[0].id == 2) {
  var imageUrls = [
    'url("../assets/img/header-houses/house2/galary-popup/popup1.png")',
    'url("../assets/img/header-houses/house2/galary-popup/popup2.png")',
    'url("../assets/img/header-houses/house2/galary-popup/popup3.png")',
    'url("../assets/img/header-houses/house2/galary-popup/popup4.png")',
    'url("../assets/img/header-houses/house2/galary-popup/popup5.png")',
  ];
} else if (pageId[0].id == 3) {
  var imageUrls = [
    'url("../assets/img/header-houses/house3/galary-popup/popup1.png")',
    'url("../assets/img/header-houses/house3/galary-popup/popup2.png")',
    'url("../assets/img/header-houses/house3/galary-popup/popup3.png")',
    'url("../assets/img/header-houses/house3/galary-popup/popup4.png")',
    'url("../assets/img/header-houses/house3/galary-popup/popup5.png")',
  ];
} else if (pageId[0].id == 4) {
  var imageUrls = [
    'url("../assets/img/header-houses/house4/galary-popup/popup1.png")',
    'url("../assets/img/header-houses/house4/galary-popup/popup2.png")',
    'url("../assets/img/header-houses/house4/galary-popup/popup3.png")',
    'url("../assets/img/header-houses/house4/galary-popup/popup4.png")',
    'url("../assets/img/header-houses/house4/galary-popup/popup5.png")',
  ];
} else if (pageId[0].id == 5) {
  var imageUrls = [
    'url("../assets/img/header-houses/house5/galary-popup/popup1.png")',
    'url("../assets/img/header-houses/house5/galary-popup/popup2.png")',
    'url("../assets/img/header-houses/house5/galary-popup/popup3.png")',
    'url("../assets/img/header-houses/house5/galary-popup/popup4.png")',
    'url("../assets/img/header-houses/house5/galary-popup/popup5.png")',
  ];
} else if (pageId[0].id == 6) {
  var imageUrls = [
    'url("../assets/img/header-houses/house6/galary-popup/popup1.png")',
    'url("../assets/img/header-houses/house6/galary-popup/popup2.png")',
    'url("../assets/img/header-houses/house6/galary-popup/popup3.png")',
    'url("../assets/img/header-houses/house6/galary-popup/popup4.png")',
    'url("../assets/img/header-houses/house6/galary-popup/popup5.png")',
  ];
} else if (pageId[0].id == 7) {
  var imageUrls = [
    'url("../assets/img/header-houses/house7/galary-popup/popup1.png")',
    'url("../assets/img/header-houses/house7/galary-popup/popup2.png")',
    'url("../assets/img/header-houses/house7/galary-popup/popup3.png")',
    'url("../assets/img/header-houses/house7/galary-popup/popup4.png")',
    'url("../assets/img/header-houses/house7/galary-popup/popup5.png")',
  ];
} else if (pageId[0].id == 8) {
  var imageUrls = [
    'url("../assets/img/header-houses/house8/galary-popup/popup1.png")',
    'url("../assets/img/header-houses/house8/galary-popup/popup2.png")',
    'url("../assets/img/header-houses/house8/galary-popup/popup3.png")',
    'url("../assets/img/header-houses/house8/galary-popup/popup4.png")',
    'url("../assets/img/header-houses/house8/galary-popup/popup5.png")',
  ];
} else if (pageId[0].id == 9) {
  var imageUrls = [
    'url("../assets/img/header-houses/house9/galary-popup/popup1.png")',
    'url("../assets/img/header-houses/house9/galary-popup/popup2.png")',
    'url("../assets/img/header-houses/house9/galary-popup/popup3.png")',
    'url("../assets/img/header-houses/house9/galary-popup/popup4.png")',
    'url("../assets/img/header-houses/house9/galary-popup/popup5.png")',
  ];
} 




var imageNumber = imageUrls.length;

function imagePop(id) {
  document.getElementById("imagePopId").style.display = "block";
  document.getElementsByTagName("body")[0].style.overflowY = "hidden";

  var imageName = document.getElementById(id + "-image").style.backgroundImage;

  var imageIndex = 0;

  imageIndex = imageUrls.indexOf(imageName);

  document.getElementsByClassName("imageContain")[0].style.animation =
    "he 800ms forwards";

  document.getElementsByClassName("imageContain")[0].style.backgroundImage =
    imageUrls[imageIndex];
}

function imageChange(id) {
  var imageName = document.getElementById(id).style.backgroundImage;

  var imageIndex = 0;

  imageIndex = imageUrls.indexOf(imageName);

  if (imageIndex >= imageNumber - 1) imageIndex = 0;
  else imageIndex++;

  document.getElementById(id).style.backgroundImage = imageUrls[imageIndex];
}

function imageMoveLeft() {
  var imageName =
    document.getElementById("imageContainId").style.backgroundImage;

  var imageIndex = 0;

  imageIndex = imageUrls.indexOf(imageName);

  if (imageIndex <= 0) imageIndex = imageNumber - 1;
  else imageIndex--;

  document.getElementById("imageContainId").style.backgroundImage =
    imageUrls[imageIndex];
}

function imageMoveRight() {
  var imageName =
    document.getElementById("imageContainId").style.backgroundImage;

  var imageIndex = 0;

  imageIndex = imageUrls.indexOf(imageName);

  if (imageIndex >= imageNumber - 1) imageIndex = 0;
  else imageIndex++;

  document.getElementById("imageContainId").style.backgroundImage =
    imageUrls[imageIndex];
}

function imagePopNone() {
  document.getElementsByClassName("imagePop")[0].style.display = "none";
  document.getElementsByTagName("body")[0].style.overflowY = "scroll";
}
