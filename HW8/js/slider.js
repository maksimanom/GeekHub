let slideIndex = 2;

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
   let i;
   let x = document.getElementsByClassName("selected-date");
   let z = document.getElementsByClassName('date-of-performance');
   if (n > x.length) {slideIndex = 1}
   if (n < 1) {slideIndex = x.length} ;
   for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
   }
  for (i = 0; i < x.length; i++) {
    z[i].classList.remove('date-of-performance-default');
    z[i].classList.remove('date-of-performance-selected');
    z[i].classList.add('date-of-performance');
  }
   x[slideIndex-1].style.display = "flex";
   z[slideIndex-1].classList.toggle('date-of-performance-selected')
}
