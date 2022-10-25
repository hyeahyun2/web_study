const sect4 = window.document.getElementById('programLink');
const wrap = sect4.querySelector('.wrap');
const wrapInner = wrap.querySelector('.wrapInner');
const anchor = wrapInner.querySelectorAll('a');

// wrapInner.prepend(anchor[anchor.length-1])
const anClone0 = anchor[0].cloneNode(true);
const anClone1 = anchor[1].cloneNode(true);
const anClone2 = anchor[2].cloneNode(true);
// console.log(anClone1);
wrapInner.append(anClone0);
wrapInner.append(anClone1);
wrapInner.prepend(anClone2);

anchor[0].classList.add("mainSlide");
anchor[0].classList.add('visible')

// 슬라이드 로테이션? 스크립트
let next = ()=>{
    const nAnchor = wrapInner.querySelectorAll('a');
    wrapInner.style.transform = `translate(-20vw)`;
    wrapInner.style.transition = `1s`
    nAnchor[1].classList.remove('mainSlide');
    nAnchor[1].classList.remove('visible');
    
    nAnchor[2].classList.add('mainSlide');
    nAnchor[2].classList.add('visible');
    setTimeout( ()=> {
        wrapInner.append(nAnchor[0]);
        wrapInner.style.transition = `0s`;
        wrapInner.style.transform = `translate(0vw)`;
    }, 1000)
    
    
}
setInterval(next, 2000);