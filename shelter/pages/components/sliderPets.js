import pets from './pets.js';
import {getPet} from './modalWindow.js';

const btnLeft = document.querySelector('.logo__btn.left');
const btnRight = document.querySelector('.logo__btn.right');
const slider = document.querySelector('.slider');
let blockOne = document.querySelector('.pets__block.one');
let blockTwo = document.querySelector('.pets__block.two');
let blockThree = document.querySelector('.pets__block.three');
let pageNumber = document.querySelector('.logo__btn.active');
let count = 1;

let arrPets = []
const createRandomArr = () => { 
   while (arrPets.length < 8){
      let randomNum = Math.floor(Math.random() * 8);
      if(!arrPets.includes(randomNum)) {arrPets.push(randomNum)} 
   }
  return arrPets;
}

const createNewRandomArr = () => {
  arrPets.splice(0, 8)
   while (arrPets.length < 8){
      let randomNum = Math.floor(Math.random() * 8);
      if(!arrPets.includes(randomNum)) {arrPets.push(randomNum)} 
   }
   
   return arrPets;
}


const createBlock = (elem) => {
  elem.innerHTML = ''
    for (let i = 0; i < arrPets.length; i++) {
      let petCard = document.createElement("div");

      petCard.className = `our-frends__content ${(pets[arrPets[i]].name)
                          .toLowerCase()}`;

                          petCard.innerHTML = `
			                    <img src="${pets[arrPets[i]].img}" alt="pet">
			                   	<p class="our-frends__name">${pets[arrPets[i]].name}</p>
				                  <button class="pets__button">Learn more</button>`;

        elem.append(petCard)
      }
     const pet = [...document.querySelectorAll('.our-frends__content')];
        pet.forEach((el) => {
      el.addEventListener('click', getPet);
});
 
}

const createRandomomMainBlockPets = () => {
  createRandomArr();
  createBlock(blockTwo);
}
createRandomomMainBlockPets();

const createRandomBlocksPets = () => {
  createNewRandomArr ();
  createBlock(blockOne);
  createBlock(blockThree);
}
createRandomBlocksPets();


const moveLeft = () => {
  slider.classList.add('transition-left');
  btnLeft.addEventListener('click', moveLeft)
 
    if (count > 1 && count < 6) {
     console.log(pageNumber.innerHTML = count - 1); 
      
   } 
   if (count === 2) {
     btnLeft.disabled = true
     btnLeft.removeClass('hover');
   }
  count-- 
 
}

const moveRight = () => {
  slider.classList.add('transition-right');
 
   btnRight.addEventListener('click', moveRight)
    if (count < 6) {
     btnLeft.disabled = false
     console.log(pageNumber.innerHTML = count + 1); 
   } 
   if (count === 5) {
     btnRight.setAttribute("disabled", "disabled");
          btnRight.type = 'button'
   }
  count++  
}

slider.addEventListener('animationend', (event) => {
  if (event.animationName === 'move-left') {   
     slider.classList.remove('transition-left');
     document.querySelector('.pets__block.two').innerHTML = blockOne.innerHTML;  
     createNewRandomArr()
     createBlock(blockOne);
  } else {
    slider.classList.remove('transition-right')
    document.querySelector('.pets__block.two').innerHTML = blockThree.innerHTML
    createNewRandomArr()
    createBlock(blockThree);
  }   
})

const sliderPetsSubscribe = () => {
  btnLeft.addEventListener('click', moveLeft)
  btnRight.addEventListener('click', moveRight) 
  
}


export default sliderPetsSubscribe;

//  type="button" disabled