/**
 * A class representing a diagram.
 *
 * @author Ludwig Wittenberg <lw223cq@student.lnu.se>
 * @version 1.0.0
 */
import { CreateData } from './CreateData.js'
/**
 * A class representing a diagram.
 */
class Diagram {
  #createData
  /**
   * Creates an instance of Diagram.
   *
   * @param {object} config - The data that will be used to render the diagram.
   */
  constructor (config) {
    // this.#setData(config.data) // validate data or create a validation class that returns an array with concateted the data and labels and then check if the data is valid or not and then return the data in form of an array with objects.
    this.#createData = new CreateData(config)
  }

  /**
   * Returns the data.
   *
   * @returns {object} - The data.
   */
  getData () {
    const data = []
    for (const value of this.#createData.getData()) {
      data.push(value.data)
    }
    return data
  }

  /**
   * Returns the data objects.
   *
   * @returns {object} - The data objects.
   */
  getDataObjects () {
    return this.#createData.getDataObjects()
  }

  /**
   * Renders the diagram. This method must be implemented by a subclass. This is becasuse we want it to act like a abstract class.
   */
  render () {
    throw new Error('The method render must be implemented')
  }
}

export { Diagram }
