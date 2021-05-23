var btn = document.getElementById("ham-btn");
var img = document.getElementById("mobile-ham");
var menu = document.getElementById("mobile-menu");

btn.onclick = function(){
    if(menu.style.left == "-200%"){
        img.src = "images/icon-close.svg";
        menu.style.left = "10%"
    }
    else{
        img.src = "images/icon-hamburger.svg";
        menu.style.left = "-200%"
    }
}