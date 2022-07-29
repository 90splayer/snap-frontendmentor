
function openNav() {
    document.querySelector(".wrapper").classList.add("side-panel-open");
}

function closeNav() {
  document.querySelector(".wrapper").classList.remove("side-panel-open");
  document.querySelector(".dropcontent").classList.remove("showFeatured");
  document.querySelector(".dropcontent").classList.remove("showCompany");
}

function openFeatures() {
  document.querySelector(".dropcontent").classList.toggle("showFeatured");
}

function openCompany() {
  document.querySelector(".dropcontent").classList.toggle("showCompany");
}


// function newImage(){
//   if ($(window).width() > 800) {
//     document.getElementById("homeimg").src = "images/image-hero-desktop.png";
//   }
//   else {
//     alert('less than 960');
//     // document.getElementById("homeimg").src = "images/image-hero-mobile.png";
//   }
// }

// $(window).resize(function() {
//   console.log("resizing")
//   if (screen.width > 800) {
//     document.getElementById("homeimg").src = "images/image-hero-desktop.png";
//   }
//  else {
//     alert('More than 960');
//  }
// });

function changeImage(){
  console.log(window.innerWidth)
  if (window.innerWidth > 1200) {
        document.getElementById("homeimg").src = "images/image-hero-desktop.png";
      }
      else{
        document.getElementById("homeimg").src = "images/image-hero-mobile.png";
      }
}

window.addEventListener('load', changeImage);
window.addEventListener('resize', changeImage);

