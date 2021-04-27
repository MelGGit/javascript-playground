console.clear()
const buttonAdd = document.querySelector('.button-add')
const buttonRemove = document.querySelector('.button-remove')
const buttonToggle = document.querySelector('.button-toggle')
const box = document.querySelector('.box')

buttonAdd.addEventListener('click', () => {
  box.classList.add('blue')
})

buttonRemove.addEventListener('click', () => {
  box.classList.remove('blue')
})

buttonToggle.addEventListener('click', () => {
  box.classList.toggle('blue')
})
