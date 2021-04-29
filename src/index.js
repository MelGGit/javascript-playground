const buttonHome = document.querySelector('.button-home')
const buttonBookmarks = document.querySelector('.button-bookmarks')
const buttonCreate = document.querySelector('.button-create')
const buttonSettings = document.querySelector('.button-settings')

const homePage = document.querySelector('.page-home')
const bookmarksPage = document.querySelector('.page-bookmarks')
const createPage = document.querySelector('.page-create')
const settingsPage = document.querySelector('.page-settings')

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
