let height = document.getElementById('height')
let weight = document.querySelector('#weight')
let age = document.querySelector('#age')

function computeIMC() {
  const genderRadio = document.getElementsByName('gender')
  const name = document.querySelector('#name').value
  

  let gender = ''
  for (i = 0; i < genderRadio.length; i++) {
    if (genderRadio[i].checked) {
      gender = genderRadio[i].value
    }
  }

  if (gender === 'male') {
    gender = 'masculino'
  } else if (gender === 'female') {
    gender = 'feminino'
  }

  age = age.value
  height = height.value
  weight = weight.value
  let status = ''

  const imc = (weight / ((height/100)**2)).toFixed(2)
  
  if (imc < 18.5) {
    status = 'Abaixo do peso'
  } else if (imc >=18.5 && imc < 24.9) {
    status = 'Peso normal'
  } else if (imc >= 25 && imc < 29.9) {
    status = 'Sobrepeso'
  } else if (imc >= 30 && imc < 34.9) {
    status = 'Obesidade Grau I'
  } else if (imc >= 35 && imc < 39.9) {
    status = 'Obesidade Grau II'
  } else if (imc >= 40) {
    status = 'Obesidade Grau III ou Mórbida'
  } else {
    status = 'Resultado inesperado. Por favor, tente novamente.'
  }

  const resultDiv = document.getElementById('result-div')
  resultDiv.classList.add('active')
  
  const message = `
    <h1 class="title">Resultado</h1>
    <br>
    <h2>${name}, ${age}</h2>
    <h3>Gênero: ${gender}</h3>
    <br>
    <h3>Seu imc é ${imc} e isso siginifica ${status}. Procure um médico nutricionista para mais informações.</h>
  `

  resultDiv.innerHTML = message
}

// SHOW VALUE RANGE INPUT
let value = document.getElementById('height-value')

height.addEventListener('input', function() {
  value.innerHTML = this.value
})

// FUNCTION SUM ON BUTTON
const somaValor = (property, button) => {
  const sumButton = document.querySelector(button)
  sumButton.addEventListener('click', () => {
    // weight.value = parseInt(weight.value)
    // console.log(weight.value)
    property.value++
  })
}

// FUNCTION SUB ON BUTTON
const subValor = (property, button) => {
  const subButton = document.querySelector(button)
  subButton.addEventListener('click', () =>{
    // weight.value = parseInt(weight.value)
    if (property.value <= 0) {
      return
    }
    // console.log(weight.value)
    property.value--
  })
}

somaValor(weight, '.sum-weight')
subValor(weight, '.sub-weight')
somaValor(age, '.sum-age')
subValor(age, '.sub-age')


