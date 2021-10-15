export class Question {
/**
 *
 * @param {string} text this is the question
 * @param {string[]} choice this is the array of options
 * @param {string} answer this is the correct answer
 */

  constructor (text, choice, answer) {
    this.text = text
    this.choice = choice
    this.answer = answer
  }

  /**
   *
   * @param {string} choice some text to guess
   * @returns {boolean} return true if the answer is correct
   */
  correctAnswer (choice) {
    return choice === this.answer
  }
}
