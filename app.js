
    var arr = [
        "img/slide-1.jpg",
        "img/slide-2.jpg",
        "img/slide-3.jpg",

    ];
    var index = 0;
    function pre() {
        index--;
        if (index < 0) index = arr.length - 1;
        var img = document.getElementById("hinh");
        img.src = arr[index];
    }
    function next() {
        index++;
        if (index == arr.length) index = 0;
        var img = document.getElementById("hinh");
        img.src = arr[index];
    }

    setInterval("next()", 3000);

       
       

let slideIndex = 0;


function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
showSlides();