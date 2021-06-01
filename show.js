const diy = document.querySelector('.diy');
const travel = document.querySelector('.travel');

const domain = document.querySelector('.domain');
const domainFist = document.querySelector('.domain .first');
const domainSed = document.querySelector('.domain .sed');
const domainThird = document.querySelector('.domain .third');

const money = document.querySelector('.money');
const moneyFist = document.querySelector('.money .first');
const moneySed = document.querySelector('.money .sed');
const moneyThird = document.querySelector('.money .third');
const moneyFord = document.querySelector('.money .ford');

const check = document.querySelector('.check');
const checkTop= document.querySelector('.check .top');
const checkBottom = document.querySelector('.check .bottom');

const save = document.querySelector('.save');
const saveFirst = document.querySelector('.save .first');
const saveSed = document.querySelector('.save .sed');
const saveThird = document.querySelector('.save .third');


window.addEventListener('scroll',function(){
    const windowScroll = window.scrollY;

    if(windowScroll > diy.scrollHeight){
        diy.classList.add('focus');
        travel.classList.add('focus');
    }

    if(windowScroll > domain.scrollHeight) {
        domainFist.classList.add('focus');
        domainSed.classList.add('focus');
        domainThird.classList.add('focus');
    }

    if(windowScroll > money.scrollHeight) {
        moneyFist.classList.add('focus');
        moneySed.classList.add('focus');
        moneyThird.classList.add('focus');
        moneyFord.classList.add('focus');
    }

    if(windowScroll > check.scrollHeight) {
        checkTop.classList.add('focus');
        checkBottom.classList.add('focus');
    }

    if(windowScroll > save.scrollHeight) {
        saveFirst.classList.add('focus');
        saveSed.classList.add('focus');
        saveThird.classList.add('focus');
    }
})