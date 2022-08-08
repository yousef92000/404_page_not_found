const navMenu = document.getElementById('nav__menu');
const navClose =document.getElementById('nav__close');
const navToggle = document.getElementById('nav__toggle');

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

//////////////////////////////////////////////////////
const navLink = document.getElementById('nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav__menu');
    navMenu.classList.remove('show__menu');
}
navLink.forEach(n => n.addEventListener('click',linkAction));
////////////////////////////////////////////////////////////////