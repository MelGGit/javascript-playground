import getElement from './utils/getElement'

const buttonHome = getElement('.button-home')
const buttonBookmarks = getElement('.button-bookmarks')
const buttonCreate = getElement('.button-create')
const buttonSettings = getElement('.button-settings')

const homePage = getElement('.page-home')
const bookmarksPage = getElement('.page-bookmarks')
const createPage = getElement('.page-create')
const settingsPage = getElement('.page-settings')

buttonHome.addEventListener('click', navigateToHome)
buttonBookmarks.addEventListener('click', navigateToBookmarks)
buttonCreate.addEventListener('click', navigateToCreate)
buttonSettings.addEventListener('click', navigateToSettings)

function changePage(page) {
  hideAllPages()
  page.classList.remove('hidden')
}

function changeActive(button) {
  deactivateButtons()
  button.classList.add('active')
}
function navigateToHome() {
  changePage(homePage)
  changeActive(buttonHome)
}

function navigateToBookmarks() {
  changePage(bookmarksPage)
  changeActive(buttonBookmarks)
}

function navigateToCreate() {
  changePage(createPage)
  changeActive(buttonCreate)
}

function navigateToSettings() {
  changePage(settingsPage)
  changeActive(buttonSettings)
}

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
