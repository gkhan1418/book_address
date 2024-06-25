let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

AOS.init();

window.addEventListener("scroll", function(){
    var backToTopButton = document.getElementById("back-to-top");
    if(window.scrollY > 300){
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
    });
    document.getElementById("back-to-top").addEventListener("click", scrollToTop);

    function scrollToTop(){
    window.scroll({
      top:0,
    });
  };