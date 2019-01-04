let slideIndex = 1;
showDivs(slideIndex);

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
    z[i].style.backgroundColor = "#4F4F4F";
  }
   x[slideIndex-1].style.display = "flex";
   z[slideIndex-1].style.backgroundColor = "#E14927";
}
