const sect4 = window.document.getElementById('programLink');
const wrap = sect4.querySelector('.wrap');
const wrapInner = wrap.querySelector('.wrapInner');
const anchor = wrapInner.querySelectorAll('a');

// wrapInner.prepend(anchor[anchor.length-1])
const anClone0 = anchor[0].cloneNode(true);
const anClone1 = anchor[1].cloneNode(true);
const anClone2 = anchor[2].cloneNode(true);
// console.log(anClone0);
wrapInner.append(anClone0);
wrapInner.prepend(anClone2);
let n = 20;
// wrapInner.style.transform = `translateX(-20vw)`;
let next = ()=>{
  let NewAnchor = wrapInner.querySelectorAll('a');
  // wrapInner.style.transform = `translateX(-${n}vw)`;
}
// setInterval(next, 1000);
// 
