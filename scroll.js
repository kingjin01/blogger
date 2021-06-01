const header = document.querySelector('.top');
const blog = document.querySelector('.made');
const text = document.querySelector('.logo span');
const login = document.querySelector('.login');

window.addEventListener('scroll',scroll)

function scroll() {
    const scrollY = window.scrollY;

    if(scrollY > 0) {
        header.classList.add('scroll');
        blog.classList.add('scroll');
        text.classList.add('black');
        login.classList.add('black');
    }else {
        header.classList.remove('scroll');
        blog.classList.remove('scroll');
        text.classList.remove('black');
        login.classList.remove('black');
    }
}