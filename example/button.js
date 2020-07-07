
import { GradualButton } from '../lib';
import './style.css'

let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');

new GradualButton({
    root: 'btn2'
})

let timer
btn.addEventListener('mouseenter', e => {
    bilibili();
})

btn.addEventListener('mouseleave', e => {
    killBilibili();
})

let i = 0;

function bilibili () {
    timer = setInterval(() => {
        if (i > 360) {
            i = 0;
        }
        i += 10;
        btn.style  = `--angle: ${i}deg;--borderW:3px;`;
    }, 10)
}
function killBilibili() {
    btn.style  = ``;
    clearInterval(timer);
    timer = null;
}