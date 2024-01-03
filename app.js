const hours = [
  '12.svg',
  '1.svg',
  '2.svg',
  '3.svg',
  '4.svg',
  '5.svg',
  '6.svg',
  '7.svg',
  '8.svg',
  '9.svg',
  '10.svg',
  '11.svg',
]

let currentHour = 1

function updateClock() {
  document.getElementById('clockContainer').innerHTML = `<img src="${
    hours[currentHour]
  }" alt="Hour ${currentHour + 1}">`
  currentHour = (currentHour + 1) % hours.length

  toggleMonkey()
}

let iniciMona = 8
let finalMona = 10

function toggleMonkey() {
  const monkeyContainer = document.getElementById('monkeyContainer')

  if (currentHour === iniciMona + 1) {
    monkeyContainer.innerHTML = '<img src="mona.svg" alt="Monkey">'
    monkeyContainer.style.display = 'block'
  } else if (currentHour === finalMona + 1) {
    monkeyContainer.style.display = 'none'
  }
}
let duracioHora = 2000
setInterval(updateClock, duracioHora)
/*


function showMonkey() {
  const monkeyContainer = document.getElementById('monkeyContainer')
  monkeyContainer.innerHTML = '<img src="mona.svg" alt="Monkey">'
  monkeyContainer.style.display = 'block'

  // Set a timeout to hide the monkey after a specified duration
  setTimeout(function () {
    monkeyContainer.style.display = 'none'
  }, 2 * duracioHora) // Adjust this duration as needed
}

setTimeout(showMonkey, 9 * duracioHora)

function toggleMonkey() {
  const monkeyContainer = document.getElementById('monkeyContainer')
  if (
    monkeyContainer.style.display === 'none' ||
    !monkeyContainer.style.display
  ) {
    monkeyContainer.innerHTML = '<img src="mona.svg" alt="Monkey">'
    monkeyContainer.style.display = 'block'
  } else {
    monkeyContainer.style.display = 'none'
  }
}

setInterval(toggleMonkey, 2 * duracioHora)
*/
