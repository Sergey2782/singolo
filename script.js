

// ----  add active to nav btns
const MENU =document.querySelector('.menu');
MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
   event.target.classList.add('active');
});
// ---- slider
 let items = document.querySelectorAll('.slide');
 let currentItem = 0;
 let isEnabled = true;
 document.querySelector('.arrow-left').addEventListener('click', function() {
    if(isEnabled) {
        previousItem(currentItem);
    }
})
document.querySelector('.arrow-right').addEventListener('click', function() {
    if(isEnabled) {
        nextItem(currentItem);
    }
})
 function changeCurrentItem(n) {
     currentItem = (n + items.length) % items.length; 
 }
function hideItem(direction) {
    isEnabled =false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('slide_active', direction);
    })
}
function showItem(direction) {
    items[currentItem].classList.add('next-slide', direction);
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('next-slide', direction);
        this.classList.add('slide_active');
        isEnabled = true;
    })
}
function previousItem(currentItem) {
    hideItem('to-right');
    changeCurrentItem(currentItem-1);
    showItem('from-left')
}
function nextItem(currentItem) {
   hideItem('to-left');
    changeCurrentItem(currentItem+1);
    showItem('from-right');
}
// switch phone screen
const slide1Element = document.querySelector(".slide-1");

slide1Element.addEventListener("click", event => {
  let phoneSelectedElement = event.target.closest(".base");

  if (phoneSelectedElement) {
    changeScreenMode(phoneSelectedElement);
  }
});

function changeScreenMode(phoneSelected) {
  const screenSelectedElement = phoneSelected.querySelector(".screen-phone");

  let currentMode;
  let newMode;

  if (screenSelectedElement.classList.contains("screen_on")) {
    currentMode = "screen_on";
    newMode = "screen_off";
  } else {
    currentMode = "screen_off";
    newMode = "screen_on";
  }
  screenSelectedElement.classList.remove(`${currentMode}`);
  screenSelectedElement.classList.add(`${newMode}`);
}

// PORTFOLIO BLOCK - add border to img
let imgs = document.querySelectorAll('.gallery__picture');
for(let i =0; i< imgs.length; i++) {
     imgs[i].onclick = activeItem;
      } 
function activeItem(){
  this.classList.toggle('item-active');
} 
// PORTFOLIO BLOCK - shuffle images
let portfolio_btn_s = document.querySelectorAll('.portfolio-nav-btn');
const galleryElement = document.querySelector(".layout-4-column");
const picturesElements = document.querySelectorAll(".gallery__picture");
for(let i =0; i< portfolio_btn_s.length; i++) {
  portfolio_btn_s[i].onclick = reorderPictures;
};
function reorderPictures() {
  const firstPicture = galleryElement.children[0];
  const firstPictureCopy = firstPicture.cloneNode();
  firstPicture.remove();
  galleryElement.append(firstPictureCopy);
}