let arrowLeft = document.getElementById('arrowLeft'),
    arrowRight = document.getElementById('arrowRight');
let slideIndex = 2;
arrowLeft.addEventListener('click', function () {
    let i;
    let x = document.getElementsByClassName("selected-date");
    let z = document.getElementsByClassName('date-of-performance');
    if (slideIndex > x.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < x.length; i++) {
      z[i].classList.remove('date-of-performance-default');
      z[i].classList.remove('date-of-performance-selected');
      z[i].classList.add('date-of-performance');
    }
    x[slideIndex-1].style.display = "flex";
    z[slideIndex-1].classList.toggle('date-of-performance-selected');
    changeBg(slideIndex);
    slideIndex -= 1;
});
arrowRight.addEventListener('click', function () {
  let i;
  let x = document.getElementsByClassName("selected-date");
  let z = document.getElementsByClassName('date-of-performance');
  if (slideIndex >= x.length) {slideIndex = 0}
  if (slideIndex < 1) {this.slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < x.length; i++) {
    z[i].classList.remove('date-of-performance-default');
    z[i].classList.remove('date-of-performance-selected');
    z[i].classList.add('date-of-performance');
  }
  x[slideIndex].style.display = "flex";
  z[slideIndex].classList.toggle('date-of-performance-selected');
  changeBg(slideIndex);
  slideIndex += 1;
});
function changeBg(slideInd) {
  poster = document.getElementById('poster');
  slideInd == 0  ? poster.style.backgroundImage="url(\"./img/preview1.png\")" : console.log('slideInd 0 not working');
  slideInd == 1  ? poster.style.backgroundImage="url(\"../img/preview2.png\")" : console.log('slideInd 1 not working');
  slideInd == 2  ? poster.style.backgroundImage="url(\"./img/preview3.png\")" : console.log('slideInd 2 not working');
  slideInd == 3  ? poster.style.backgroundImage="url(\"./img/preview4.png\")" : console.log('slideInd 3 not working');
  slideInd == 4  ? poster.style.backgroundImage="url(\"./img/preview5.png\")" : console.log('slideInd 4 not working');
}

function showSelectedPerformance(n) {
  let x = document.getElementsByClassName("selected-date");
  let z = document.getElementsByClassName('date-of-performance');
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}
