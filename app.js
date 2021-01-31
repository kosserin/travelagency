const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks= document.querySelectorAll('.nav-links li');

    //Pokazivanje kada se pritisne burger
    burger.addEventListener('click',()=>{
     nav.classList.toggle('nav-active');  
//fade efekat za linkove
     navLinks.forEach((link,index) => {
        if(link.style.animation){
            link.style.animation = '';
        }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/5 + .2}s`;
        }
    });
    //burger animacija
    burger.classList.toggle('toggle');
    });
}

    navSlide();
