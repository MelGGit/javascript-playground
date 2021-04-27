console.clear()
const buttonRot = document.querySelector('.button-rot')
const buttonBG = document.querySelector('.button-bg')
const buttonRadius = document.querySelector('.button-radius')
const box = document.querySelector('.box')

buttonRot.addEventListener('click', () => {
  box.classList.toggle('rotation')
})

buttonBG.addEventListener('click', () => {
  box.classList.toggle('blue')
})

buttonRadius.addEventListener('click', () => {
  box.classList.toggle('radius')
})
