let userOptionsContainer = document.querySelector('.user-options-container')
let userImg = document.querySelector('.search-user > .user')

userImg.addEventListener('click', (e) => {
    let clickUser = e.target

    if(clickUser == userImg) {
        userOptionsContainer.style.display = 'flex'
    }
})

userOptionsContainer.addEventListener('click', (e) => {
    let clickOptionContainer = e.target

    if(clickOptionContainer == userOptionsContainer) {
        userOptionsContainer.style.display = 'none'
    }
})