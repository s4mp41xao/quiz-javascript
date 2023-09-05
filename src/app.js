const form = document.querySelector('.person-form')
const scoreText = document.querySelector('.score-container')

const correctAnswers = ['paris', 'jupiter', 'o', 'elefante']

form.addEventListener('submit', event =>  {
  event.preventDefault()

  let score = 0
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
  ]

  userAnswers.forEach((userAnswer, index) => {
    if(userAnswer === correctAnswers[index]){
      score += 25
    }
  })

  scrollTo(0, 0)

  scoreText.classList.remove('d-none')

  let counter = 0
  const timer = setInterval(() => {
    if(counter === score){
      clearInterval(timer)
    }
    scoreText.querySelector('span').textContent = `${counter}`
    counter++
  }, 10)

})
