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
  #colors
  #interactivity
  #elementId
  #animation
  #visualData
  #barWidth
  #svg
  #yAxelFontSize
  #xAxelFontSize
  #barSpacing
  #showGrid
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
    this.#setInteractivity(config.interactivity)
    this.#setElementId(config.elementId)
    this.#setAnimation(config.animation)
    this.#setSvg(config.elementId)
    this.#setBarSpacing(this.#svg.getAttribute('width'))
    this.#setBarWidth(this.#svg.getAttribute('width'))
    this.#setXAxelFontSize(this.#svg.getAttribute('width'))
    this.#setYAxelFontSize(this.#svg.getAttribute('height'))
    this.#setShowGrid(config.decoration.showGrid)
    /* ---------------------------- */

    // This must be done last
    this.#createObject()
  }

  /**
   * Sets the show grid.
   *
   * @param {boolean} showGrid - If the user wants to show the grid.
   */
  #setShowGrid (showGrid = false) {
    if (typeof showGrid !== 'boolean') {
      throw new Error('The showGrid must be a boolean')
    }

    this.#showGrid = showGrid
  }

  /**
   * Sets the bar spacing.
   *
   * @param {number} width - The width of the svg element.
   */
  #setBarSpacing (width) {
    if (width < 200) {
      this.#barSpacing = 1
    } else if (width < 600) {
      this.#barSpacing = 5
    } else {
      this.#barSpacing = 10
    }
  }

  /**
   * Sets the x axel font size.
   *
   * @param {number} width - The width of the svg element.
   */
  #setXAxelFontSize (width) {
    if (width < 200) {
      this.#xAxelFontSize = 8
    } else if (width < 600) {
      this.#xAxelFontSize = 14
    } else {
      this.#xAxelFontSize = 18
    }
  }

  /**
   * Sets the y axel font size.
   *
   * @param {number} height - The height of the svg element.
   */
  #setYAxelFontSize (height) {
    if (height < 200) {
      this.#yAxelFontSize = 8
    } else if (height < 600) {
      this.#yAxelFontSize = 14
    } else {
      this.#yAxelFontSize = 18
    }
  }

  /**
   * Sets the svg element.
   *
   * @param {string} elementId - The id of the svg element.
   */
  #setSvg (elementId) {
    this.#svg = document.querySelector(elementId)

    if (!this.#setSvg) {
      throw new Error('The elementId does not exist')
    }
  }

  /**
   * Sets the bar width. **Magical number** 50 is the padding on the left side of the svg element.
   *
   * @param {number} width - The width of the svg element.
   */
  #setBarWidth (width) {
    const dataLength = this.#data.length
    const barSpacing = this.#barSpacing * dataLength
    this.#barWidth = ((width - barSpacing - 50) / (dataLength))
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
          show: interactivity.changeColor ? interactivity.changeColor : false
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
   * @param {string} colors - The color that will be used to render the diagram.
   */
  #setColor (colors) { // change this so the user can choose multiple colors or add another method that can handle multiple colors
    if (!colors.isArray) {
      this.#validateColor(colors)
      this.#color = colors
    } else {
      for (const color of colors) {
        this.#validateColor(color)
        this.#colors.push(color)
      }
      this.#color = this.#colors[0]
    }
  }

  /**
   * Validate a color.
   *
   * @param {string} color - the color to be validated.
   */
  #validateColor (color) {
    const s = new Option().style
    s.color = color

    if (s.color === '') {
      throw new Error('The color must be a string')
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
        colors: this.#colors // generate random colors
      }
      this.#visualData.push(bar)
    }
  }

  /**
   * Creates the object.
   */
  #createObject () {
    this.#concatinateObjects()

    this.#dataObject = {
      config: {
        elementId: this.#elementId,
        interactivity: this.#interactivity,
        animation: this.#animation,
        barWidth: this.#barWidth,
        barSpacing: this.#barSpacing,
        svg: this.#svg,
        fonts: {
          yAxel: this.#yAxelFontSize,
          xAxel: this.#xAxelFontSize
        },
        decoration: {
          showGrid: this.#showGrid,
          color: this.#color
        }
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
