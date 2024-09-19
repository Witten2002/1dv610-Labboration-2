/**
 * A module to animate the bars of diagrams.
 *
 * @author Ludwig Wittenberg <lw223cq@student.lnu.se>
 * @version 1.0.0
 */

/**
 * A class representing a diagram.
 */
class Animation {
  #rect
  /**
   * Creates an instance of Animate.
   *
   * @param {object} rect - The chart that will be used to render the diagram.
   */
  constructor (rect) {
    this.#rect = rect
  }

  /**
   * Animates the bars.
   *
   * @param {object} config - The configuration of the animation.
   */
  animation (config) {
    if (config.type === 'horizontal') {
      this.#animateBar(config.finalHeight, config.finalY, config.speed)
      console.log(config)
    }
  }

  /**
   * Animates the bars.
   *
   * @param {number} finalHeight - The final height of the bar.
   * @param {number} finalY - The final y position of the bar.
   * @param {number} speed - The speed of the animation.
   */
  #animateBar (finalHeight, finalY, speed) {
    let currentHeight = 0
    let currentY = parseInt(this.#rect.getAttribute('y')) + finalHeight

    const SPEED = speed
    const increment = finalHeight / SPEED
    const yIncrement = finalHeight / SPEED

    console.log(finalHeight)

    /**
     * Animates the bars.
     */
    const animate = () => {
      if (currentHeight < finalHeight) {
        currentHeight += increment
        currentY -= yIncrement
        this.#rect.setAttribute('height', currentHeight)
        this.#rect.setAttribute('y', currentY)
        requestAnimationFrame(animate)
      } else {
        this.#rect.setAttribute('height', finalHeight)
        this.#rect.setAttribute('y', finalY)
      }
    }
    requestAnimationFrame(animate)
  }
}

export { Animation }
