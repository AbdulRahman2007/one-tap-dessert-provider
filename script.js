let menu = document.querySelector('.bx-menu');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click',function(){
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('nav-toggle');
})

window.addEventListener('scroll', () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('nav-toggle');
})
const header = document.querySelector('header');
window.onscroll = function (){
    if(document.documentElement.scrollTop > 5){
        header.style.height = '70px';
        header.style.backgroundColor = '#fff';
    }else{
        header.style.height = '100px';
        header.style.backgroundColor = '#fff';
    }
}
const accordion = document.querySelectorAll('.contentBox');
for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}