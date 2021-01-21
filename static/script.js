window.onload=function(){

    function menuList(){
        console.log("hello");    
        if(navMenu.style.display == "none"){
            navMenu.style.display = "flex";
        }
        else{
            navMenu.style.display = "none";
            console.log("no");}
    }

    function menuDisappear(){
        console.log("hello again");
        navMenu.style.display = "none";
    }

    const burger = document.getElementById("menu-icon");
    const navMenu = document.querySelector(".navbar ul");
    const navEachMenu = document.querySelectorAll(".navbar ul li");
    
    burger.addEventListener("click", menuList);

    for(let i=0;i<navEachMenu.length;i++)
    navEachMenu[i].addEventListener("click", menuDisappear);
    
}