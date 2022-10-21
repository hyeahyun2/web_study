const sect4 = window.document.getElementById('programLink');
const wrap = sect4.querySelector('.wrap');
const wrapInner = wrap.querySelector('.wrapInner');
const anchor = wrapInner.querySelectorAll('a');

wrapInner.prepend(anchor[anchor.length-1])
const anClone1 = anchor[0].cloneNode(true);
const anClone2 = anchor[2].cloneNode(true);
wrapInner.prepend(anClone1);
wrapInner.append(anClone2);
wrapInner.style.transform = `translateX(-20vw)`;


// let state = 1;
// let wid = 32;
// let nextSlider = () => {
//     wid += 20;
//     wrap.style.transition = '1s'
//     wrap.style.transform = `translateX(-${sNum}%)`;
//     setTimeout( ()=> {
//         // console.log(sNum);

//         state = 1;
//         if(sNum == 80) {
//             sList.style.transition = '0s'
//             sList.style.transform = `translateX(-${32}vw)`;
//             sNum = 32;
//         }
//     }, 1000)
// }
// let timer = setInterval(nextSlider, 3000);


// const anClone1 = anchor[0].cloneNode(true);
// wrap.append(anClone1);
// const anClone2 = anchor[2].cloneNode(true);
// wrap.prepend(anClone2);



// const sWrap = window.document.getElementById('sliderWrap');
// const sList = window.document.getElementById('sliderList');
// const bList = window.document.getElementById('btnList');

// const lis = sList.querySelectorAll('li');
// const btn = bList.querySelectorAll('button');

// // console.log(sWrap, sList, bList, lists, btn)

// // 클론 시  cloneNode(true)!!!
// const lisCopy1 = lis[0].cloneNode(true);
// // append :: 뒤쪽으로추가
// sList.append(lisCopy1)
// const lisCopy2 = lis[lis.length - 1].cloneNode(true);
// // prepend :: 앞쪽으로 추가
// sList.prepend(lisCopy2);

// // 동적 스타일 넓이 만들어준다.
// // let pos = sList.clientWidth;
// let lisNum = lis.length + 2;
// sList.style.width = `${lisNum * 100}%`;
// // 초기값 1이 되도록 옮겨주기.
// sList.style.transform = `translateX(-20%)`;




// let state = 1;
// let sNum = 20;


// let nextSlider = () => {
//     sNum += 20;
//     sList.style.transition = '1s'
//     sList.style.transform = `translateX(-${sNum}%)`;
//     setTimeout( ()=> {
//         // console.log(sNum);

//         state = 1;
//         if(sNum == 80) {
//             sList.style.transition = '0s'
//             sList.style.transform = `translateX(-${20}%)`;
//             sNum = 20;
//         }
//     }, 1000)
// }

// let prevSlider = () => {
//     sNum -= 20;
//     sList.style.transition = '1s'
//     sList.style.transform = `translateX(-${sNum}%)`;
//     setTimeout( ()=> {
//         // console.log(sNum)

//         state = 1;
//         if(sNum == 0) {
//             sList.style.transition = '0s'
//             sList.style.transform = `translateX(-${60}%)`;
//             sNum = 60;
//         }
//     }, 1000)
// }

// let timer = setInterval(nextSlider, 3000);
