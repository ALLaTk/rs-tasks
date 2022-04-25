import pets from './pets.js';
import {getPet} from './modalWindow.js';

const btnLeft = document.querySelector('.friends-btn.left');
const btnRight = document.querySelector('.friends-btn.right');
const slider = document.querySelector('.slider');
let blockOne = document.querySelector('.pets__block.one');
let blockTwo = document.querySelector('.pets__block.two');
let blockThree = document.querySelector('.pets__block.three');

// const checkItemsPerPage = () => {
//   if (
//     document.querySelector("body").offsetWidth >= 768 &&
//     document.querySelector("body").offsetWidth < 1280
//   ) {
//     return 2;
//   }
//   if (document.querySelector("body").offsetWidth < 768) {
//     return 1;
//   } else return 3;
// };

// const crateCard = () => {
//   const card = document.createElement('div');

// }

let arrPets = []
const createRandomArr = () => { 
   while (arrPets.length < 3){
      let randomNum = Math.floor(Math.random() * 8);
      if(!arrPets.includes(randomNum)) {arrPets.push(randomNum)} 
   }
  return arrPets;
}

const createNewRandomArr = () => {
   while (arrPets.length < 6){
      let randomNum = Math.floor(Math.random() * 8);
      if(!arrPets.includes(randomNum)) {arrPets.push(randomNum)} 
   }
   arrPets.splice(0, 3)
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

const slidesPerPage = () => {
    if(window.innerWidth>1279) return 3;
    if(window.innerWidth<=1279 && window.innerWidth>767) return 2;
    if(window.innerWidth<768) return 1;
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
  btnRight.addEventListener('click', moveRight)
 
}

const moveRight = () => {
  slider.classList.add('transition-right');
   btnLeft.addEventListener('click', moveLeft)
   btnRight.addEventListener('click', moveRight)
}

slider.addEventListener('animationend', (event) => {
  if (event.animationName === 'move-left') {   
     slider.classList.remove('transition-left');
     document.querySelector('.pets__block.two').innerHTML = blockOne.innerHTML;  
     createNewRandomArr()
       slidesPerPage() 
     createBlock(blockOne);       
  } else {
    slider.classList.remove('transition-right')
    document.querySelector('.pets__block.two').innerHTML = blockThree.innerHTML
    createNewRandomArr()
    createBlock(blockThree);
  }   
})

const sliderSubscribe = () => {
  btnLeft.addEventListener('click', moveLeft)
  btnRight.addEventListener('click', moveRight) 

}


export default sliderSubscribe;