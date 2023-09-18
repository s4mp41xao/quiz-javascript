const form = document.querySelector('.quiz-form')
const scoreContainer = document.querySelector('.score-container')

const correctAnswers = ['paris', 'jupiter', 'o', 'elefante']

let score = 0

const getUserAnswers = () => correctAnswers.map((_, index) =>
  form[`inputQuestion${index + 1}`].value)

const calculateUserScore = userAnswers => {
  userAnswers.forEach((userAnswers, index) => {
    const isCorrectAnswers = userAnswers === correctAnswers[index]
    if (isCorrectAnswers) {
      score += 25
    }
  })
}

showFinalScore = () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
  scoreContainer.classList.remove('d-none')
}

const animateFinalScore = () => {
  let counter = 0

  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer)
    }
    scoreContainer.querySelector('span').textContent = `${counter++}`
  }, 10)
}

const resetUserScore = () => {
  score = 0
}

form.addEventListener('submit', event => {
  event.preventDefault()

  const userAnswers = getUserAnswers()

  resetUserScore()
  calculateUserScore(userAnswers)
  showFinalScore()
  animateFinalScore()
})
