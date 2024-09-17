/**
 * A class representing a interactivity on bars.
 *
 * @author Ludwig Wittenberg <lw223cq@student.lnu.se>
 * @version 1.0.0
 */

/**
 * A class representing a interactivity.
 */
class Interactivity {
  #rect
  #orginalColor

  /**
   * Creates an instance of Interactivity.
   *
   * @param {object} rect - The chart that will be used to render the diagram.
   */
  constructor (rect) {
    this.#rect = rect
    this.#orginalColor = this.#rect.getAttribute('fill')
  }

  /**
   * Makes the bars interactive.
   */
  makeInteractive () {
    this.#reactToMouseOver()
    // ask if if the user want to make tho change color when the mouse is over the bars or if the user want to add a little information about the bars
  }

  /**
   * Reacts to mouse over.
   */
  #reactToMouseOver () {
    // interact with the bars when the mouse is over them
    this.#rect.addEventListener('mouseover', (event) => {
      event.target.setAttribute('fill', 'red')
      console.log('mouseover')
    })

    // reset the color of the bars when the mouse is not over them
    this.#rect.addEventListener('mouseout', (event) => {
      event.target.setAttribute('fill', 'blue')
      console.log('mouseout')
    })
  }
}

export { Interactivity }
