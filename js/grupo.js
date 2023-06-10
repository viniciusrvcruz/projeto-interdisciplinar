let criarGrupo = document.querySelector('.criar-grupo button')

criarGrupo.addEventListener('click', (e) => {
    let clickUser = e.target

    if(clickUser == criarGrupo) {
        document.querySelector('.criar-grupo-modal').style.display = 'flex'
    }
    
})

document.querySelector('.criar-grupo-modal').addEventListener('click', (e) => {
    let clickUser = e.target

    if(clickUser == document.querySelector('.criar-grupo-modal')) {
        document.querySelector('.criar-grupo-modal').style.display = 'none'
    }
    
})