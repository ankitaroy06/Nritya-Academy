window.onload=function(){

    var menuForHamburger = 0;

    function menuList(){
        console.log("hello");    
        if(navMenu.style.display == "none"){
            menuForHamburger = 1;
            navMenu.style.display = "flex";
        }
        else{
            navMenu.style.display = "none";
            console.log("no");}
    }

    function menuDisappear(){
        if(menuForHamburger == 1)
            navMenu.style.display = "none";
    }

    const burger = document.getElementById("menu-icon");
    const navMenu = document.querySelector(".navbar ul");
    const navEachMenu = document.querySelectorAll(".navbar ul li");
    
    burger.addEventListener("click", menuList);

    for(let i=0;i<navEachMenu.length;i++)
    navEachMenu[i].addEventListener("click", menuDisappear);
    
}