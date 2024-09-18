/**
 * This module concatinates the data that will be used to render the diagram.
 *
 * @author Ludwig Wittenberg <lw223cq@student.lnu.se>
 * @version 1.0.0
 */

/**
 * This creates the data that will be used to render the diagram.
 */
class DataObject {
  #dataObject
  #data
  #labels
  #color
  #interactivity
  #elementId
  #animation
  #visualData
  /**
   * Creates an instance of CreateData. This will create and validate the data.
   *
   * @param {object} config - The data that will be used to render the diagram.
   */
  constructor (config) {
    this.#data = []
    this.#labels = []
    this.#visualData = []

    /* --------- VALIDATE --------- */
    this.#setData(config.data)
    this.#setLabels(config.labels)
    this.#setColor(config.color)
    this.#setInteractivity(config.interactivity ? config.interactivity : false)
    this.#setElementId(config.elementId)
    this.#setAnimation(config.animation)
    /* ---------------------------- */

    // This must be done last
    this.#concatinateObjects()
  }

  /**
   * Sets the animation.
   *
   * @param {object} animation - The animation that will be used to render the diagram.
   */
  #setAnimation (animation) {
    if (!animation) {
      this.#animation = false
    } else {
      this.#animation = {
        speed: animation.speed
      }
    }
  }

  /**
   * Sets the interactivity.
   *
   * @param {boolean} interactivity - If the user wants to add interactivity to the diagram.
   */
  #setInteractivity (interactivity) {
    if (interactivity) {
      this.#interactivity = {
        hover: {
          // check if the user want hover effect on the bars
          show: interactivity.hover ? interactivity.hover : false
        },
        infoBoxWhenHover: {
          // check if the user want to add a little information about the bars when the mouse is over them
          show: interactivity.infoBoxWhenHover ? interactivity.infoBoxWhenHover : false
        }
      }
    }
  }

  /**
   * Sets the data.
   *
   * @param {object} data - The data that will be used to render the diagram.
   */
  #setData (data) {
    for (const value of data) {
      // if the data is not a number then throw an error
      if (!parseInt(value)) {
        throw new Error('The data must be a number')
      } else {
        this.#data.push(value)
      }
    }
  }

  /**
   * Sets the element id.
   *
   * @param {string} elementId - The element id that will be used to render the diagram.
   */
  #setElementId (elementId) {
    if (typeof elementId !== 'string' && !elementId.startsWith('#')) {
      throw new Error('The elementId must be a string')
    } else {
      this.#elementId = elementId
    }
  }

  /**
   * Sets the color. The default color is blue.
   *
   * @param {string} color - The color that will be used to render the diagram.
   */
  #setColor (color = 'blue') { // probably need to move this
    const s = new Option().style
    s.color = color

    if (s.color === '') {
      throw new Error('The color must be a string')
    } else {
      this.#color = color
    }
  }

  /**
   * Sets the labels.
   *
   * @param {object} labels - The labels that will be used to render the diagram.
   */
  #setLabels (labels) {
    // error handling for the labels
    if (labels.length !== this.#data.length && labels.length !== 0) {
      throw new Error('The labels must be the same length as the data')
    } else if (!Array.isArray(labels)) {
      throw new Error('The labels must be an array')
    } else {
      for (const label of labels) {
        if (typeof label !== 'string') {
          throw new Error('The labels must be a string')
        } else {
          this.#labels.push(label)
        }
      }
    }
  }

  /**
   * Concatinates the data and labels.
   *
   */
  #concatinateObjects () {
    for (let i = 0; i < this.#data.length; i++) {
      const bar = {
        data: this.#data[i],
        label: this.#labels[i],
        color: this.#color // dont know where to put this right now. multiple colors or one color for all bars
      }
      this.#visualData.push(bar)
    }

    this.#createObject()
  }

  /**
   * Creates the object.
   */
  #createObject () {
    this.#dataObject = {
      config: {
        elementId: this.#elementId,
        interactivity: this.#interactivity,
        animation: this.#animation
      },
      visualData: this.#visualData
    }
  }

  /**
   * Returns the visual data.
   *
   * @returns {object} - The data.
   */
  getVisualData () {
    return this.#visualData
  }

  /**
   * Returns the data object.
   *
   * @returns {object} - The data.
   */
  getDataObject () {
    return this.#dataObject
  }
}

export { DataObject }
