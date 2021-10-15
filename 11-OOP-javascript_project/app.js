// Import the variable to create a new object
import { newQuestions } from './data/questions.js'
// Import the Question Model
import './models/question.js'
// Import Quiz Model
import { Quiz } from './models/Quiz.js'
// Import UI Model
import { UI } from './models/UI.js'

/**
 *
 * @param {Quiz} quiz Quiz object
 * @param {Ui} ui Ui object
 */
const renderPage = (quiz, ui) => {
  if (quiz.isEnded()) {
    ui.showScores(quiz.score)
  } else {
    ui.showQuestions(quiz.getQuestionIndex().text)
    ui.showChoices(quiz.getQuestionIndex().choice, (currentChoice) => {
      quiz.guess(currentChoice)
      renderPage(quiz, ui)
    })
    ui.showProgress(quiz.questionIndex + 1, quiz.questions.length)
  }
}

function main () {
  const quiz = new Quiz(newQuestions)
  const ui = new UI()
  renderPage(quiz, ui)
}

main()
