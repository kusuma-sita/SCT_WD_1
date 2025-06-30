const navBtn=document.querySelector('.menu_btn');
const navList=document.querySelector('.nav-links');

navBtn.addEventListener("click",function(){
    navList.classList.toggle('active');
})