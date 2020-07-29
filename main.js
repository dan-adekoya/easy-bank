let menu = document.querySelector('.burger')
let nav = document.querySelector('header nav ul')
let body = document.querySelector('body')

menu.addEventListener('click', () => {
    nav.classList.toggle('open')
    menu.classList.toggle('open')
})

let  modal = document.querySelector('.modal')
let pop =  document.querySelector('.pop')

modal.addEventListener('click', () => {
    pop.classList.add('modal')
    body.classList.add('modal')
})
pop.addEventListener('click', () => {
    pop.classList.remove('modal')
    body.classList.remove('modal')
})