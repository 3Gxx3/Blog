let cont = document.querySelector('body')
let darkMode = document.querySelector('.dark-change')
let elem = document.querySelector('.dark-elem')

darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('activ')
    cont.classList.toggle('dark')

    elements.forEach(elem => {
        elem.classList.toggle('theme')
    })
         
})