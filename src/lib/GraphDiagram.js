/**
 * A module representing a bar diagram.
 *
 * @author Ludwig Wittenberg <lw223cq@student.lnu.se>
 * @version 1.0.0
 */

import { Diagram } from './Diagram.js'

/**
 * A class representing a graph diagram.
 */
class GraphDiagram extends Diagram {
  #graphValues
  #dataObjects
  #visualData
  #barValues
  /**
   * Creates an instance of graph diagram.
   *
   * @param {object} data - The data that will be used to render the diagram.
   */
  constructor (data) {
    super(data)
    this.#dataObjects = super.getDataObject()
    this.#visualData = super.getVisualData()
    this.#barValues = []

    this.#setBarValues()
    this.#setMaxValue()
  }

  /**
   * Rounds up a value to the nearest ten.
   *
   * @param {number} value - The value to round up.
   * @returns {number} - The rounded up value.
   */
  #roundUpToNearestTen (value) { // eventuellt flytta denna till diagram.js
    return Math.ceil(value / 10) * 10
  }

  /**
   * Sets the bar values.
   */
  #setBarValues () {
    for (const value of this.#visualData) {
      this.#barValues.push(value.data)
    }
  }

  /**
   * Creates an array with the values.
   *
   * @returns {Array} - The values.
   */
  getBarValues () { // eventuellt flytta denna till diagram.js
    return this.#barValues
  }

  /**
   * Returns the data.
   */
  #setMaxValue () { // eventuellt flytta denna till diagram.js
    const NUM_OF_ROWS = 5

    const values = this.getBarValues(super.getVisualData())
    const maxValue = Math.max(...values)
    const rowValue = (this.#roundUpToNearestTen(maxValue) / NUM_OF_ROWS)
    this.#graphValues = (this.#roundUpToNearestTen(rowValue) * NUM_OF_ROWS)
  }

  /**
   * Returns the max value.
   *
   * @returns {number} - The max value.
   */
  getMaxValue () {
    return this.#graphValues
  }

  /**
   * Creates the axels.
   *
   * @param {object} svg - The svg element.
   * @param {number} svgWidth - The width of the svg element.
   * @param {number} svgHeight - The height of the svg element.
   */
  createAxels (svg, svgWidth, svgHeight) {
    const axisPadding = 50

    const xAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    xAxis.setAttribute('x1', axisPadding - 10)
    xAxis.setAttribute('y1', svgHeight - axisPadding + 20)
    xAxis.setAttribute('x2', svgWidth - axisPadding - 10)
    xAxis.setAttribute('y2', svgHeight - axisPadding + 20)
    xAxis.setAttribute('stroke', 'black')
    svg.appendChild(xAxis)

    const yAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    yAxis.setAttribute('x1', axisPadding - 10)
    yAxis.setAttribute('y1', axisPadding - 30)
    yAxis.setAttribute('x2', axisPadding - 10)
    yAxis.setAttribute('y2', svgHeight - axisPadding + 20)
    yAxis.setAttribute('stroke', 'black')
    svg.appendChild(yAxis)

    const NUM_OF_LINES = 5
    for (let i = 0; i <= NUM_OF_LINES; i++) {
      const yPos = svgHeight - axisPadding - (i * (svgHeight - axisPadding) / NUM_OF_LINES)

      const label = document.createElementNS('http://www.w3.org/2000/svg', 'text')
      label.setAttribute('x', axisPadding - 15)
      label.setAttribute('y', yPos + 25)
      label.setAttribute('text-anchor', 'end')
      label.setAttribute('font-size', this.#dataObjects.config.fonts.yAxel)
      label.textContent = Math.round((this.#graphValues / NUM_OF_LINES) * i)
      svg.appendChild(label)

      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
      line.setAttribute('x1', axisPadding - 10)
      line.setAttribute('y1', yPos + 20)
      line.setAttribute('x2', svgWidth) // line length
      line.setAttribute('y2', yPos + 20)
      line.setAttribute('stroke', 'grey')
      svg.appendChild(line)
    }
  }
}

export { GraphDiagram }
