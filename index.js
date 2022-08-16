

 
function showSlides(n) {
    let i =+ n;
    let slides = [];
    slides[0] = document.getElementsByClassName("mySlides1");
    slides[1] = document.getElementsByClassName("mySlides2");
    slides[2] = document.getElementsByClassName("mySlides3");
   slides[3] = document.getElementsByClassName("mySlides4");
    

    if(i < 0){
      i === 0;
    }
    if (i < slides.length-1) {
      slides[i].style.display = 'block';
  } i++

}

window.onload = showSlides(1);
