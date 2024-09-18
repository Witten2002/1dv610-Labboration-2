/**
 * A class representing a diagram.
 *
 * @author Ludwig Wittenberg <lw223cq@student.lnu.se>
 * @version 1.0.0
 */
import { DataObject } from './DataObject.js'
import { Interactivity } from './Interactivity.js'
import { Animation } from './Animation.js'
/**
 * A class representing a diagram.
 */
class Diagram {
  #dataObject
  #svg
  /**
   * Creates an instance of Diagram.
   *
   * @param {object} config - The data that will be used to render the diagram.
   */
  constructor (config) {
    this.#setDataObject(config)
    this.#setSvg(this.#dataObject.getDataObject().config.svg)
  }

  /**
   * Sets the svg element.
   *
   * @param {object} svg - The svg element.
   */
  #setSvg (svg) {
    this.#svg = svg
  }

  /**
   * Returns the svg element.
   *
   * @returns {object} - The svg element.
   */
  getSvg () {
    return this.#svg
  }

  /**
   * Sets the data object.
   *
   * @param {object} config - The data that will be used to render the diagram.
   */
  #setDataObject (config) {
    this.#dataObject = new DataObject(config)
  }

  /**
   * Returns the data.
   *
   * @returns {object} - The data.
   */
  getVisualData () {
    const data = []
    const visualData = this.#dataObject.getVisualData()

    for (const value of visualData) {
      data.push(value)
    }
    return data
  }

  /**
   * Returns the data objects.
   *
   * @returns {object} - The data objects.
   */
  getDataObject () {
    return this.#dataObject.getDataObject()
  }

  /**
   * Creates the axels for the diagram.
   *
   * @param {object} config - The config.
   */
  applyInteractivityAndAnimation (config) {
    const objectData = this.getDataObject()

    if (objectData.config.interactivity) {
      const interactive = new Interactivity(config.rect)
      interactive.makeInteractive(objectData, config.barHeigth, config.yCoordinate, config.data)
    }

    if (objectData.config.animation) {
      const animate = new Animation(config.rect)
      animate.animation(config.type, config.barHeigth, config.yCoordinate, objectData.config.animation.speed)
    }
  }

  /**
   * Renders the diagram. This method must be implemented by a subclass. This is becasuse we want it to act like a abstract class.
   */
  render () {
    throw new Error('The method render must be implemented')
  }
}

export { Diagram }
