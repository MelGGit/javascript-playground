import getElement from './utils/getElement'
import getElements from './utils/getElements'

const boxes = getElements('.box')

boxes.forEach(box => {
  box.addEventListener('click', () => {
    box.classList.toggle('active')
  })
})
