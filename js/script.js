const navBtns = document.querySelectorAll('.nav-link');
const menuBtn = document.querySelector('#menu-btn');
const linkContainer = document.querySelector('#nav-container');
const left = document.querySelector('#left');
const right = document.querySelector('#right');
const productsSlide = document.querySelector('#products-slide');
const slideContainer = document.querySelector('#slide-container');
let productCards = [...document.querySelectorAll('.product-card')];


var l = 0;



// let sliderWidth = slideContainer.offsetWidth;
let sliderWidth =slideContainer.scrollWidth - slideContainer.clientWidth;;
let cardWidth = productCards[0].offsetWidth
console.log(sliderWidth);
console.log(cardWidth);


let value = 0;



function updateDom(arr) {
  productsSlide.innerHTML =''
  arr.forEach((card) => {productsSlide.append(card)});
}

let f =  sliderWidth/(5);
let sc = sliderWidth/(5);

function moveLeft(S){
  sc <= 0 ? sc=sliderWidth : sc -= f;
  console.log(slideContainer.scrollLeft)
  slideContainer.scroll(sc,0)

}


function moveRight(S){
  slideContainer.scroll(sc,0)
  sc >= sliderWidth ? sc=0 : sc += f;
  console.log(sliderWidth,cardWidth,value);
  console.log(sc);
  productsSlide.style.transform = `translateX(-${value}px)`;
    clearInterval(start)
  start = setInterval(()=>{
    moveRight(value)
  },3000);
}

let start = setInterval(()=>{
  moveRight(value);
},3000);



right.addEventListener('click',() => {
  // clearInterval(start)
  moveRight(value);
});

left.addEventListener('click',() => {
  // clearInterval(start)
  moveLeft(value);
});



navBtns.forEach((btn) => {

  btn.addEventListener('click',(e)=>{
    showHide()
    navBtns.forEach((btn) =>{
        btn.classList.remove('act');
    });
    console.log(btn);
    btn.classList.add('act');

  });
});

function changeIcone() {
  if (menuBtn.classList.contains('fa-bars')){
    menuBtn.className = 'fas fa-times';
  } else {
    menuBtn.className = 'fas fa-bars';
  }
}

function showHide() {
  {
    linkContainer.classList.toggle('showed');

    changeIcone();

  }
}

menuBtn.addEventListener('click',showHide);






