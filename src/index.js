const box1 = document.querySelector('[name="box1"]')
const box2 = document.querySelector('[name="box2"]')
const button = document.querySelector('[data-button]')
let one = ''

button.addEventListener('click', () => {
  one = box1.value
  box1.value = box2.value.toUpperCase()
  box2.value = one.toLowerCase()
})
