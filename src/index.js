console.clear()
const buttonOne = document.querySelector('.button1')
const buttonTwo = document.querySelector('.button2')
const buttonThree = document.querySelector('.button3')
const buttonFour = document.querySelector('.button4')

const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const box4 = document.querySelector('.box4')

buttonOne.addEventListener('click', () => {
  box1.classList.add('visible')
  box2.classList.remove('visible')
  box3.classList.remove('visible')
  box4.classList.remove('visible')

  buttonOne.classList.add('clicked')
  buttonTwo.classList.remove('clicked')
  buttonThree.classList.remove('clicked')
  buttonFour.classList.remove('clicked')
})

buttonTwo.addEventListener('click', () => {
  box1.classList.remove('visible')
  box2.classList.add('visible')
  box3.classList.remove('visible')
  box4.classList.remove('visible')

  buttonOne.classList.remove('clicked')
  buttonTwo.classList.add('clicked')
  buttonThree.classList.remove('clicked')
  buttonFour.classList.remove('clicked')
})

buttonThree.addEventListener('click', () => {
  box1.classList.remove('visible')
  box2.classList.remove('visible')
  box3.classList.add('visible')
  box4.classList.remove('visible')

  buttonOne.classList.remove('clicked')
  buttonTwo.classList.remove('clicked')
  buttonThree.classList.add('clicked')
  buttonFour.classList.remove('clicked')
})

buttonFour.addEventListener('click', () => {
  box1.classList.remove('visible')
  box2.classList.remove('visible')
  box3.classList.remove('visible')
  box4.classList.add('visible')

  buttonOne.classList.remove('clicked')
  buttonTwo.classList.remove('clicked')
  buttonThree.classList.remove('clicked')
  buttonFour.classList.add('clicked')
})
