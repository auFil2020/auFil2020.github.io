
// Get the modal
var modal = document.getElementsByClassName("modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.getElementsByClassName("icon");
console.log(images);
var histoires = document.getElementsByClassName("hist");
//var hist = document.getElementById("hist_limo");
var modalImg = document.getElementsByClassName("modal-content");
console.log(modalImg);
var captionText = document.getElementById("caption");

var i;
var span = document.getElementsByClassName("close");

for (i = 0; i < images.length - 1; i++){
images[i].onclick = function(){
  modal[i].style.display = 'block';
  histoires[i].style.display = 'block';
  modalImg[i].src = histoires[i].src;
  //modalImg.src = images[i].src;
  captionText.innerHTML = histoires[i].alt;
  // Get the <span> element that closes the modal
  span[i].onclick = function() {
    console.log(i);
    modal[i].style.display = 'none';
    histoires[i].style.display = 'none';
  }
}
}
