/**
 * KOMMENTAR FÖR MODULEN
 *
 * @author Ludwig Wittenberg <lw223cq@student.lnu.se>
 * @version 1.0.0
 */
import { Diagram } from './Diagram.js'

/**
 * The CircleDiagram class
 */
class CircleDiagram extends Diagram {
  #dataObject
  #visualData
  #eachPrecents
  #eachAngles
  /**
   * The constructor.
   *
   * @param {object} config - The config object
   */
  constructor (config) {
    super(config)
    this.#dataObject = super.getDataObject()
    this.#visualData = super.getVisualData()

    this.#eachPrecents = []
    this.#eachAngles = []
  }

  /**
   * The render method that creates the Diagram.
   */
  render () {
    const sum = this.#calculateSum()
    this.#calculateEachPercent(sum)
    this.#calculateEachAngle()

    const svg = document.querySelector(this.#dataObject.config.elementId)
    const svgHeight = svg.getAttribute('height')
    const svgWidth = svg.getAttribute('width')
    const radius = Math.min(svgWidth, svgHeight) / 2 - 50
    const centerX = svgWidth / 2
    const centerY = svgHeight / 2

    const colors = ['red', 'lightgreen', 'blue', 'yellow', 'red', 'green', 'blue', 'yellow', 'red', 'green', 'blue', 'yellow'] // change
    let startAngle = 0

    for (let i = 0; i < this.#eachAngles.length; i++) {
      const endAngle = startAngle + this.#eachAngles[i] * Math.PI / 180

      /* ---------------- Each Section Coords ---------------- */
      const x1 = centerX + radius * Math.cos(startAngle)
      const y1 = centerY + radius * Math.sin(startAngle)
      const x2 = centerX + radius * Math.cos(endAngle)
      const y2 = centerY + radius * Math.sin(endAngle)
      /* ----------------------------------------------------- */

      // Determine if the arc should be the larger (1) or smaller (0) arc
      const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0

      // path config
      const pathData = [
        `M ${centerX} ${centerY}`,
        `L ${x1} ${y1}`,
        `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
        'Z'
      ].join(' ')

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      path.setAttribute('d', pathData)
      path.setAttribute('fill', colors[i]) // change

      svg.appendChild(path)

      startAngle = endAngle
    }
  }

  /**
   * Calculates the total sum.
   *
   * @returns {number} The total sum.
   */
  #calculateSum () {
    let sum = 0

    for (const value of this.#visualData) {
      sum += value.data
    }

    return sum
  }

  /**
   * Calculates each angl.
   */
  #calculateEachAngle () {
    const TOTAL_ANGEL = 360

    for (const percent of this.#eachPrecents) {
      const angle = TOTAL_ANGEL * percent
      this.#eachAngles.push(angle)
    }
  }

  /**
   * Calculate each percent.
   *
   * @param {number} sum - Total value.
   */
  #calculateEachPercent (sum) {
    for (const value of this.#visualData) {
      const percent = value.data / sum
      this.#eachPrecents.push(percent)
    }
  }
}

export { CircleDiagram }
