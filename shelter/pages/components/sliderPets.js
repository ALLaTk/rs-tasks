import pets from './pets.js';
import {getPet} from './modalWindow.js';

const btnLeftInital = document.querySelector('.logo__btn.left.inital');
const btnLeftLast = document.querySelector('.logo__btn.left.last')
const btnRightInital = document.querySelector('.logo__btn.right.inital');
const btnRightLast = document.querySelector('.logo__btn.right.last');
const slider = document.querySelector('.slider');
let block = document.querySelector('.pets__block.one');
// let blockTwo = document.querySelector('.pets__block.two');
// let blockThree = document.querySelector('.pets__block.three');
let pageNumber = document.querySelector('.logo__btn.active');
let count = 1;
let index = 0;

const slidesPerPage = () => {
    if(window.innerWidth>1279) return 8;
    if(window.innerWidth<=1279 && window.innerWidth>767) return 6;
    if(window.innerWidth<768) return 3;
}

// const createNewRandomArr = () => {
//   arrPets.splice(0, 8)
//    while (arrPets.length < 8){
//       let randomNum = Math.floor(Math.random() * 8);
//       if(!arrPets.includes(randomNum)) {arrPets.push(randomNum)} 
//    }
  
//    return arrPets;
// }

let arrPets = [];


  for (let i = 0; i < 6; i++) {
    let arr = []
     while (arr.length < 8) {
        let randomNum = Math.floor(Math.random() * 8);
      if(!arr.includes(randomNum)) {arr.push(randomNum);}
  }
    arrPets.push(arr)
}
 

// const createNewRandomArr = () => {
//   arrPets.splice(0, 6)
//   for (let i = 0; i < 6; i++) {
//     let arr = []
//      while (arr.length < 8) {
//         let randomNum = Math.floor(Math.random() * 8);
//       if(!arr.includes(randomNum)) {arr.push(randomNum);}
//   }
//     arrPets.push(arr)
// }
//  return arrPets
// }


const createBlock = (elem) => {
  
  elem.innerHTML = ''

       for (let i = 0; i < arrPets[index].length; i++) {
      let petCard = document.createElement("div");

      petCard.className = `our-frends__content ${(pets[arrPets[index][i]].name)
                          .toLowerCase()}`;

                          petCard.innerHTML = `
			                    <img src="${pets[arrPets[index][i]].img}" alt="pet">
			                   	<p class="our-frends__name">${pets[arrPets[index][i]].name}</p>
				                  <button class="pets__button">Learn more</button>`;

        elem.append(petCard)
      }
     

     
     const pet = [...document.querySelectorAll('.our-frends__content')];
        pet.forEach((el) => {
      el.addEventListener('click', getPet);

});
}


const createRandomomMainBlockPets = () => {

  createBlock(block);
}
createRandomomMainBlockPets();



const moveLeft = () => {
   index--
     createBlock(block)
     document.querySelector('.pets__block.one').innerHTML = block.innerHTML
  slider.classList.add('transition-left');
  btnLeftInital.addEventListener('click', moveLeft)
 
    if (count > 1 && count < 7) {
     pageNumber.innerHTML = count - 1; 
     btnRightInital.disabled = false
     btnRightLast.disabled = false
   } 
   if (count === 2) {
     btnLeftInital.disabled = true
     btnLeftLast.disabled = true
   }
  count-- 
 
}

const moveLeftLast = () => {
  slider.classList.add('transition-left');
  btnLeftLast.addEventListener('click', moveLeftLast)
  pageNumber.innerHTML = 1;
  btnLeftInital.disabled = true
  btnLeftLast.disabled = true
}

const moveRightLast = () => {
  slider.classList.add('transition-right');
  btnLeftLast.addEventListener('click', moveRightLast)
  pageNumber.innerHTML = 6;
  btnRightInital.disabled = true
  btnRightLast.disabled = true
}

const moveRight = () => {
   index++
     createBlock(block)
     document.querySelector('.pets__block.one').innerHTML = block.innerHTML;
   slider.classList.add('transition-right');
   btnRightInital.addEventListener('click', moveRight)
    if (count < 6) {
     btnLeftInital.disabled = false
     btnLeftLast.disabled = false
     pageNumber.innerHTML = count + 1; 
   } 
   if (count === 5) {
     btnRightInital.disabled = true
     btnRightLast.disabled = true
   }
  count++  
}


// slider.addEventListener('animationend', (event) => {
//   if (event.animationName === 'move-left') {   
//      slider.classList.remove('transition-left');
//      index--
//      createBlock(block)
//      document.querySelector('.pets__block.one').innerHTML = block.innerHTML
     
//   } else {
//     slider.classList.remove('transition-right')
//      index++
//      createBlock(block)
//      document.querySelector('.pets__block.one').innerHTML = block.innerHTML; 
//   }   
// })

const sliderPetsSubscribe = () => {
  btnLeftInital.addEventListener('click', moveLeft)
  btnRightInital.addEventListener('click', moveRight) 
  btnLeftLast.addEventListener('click', moveLeftLast)
  btnRightLast.addEventListener('click', moveRightLast)
}


export default sliderPetsSubscribe;

//  type="button" disabled