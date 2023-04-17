const toggleBtn = document.querySelector('.right-nav')
const toggleBtnIcon = document.querySelector('.right-nav i')
const dropDownMenu = document.querySelector('.dropdown-cart')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-cart-shopping'
}