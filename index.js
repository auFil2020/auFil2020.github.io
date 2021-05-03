
// Get the modal
var modal = document.getElementsByClassName("modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.getElementsByClassName("icon");

var histoires = document.getElementsByClassName("hist");

var intro = document.getElementsByClassName("intro");
var modalintro = document.getElementsByClassName("modalIntro");
var modalImgIntro = document.getElementsByClassName("modalIntroImage");
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
    //intro[0].style.display = 'block';
    modalImgIntro[0].src = intro[0].src;
    //modalImg.src = images[i].src;
    //captionText[i].innerHTML = histoires[i].alt;
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
    //histoires[i].style.display = 'block';
    console.log(i);
    modalImg[i].src = histoires[i].src;
    
    //modalImg.src = images[i].src;
    //captionText[i].innerHTML = histoires[i].alt;
    // Get the <span> element that closes the modal
    span[i].onclick = function() {
      modal[i].style.display = 'none';
      histoires[i].style.display = 'none';
    }
}
}

function closeIntro()
{

}


// function modalAppear (evt) {
//   var modal = document.getElementsByClassName("modal");
//   var histoires = document.getElementsByClassName("hist");
//   var modalImg = document.getElementsByClassName("modal-content");
//   var captionText = document.getElementsByClassName("alternative");
//     modal[i].style.display = 'block';
//     histoires[i].style.display = 'block';
//     console.log(i);
//     modalImg[i].src = histoires[i].src;
//     //modalImg.src = images[i].src;
//     captionText[i].innerHTML = histoires[i].alt;
//     // Get the <span> element that closes the modal
//     span[i].onclick = function() {
//       modal[i].style.display = 'none';
//       histoires[i].style.display = 'none';
//     }
// }
