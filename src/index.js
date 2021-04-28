const bOne = document.querySelector('[data-b-one]')
const bTwo = document.querySelector('[data-b-two]')
const pOne = document.querySelector('[data-p-one]')
const pTwo = document.querySelector('[data-p-two]')

bOne.addEventListener('click', () => {
  pOne.classList.remove('hidden')
  pTwo.classList.add('hidden')
})

bTwo.addEventListener('click', () => {
  pOne.classList.add('hidden')
  pTwo.classList.remove('hidden')
})
