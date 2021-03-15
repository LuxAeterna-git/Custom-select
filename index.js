const dropdownPeople = document.querySelector(".dropdown__button")

dropdownPeople.addEventListener("click", function () {
    document.querySelector(".dropdown__list").classList.toggle("dropdown__list--visible");
  });

const minusAdult = document.querySelector('.minus__adult')
const numberAdult = document.querySelector('.number__adult')
const plusAdult = document.querySelector('.plus__adult')

const minusChild = document.querySelector('.minus__child')
const numberChild = document.querySelector('.number__child')
const plusChild = document.querySelector('.plus__child')

const minusBaby = document.querySelector('.minus__baby')
const numberBaby = document.querySelector('.number__baby')
const plusBaby = document.querySelector('.plus__baby')


//Логика для кнопок пункта "взрослые"

minusAdult.addEventListener('click', function(){
  if (numberAdult.innerText>0) numberAdult.innerText--;
  if (numberAdult.innerText==0) minusAdult.classList.add('minus__adult-disabled')
})

plusAdult.addEventListener('click', function(){
  numberAdult.innerText++;
  if (numberAdult.innerText>0) minusAdult.classList.remove('minus__adult-disabled');
  clearPeople.classList.add('clear__number-visible')
})

//Логика для кнопок пункта "дети"

minusChild.addEventListener('click', function(){
  if (numberChild.innerText>0) numberChild.innerText--;
  if (numberChild.innerText==0) minusChild.classList.add('minus__child-disabled')
})

plusChild.addEventListener('click', function(){
  numberChild.innerText++;
  if (numberChild.innerText>0) minusChild.classList.remove('minus__child-disabled');
  clearPeople.classList.add('clear__number-visible')
})

//Логика для кнопок пункта "младенцы"

minusBaby.addEventListener('click', function(){
  if (numberBaby.innerText>0) numberBaby.innerText--;
  if (numberBaby.innerText==0) minusBaby.classList.add('minus__baby-disabled')
})

plusBaby.addEventListener('click', function(){
  numberBaby.innerText++;
  if (numberBaby.innerText>0) minusBaby.classList.remove('minus__baby-disabled');
  clearPeople.classList.add('clear__number-visible')
})

//Логика кнопок "применить" и "очистить"

const calcPeople = document.querySelector('.calc__people')
const clearPeople = document.querySelector('.clear__number')

calcPeople.addEventListener('click', function(){
  let count = Number(numberAdult.innerText) + Number(numberChild.innerText) + Number(numberBaby.innerText);
  if (count==0) {
    dropdownPeople.innerText ='Сколько гостей'; 
    clearPeople.classList.remove('clear__number-visible')
    };
  if (count>0) {
      clearPeople.classList.add('clear__number-visible')
      }
  if (count==1) dropdownPeople.innerText ='1 гость'; 
  if (count>1) dropdownPeople.innerText =count + ' гостя'; 
  if (count>4) dropdownPeople.innerText =count + ' гостей';
})

clearPeople.addEventListener('click', function(){
  dropdownPeople.innerText = 'Сколько гостей';
  numberAdult.innerText = 0;
  numberChild.innerText = 0;
  numberBaby.innerText = 0;
  clearPeople.classList.remove('clear__number-visible');
  minusAdult.classList.add('minus__adult-disabled');
  minusChild.classList.add('minus__child-disabled');
  minusBaby.classList.add('minus__baby-disabled')
})