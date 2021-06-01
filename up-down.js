var bgItems = $('.bg-items');
var backgrounds = [
  '#bc382e','#388d80','#4583aa'];
var current = 0;

function nextBackground() {
    bgItems.css(
        'background',
    backgrounds[current = ++current % backgrounds.length]);

    setTimeout(nextBackground, 5000);
}
setTimeout(nextBackground, 5000);
bgItems.css('background', backgrounds[0]);

const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');

function downUp() {
   if (bg1.classList.contains('active')) {
       bg1.classList.remove('active');
       bg2.classList.add('active');
       bg3.classList.remove('active');
   }else if(bg2.classList.contains('active')) {
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    bg3.classList.add('active');
   }else if(bg3.classList.contains('active')) {
    bg1.classList.add('active');
    bg2.classList.remove('active');
    bg3.classList.remove('active');

    }
}
 setInterval(downUp,5000);