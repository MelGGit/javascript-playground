const box = document.querySelector('[data-box]')
const inputOne = document.querySelector('[name="input-rot"]')
const inputTwo = document.querySelector('[name="input-size"]')
const inputThree = document.querySelector('[name="input-radius"]')
const inputFour = document.querySelector('[name="input-color"]')

inputOne.addEventListener('input', event => {
  box.style.transform = 'rotate(' + inputOne.value + 'deg)'
})

inputTwo.addEventListener('input', event => {
  box.style.transform = 'scale(' + inputTwo.value + ')'
})

inputThree.addEventListener('input', event => {
  box.style.borderRadius = inputThree.value + '%'
})

inputFour.addEventListener('input', event => {
  box.style.background = 'hsl(' + inputFour.value + ', 100%, 50%)'
})
