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
  /* ----- Private properties ----- */
  // the rect element
  #rect
  #originalColor
  #originalHeight
  #originalWidth
  #originalX
  #originalY
  #infoBox
  #title
  #value
  /* ----------------------------- */

  /**
   * Creates an instance of Interactivity.
   *
   * @param {object} rect - The chart that will be used to render the diagram.
   */
  constructor (rect) {
    this.#rect = rect
    this.#originalColor = this.#rect.getAttribute('fill')
    this.#originalHeight = parseInt(this.#rect.getAttribute('height'))
    this.#originalWidth = parseInt(this.#rect.getAttribute('width'))

    // get the original position of the bars
    this.#originalX = parseInt(this.#rect.getAttribute('x'))
    this.#originalY = parseInt(this.#rect.getAttribute('y'))

    // create the info box
    this.#createInfoBox()
  }

  /**
   * Makes the bars interactive.
   *
   * @param {object} dataObject - The settings for the interactivity.
   * @param {number} barHeigth - The height of the bars.
   * @param {number} finalY - The final y position of the bars.
   * @param {object} visualData - The index of the bars.
   * @param {string} type - The type of the diagram.
   */
  makeInteractive (dataObject, barHeigth, finalY, visualData, type) { // change the name and maybe create a object where the data is stored to minimize the number of arguments
    if (dataObject.config.interactivity.hover.show && type !== 'Line') {
      this.#reactToMouseOver(dataObject.config.interactivity.hover.show.color, dataObject.config.interactivity.hover.show.expand)
    }

    // bugg here will not load the correct data when the mouse is over the bars. can be removed to add && type !== 'Line' to the if statement
    if (dataObject.config.interactivity.infoBoxWhenHover.show) {
      this.#showInfoBoxWhenHover(visualData.label, visualData.data)
    }

    if (dataObject.config.interactivity.animate) {
      this.#animateBar(this.#rect, barHeigth, finalY, dataObject.config.interactivity.animate.speed)
    }
    // ask if if the user want to make tho change color when the mouse is over the bars or if the user want to add a little information about the bars
  }

  /**
   * Reacts to mouse over.
   *
   * @param {string} color - The color of the bars when the mouse is over them.
   * @param {boolean} expand - If the bars should be expaned when the mouse is over them.
   */
  #reactToMouseOver (color = 'red', expand = false) {
    // interact with the bars when the mouse is over them
    this.#rect.addEventListener('mouseover', (event) => {
      event.target.setAttribute('fill', color)
      event.target.style.transition = 'width 0.5s ease, height 0.5s ease, x 0.5s ease, y 0.5s ease'
      if (expand) {
        // expand the bars when the mouse is over them and animate the change
        event.target.setAttribute('width', this.#originalWidth + 10)
        event.target.setAttribute('height', this.#originalHeight + 10)
        event.target.setAttribute('x', this.#originalX - 5)
        event.target.setAttribute('y', this.#originalY - 5)
      }
    })

    // reset the color of the bars when the mouse is not over them
    this.#rect.addEventListener('mouseout', (event) => {
      event.target.setAttribute('fill', this.#originalColor)
      if (expand) {
        // reset the bars to their original size and position when the mouse is not over them
        event.target.setAttribute('width', this.#originalWidth)
        event.target.setAttribute('height', this.#originalHeight)
        event.target.setAttribute('x', this.#originalX)
        event.target.setAttribute('y', this.#originalY)
      }
    })
  }

  /**
   * Shows an info box when the mouse is over the bars.
   *
   * @param {object} title - The settings for the info box.
   * @param {object} value - The settings for the info box.
   */
  #showInfoBoxWhenHover (title, value) {
    // show the info box when the mouse is over the bars
    this.#rect.addEventListener('mouseover', (event) => {
      this.#infoBox.style.display = 'flex'
      setTimeout(() => {
        this.#infoBox.style.opacity = '1'
        this.#infoBox.style.transform = 'scale(1)'
      }, 1000)
      this.#title.textContent = title
      this.#value.textContent = value
    })

    // move the info box with the mouse
    this.#rect.addEventListener('mousemove', (event) => {
      this.#infoBox.style.top = `${event.clientY + 10}px`
      this.#infoBox.style.left = `${event.clientX + 10}px`
    })

    // hide the info box when the mouse is not over the bars
    this.#rect.addEventListener('mouseout', (event) => {
      this.#infoBox.style.display = 'none'
      this.#infoBox.style.opacity = '0'
      this.#infoBox.style.transform = 'scale(0.95)'
    })
  }

  /**
   * Creates the info box.
   */
  #createInfoBox () {
    this.#infoBox = document.createElement('div')

    /* ----- Create the elements for the info box ----- */
    this.#title = document.createElement('span')
    this.#title.style.fontWeight = 'bold'
    this.#title.style.fontFamily = 'Arial'
    this.#title.style.fontSize = '12px'
    this.#infoBox.appendChild(this.#title)

    this.#value = document.createElement('span')
    this.#value.style.fontFamily = 'Arial'
    this.#value.style.fontSize = '12px'
    this.#infoBox.appendChild(this.#value)
    /* ----------------------------------------------- */

    /* ----- Style the info box ----- */
    this.#infoBox.style.position = 'absolute'
    this.#infoBox.style.backgroundColor = 'white'
    this.#infoBox.style.color = 'black'
    this.#infoBox.style.padding = '5px'
    this.#infoBox.style.borderRadius = '1px'
    this.#infoBox.style.border = '1px solid black'
    this.#infoBox.style.zIndex = '10'
    this.#infoBox.style.display = 'none'
    this.#infoBox.style.pointerEvents = 'none'
    this.#infoBox.style.flexDirection = 'column'
    this.#infoBox.style.justifyContent = 'space-between'
    this.#infoBox.style.alignItems = 'start'
    this.#infoBox.style.transition = 'opacity 1s ease, transform 1s ease'
    this.#infoBox.style.opacity = '0'
    this.#infoBox.style.transform = 'scale(0.95)'
    /* ------------------------------ */

    document.body.appendChild(this.#infoBox)
  }

  /**
   * Animates the bars.
   *
   * @param {object} rect - The bar that will be animated.
   * @param {number} finalHeight - The final height of the bar.
   * @param {number} finalY - The final y position of the bar.
   * @param {number} speed - The speed of the animation.
   */
  #animateBar (rect, finalHeight, finalY, speed) { // eventuellt gör denna abstrakt
    let currentHeight = 0
    let currentY = parseInt(rect.getAttribute('y')) + finalHeight

    const SPEED = speed
    const increment = finalHeight / SPEED
    const yIncrement = finalHeight / SPEED

    /**
     * Animates the bars.
     */
    const animate = () => {
      if (currentHeight < finalHeight) {
        currentHeight += increment
        currentY -= yIncrement
        rect.setAttribute('height', currentHeight)
        rect.setAttribute('y', currentY)
        requestAnimationFrame(animate)
      } else {
        rect.setAttribute('height', finalHeight)
        rect.setAttribute('y', finalY)
      }
    }
    requestAnimationFrame(animate)
  }
}

export { Interactivity }
