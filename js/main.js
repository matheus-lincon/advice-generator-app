const URL = 'https://api.adviceslip.com/advice'

/* SELECTORS */
const diceButton = document.querySelector('#dice-button')
const adviceIdElement = document.querySelector('.advice-id')
const adviceElement = document.querySelector('.advice-text')

/* EVENTS */
diceButton.addEventListener('click', getAdvice)

/* FUNCTIONS */
function getAdvice() {
  axios
    .get(URL)
    .then((response) => {
      let advice_id = response.data.slip.id
      //prevent to get the same id
      if (adviceIdElement.innerText == response.data.slip.id) {
        getAdvice()
        return
      }

      let advice = response.data.slip.advice

      adviceIdElement.innerText = advice_id
      adviceElement.innerText = advice
    })
    .catch((error) => console.error(error))
}

getAdvice()
