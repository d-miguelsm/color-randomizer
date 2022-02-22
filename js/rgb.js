const btn = document.getElementById('btn')
const color = document.querySelector('.color')


btn.addEventListener('click', () => {
  const getRandomNumber = () => Math.floor(Math.random() * 255)

  let a = getRandomNumber(),
    b = getRandomNumber(),
    c = getRandomNumber()

  let corRgb = `rgb(${a},${b},${c})`

  document.body.style.backgroundColor = corRgb
  color.textContent = corRgb

})