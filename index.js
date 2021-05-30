
// Get the modal
var modal = document.getElementsByClassName("modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.getElementsByClassName("icon");

var histoires = document.getElementsByClassName("hist");

var intro = document.getElementsByClassName("intro");
var modalintro = document.getElementsByClassName("modalIntro");
var modalImgIntro = document.getElementsByClassName("modal-content2");
var spanIntro = document.getElementsByClassName("close2");
var acceder = document.getElementsByClassName("acceder");

var captionTextIntro = document.getElementsByClassName("alternative2");

var modalImg = document.getElementsByClassName("modal-content");

var captionText = document.getElementsByClassName("alternative");

var i;
var j;
var span = document.getElementsByClassName("close");

window.onload = function(){
  modalintro[0].style.display = 'block';
  modalImgIntro[0].src = intro[0].src;


  // Get the <span> element that closes the modal
  spanIntro[0].onclick = function() {
    modalintro[0].style.display = 'none';
    intro[0].style.display = 'none';
  }
  acceder[0].onclick = function() {
    modalintro[0].style.display = 'none';
    intro[0].style.display = 'none';
  }

}

for (i = 0, len = images.length; i < len; i++){
  //passing every 'i' before going to function
    modalAppear(i, images[i]);
  }

function modalAppear (i, images) {

    images.onclick = function(){

      modal[i].style.display = 'block';
      console.log(i);
      modalImg[i].src = histoires[i].src;

      span[i].onclick = function() {
        modal[i].style.display = 'none';
        histoires[i].style.display = 'none';
      }
    }
}

var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 