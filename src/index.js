const box = document.querySelector('[data-box]')
const input = document.querySelector('[name="input-color"]')
const form = document.querySelector('[data-form]')

form.addEventListener('submit', event => {
  event.preventDefault()
  box.style.background = input.value
  input.value = ''
  input.focus()
})
