
// Get the modal
var modal = document.getElementsByClassName("modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.getElementsByClassName("icon");
console.log(images);
var histoires = document.getElementsByClassName("hist");
//var hist = document.getElementById("hist_limo");
var modalImg = document.getElementsByClassName("modal-content");
console.log(modalImg);
var captionText = document.getElementsByClassName("alternative");

var i;
var j;
var span = document.getElementsByClassName("close");

// for (i = 0; i < images.length - 1; i++){
// images[i].onclick = function(){
//   modal[i].style.display = 'block';
//   histoires[i].style.display = 'block';
//   modalImg[i].src = histoires[i].src;
//   //modalImg.src = images[i].src;
//   captionText[i].innerHTML = histoires[i].alt;
//   // Get the <span> element that closes the modal
//   span[i].onclick = function() {
//     console.log(i);
//     modal[i].style.display = 'none';
//     histoires[i].style.display = 'none';
//   }
// }
// }

for (i = 0, len = images.length; i < len; i++){
  //passing every 'i' before going to function
    modalAppear(i, images[i]);
  }

function modalAppear (i, images) {

images.onclick = function(){

    modal[i].style.display = 'block';
    histoires[i].style.display = 'block';
    console.log(i);
    modalImg[i].src = histoires[i].src;
    //modalImg.src = images[i].src;
    captionText[i].innerHTML = histoires[i].alt;
    // Get the <span> element that closes the modal
    span[i].onclick = function() {
      modal[i].style.display = 'none';
      histoires[i].style.display = 'none';
    }
}
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
