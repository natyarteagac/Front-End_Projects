import { Question } from "./question.js"

export class UI {
  constructor () {}

  /**
   *
   * @param {string} text question to render
   */
  showQuestions (text) {
    const questionTitle = document.getElementById('question')
    questionTitle.innerText = text
  }

  /**
   *
   * @param {string[]} choices choices of the questions
   */
  showChoices (choices, callback) {
    const choicesContainer = document.getElementById('choices')
    choicesContainer.innerHTML = ''
    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement('button')
      button.innerText = choices[i]
      button.className = 'button'
      button.addEventListener('click', () => callback(choices[i]))

      choicesContainer.append(button)
    }
  }

  /**
   * @param {number} score Show total score
   */
  showScores (score) {
    const quizENDHTML = `
      <h1>Result<h1>
      <h2>Your score: ${score}<h2>
    `
    const element = document.getElementById('quiz')
    element.innerHTML = quizENDHTML
  }

  /**
   *
   * @param {number} currentIndex The current total of index
   * @param {number} total total questions
   */
  showProgress (currentIndex, total) {
    const element = document.getElementById('progress')
    element.innerHTML = `Question ${currentIndex} of ${total}`
  }
}
