const tarjeta = document.querySelector('#tarjeta'),
    btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
    formulario = document.querySelector('#formulario-tarjeta'),
    numeroTarjeta = document.querySelector("#tarjeta .numero"),
    nombreTarjeta = document.querySelector("#tarjeta .nombre"),
    logoMarca = document.querySelector('#logo-marca'),
    firma = document.querySelector('#tarjeta .firma p'),
    mes = document.querySelector('#tarjeta #expiracion .mes'),
    year = document.querySelector('#tarjeta #expiracion .anio'),
    ccv = document.querySelector('#tarjeta .ccv')

//Volteamos la tarjeta
const mostrarFrente = () => {
    if (tarjeta.classList.contains('active')) {
        tarjeta.classList.remove('active')
    }
}


// Rotacion de Tarjeta
tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active')
})

// Abrir Formulario
btnAbrirFormulario.addEventListener('click', () => {
    btnAbrirFormulario.classList.toggle('active')
    formulario.classList.toggle('active')
})

// Rellenar Select mes
for (let i = 1; i <= 12; i++) {
    let opcion = document.createElement('option')
    opcion.value = i
    opcion.innerText = i
    formulario.selectMes.appendChild(opcion)

}
// Rellenar Select año
const yearActual = new Date().getFullYear()
for (let i = yearActual; i <= (yearActual + 8); i++) {
    let opcion = document.createElement('option')
    opcion.value = i
    opcion.innerText = i
    formulario.selectYear.appendChild(opcion)

}

//Input No Tarjeta
formulario.inputNumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value
    formulario.inputNumero.value = valorInput
        //Elimina espacios en blanco
        .replace(/\s/g, '')
        //Eliminar letras
        .replace(/\D/g, '')
        //Espacio cada 4 num
        .replace(/([0-9]{4})/g, '$1 ')
        //Elimina el ultimo espacio
        .trim()
    numeroTarjeta.textContent = valorInput

    if (valorInput == '') {
        numeroTarjeta.textContent = "#### #### #### ####"
        logoMarca.innerHTML = ''
    }

    if (valorInput[0] == 4) {
        logoMarca.innerHTML = ''
        const imagen = document.createElement('img')
        imagen.src = 'https://raw.githubusercontent.com/AlanDannS/Interfaz-tarjeta/master/img/logo/visa.png'
        logoMarca.appendChild(imagen)
    } else if (valorInput[0] == 5) {
        logoMarca.innerHTML = ''
        const imagen = document.createElement('img')
        imagen.src = 'https://raw.githubusercontent.com/AlanDannS/Interfaz-tarjeta/master/img/logo/mastercard.png'
        logoMarca.appendChild(imagen)
    }

    //Volteamos la tarjeta
    mostrarFrente()
})

//Input Nombre Tarjeta

formulario.inputNombre.addEventListener('keyup', (e) => {
    let valorInput = e.target.value

    formulario.inputNombre.value = valorInput
        .replace(/[0-9]/g, '')
    nombreTarjeta.textContent = valorInput
    firma.textContent = valorInput

    if (valorInput == '') {
        nombreTarjeta.textContent = "Jhon Doe"
    }
})

//Select Mes
formulario.selectMes.addEventListener('change', (e) => {
    mes.textContent = e.target.value
    mostrarFrente()
})

//Select año
formulario.selectYear.addEventListener('change', (e) => {
    year.textContent = e.target.value.slice(2)
    mostrarFrente()
})

//Input CCV
formulario.inputCVV.addEventListener('keyup', () => {
    if (!tarjeta.classList.contains('active')) {
        tarjeta.classList.toggle('active')
    }

    formulario.inputCVV.value = formulario.inputCVV.value
        .replace(/\s/g, '')
        .replace(/\D/g, '')

    ccv.textContent = formulario.inputCVV.value
})
