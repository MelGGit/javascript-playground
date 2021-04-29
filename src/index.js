const buttonHome = document.querySelector('.button-home')
const buttonBookmarks = document.querySelector('.button-bookmarks')
const buttonCreate = document.querySelector('.button-create')
const buttonSettings = document.querySelector('.button-settings')

const homePage = document.querySelector('.page-home')
const bookmarksPage = document.querySelector('.page-bookmarks')
const createPage = document.querySelector('.page-create')
const settingsPage = document.querySelector('.page-settings')

buttonHome.addEventListener('click', () => {
  hideAllPages()
  homePage.classList.remove('hidden')

  deactivateButtons()
  buttonHome.classList.add('active')
})

buttonBookmarks.addEventListener('click', () => {
  hideAllPages()
  bookmarksPage.classList.remove('hidden')

  deactivateButtons()
  buttonBookmarks.classList.add('active')
})

buttonCreate.addEventListener('click', () => {
  hideAllPages()
  createPage.classList.remove('hidden')

  deactivateButtons()
  buttonCreate.classList.add('active')
})

buttonSettings.addEventListener('click', () => {
  hideAllPages()
  settingsPage.classList.remove('hidden')

  deactivateButtons()
  buttonSettings.classList.add('active')
})

function hideAllPages() {
  homePage.classList.add('hidden')
  bookmarksPage.classList.add('hidden')
  createPage.classList.add('hidden')
  settingsPage.classList.add('hidden')
}

function deactivateButtons() {
  buttonHome.classList.remove('active')
  buttonBookmarks.classList.remove('active')
  buttonCreate.classList.remove('active')
  buttonSettings.classList.remove('active')
}
