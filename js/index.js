const tarjeta = document.querySelector('#tarjeta')
const btnAbrirFormulario = document.querySelector('#btn-abrir-formulario')
const formulario = document.querySelector('#formulario-tarjeta')
tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active')
})

btnAbrirFormulario.addEventListener('click', () => {
    btnAbrirFormulario.classList.toggle('active')
    formulario.classList.toggle('active')
})