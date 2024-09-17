/**
 * This module concatinates the data that will be used to render the diagram.
 *
 * @author Ludwig Wittenberg <lw223cq@student.lnu.se>
 * @version 1.0.0
 */

/**
 * This creates the data that will be used to render the diagram.
 */
class CreateData {
  #dataObjects
  #data
  #labels
  /**
   * Creates an instance of CreateData. This will create and validate the data.
   *
   * @param {object} config - The data that will be used to render the diagram.
   */
  constructor (config) {
    this.#dataObjects = []
    this.#data = []
    this.#labels = []
    this.#setData(config.data)
    this.#setLabels(config.labels)
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
   * @returns {object} - The data and labels.
   */
  #concatinateObjects () {
    for (let i = 0; i < this.#data.length; i++) {
      const bar = {
        data: this.#data[i],
        label: this.#labels[i]
      }
      this.#dataObjects.push(bar)
    }
    return this.#dataObjects
  }

  /**
   * Returns the data.
   *
   * @returns {object} - The data.
   */
  getData () {
    return this.#concatinateObjects()
  }
}

export { CreateData }
