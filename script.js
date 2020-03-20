const MENU =document.querySelector('.menu');

// ----  add active to nav btns
MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});


 let items = document.querySelectorAll('.slide');
 let currentItem = 0;
 let isEnabled = true; // will become false when animation will started

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
     // когда доходим до пограничного значения то уходим на ноль ( доходим до 3 то делим на3 )
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


// Screen switcher
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
