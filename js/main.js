const btnMain = document.querySelector('.buttonMain')
const main = document.querySelector('.main-navegation')

//console.log(menu)
//console.log(hamburguer)

btnMain.addEventListener('click', () => {
    main.classList.toggle("spread")
})

window.addEventListener('click', e => {
    if (main.classList.contains('spread') &&
        e.target != main && e.target != btnMain) {
        main.classList.toggle("spread")
    }
})