/**
 * A module representing a horizontal bar diagram.
 *
 * @author Ludwig Wittenberg <lw223cq@student.lnu.se>
 * @version 1.0.0
 */

import { GraphDiagram } from './GraphDiagram.js'

/**
 * A class representing a bar diagram.
 */
class HorizontalBarDiagram extends GraphDiagram {
  #dataObject
  #barValues
  /**
   * Creates an instance of BarDiagram.
   *
   * @param {object} data - The data that will be used to render the diagram.
   */
  constructor (data) {
    super(data)
    this.#dataObject = super.getDataObject()
    this.#barValues = super.getBarValues()
  }

  /**
   * Renders the diagram.
   *
   * @override
   */
  render () {
    const svg = super.getSvg()
    const barWidth = this.#dataObject.config.barWidth // fix a setter and a getter in the parent class
    const barSpacing = this.#dataObject.config.barSpacing // fix a setter and a getter in the parent class
    const svgHeight = svg.getAttribute('height') // fix a setter and a getter in the parent class
    const svgWidth = svg.getAttribute('width') // fix a setter and a getter in the parent class
    const maxDataValue = super.getMaxValue()

    super.createAxels(svg, svgWidth, svgHeight)

    // Loops through the data and render the bars
    const visualData = super.getVisualData()
    for (const data of visualData) {
      const index = this.#barValues.indexOf(data.data)
      const barHeigth = (data.data / maxDataValue) * (svgHeight - 50)
      const xCoordinate = index * (barWidth + barSpacing) + 50
      const yCoordinate = svgHeight - barHeigth - 30

      // Add bars to the diagram
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
      rect.setAttribute('x', xCoordinate)
      rect.setAttribute('y', yCoordinate)
      rect.setAttribute('width', barWidth)
      rect.setAttribute('height', barHeigth)
      rect.setAttribute('fill', data.color)

      /* ---------------------- INTERACTIVITY ---------------------- */
      const interactivityAndAnimationSettings = {
        rect,
        barHeigth,
        yCoordinate,
        data,
        type: 'horizontal'
      }
      super.applyInteractivityAndAnimation(interactivityAndAnimationSettings)
      /* ----------------------------------------------------------- */

      svg.appendChild(rect)

      // Add text to the bars
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
      text.setAttribute('x', xCoordinate + barWidth / 2)
      text.setAttribute('y', svgHeight - 10)
      text.setAttribute('fill', 'black')
      text.setAttribute('text-anchor', 'middle')
      text.setAttribute('font-size', this.#dataObject.config.fonts.xAxel)
      text.setAttribute('transform', `rotate(-45, ${xCoordinate + barWidth / 2}, ${svgHeight - 10})`)
      text.textContent = data.label

      svg.appendChild(text)
    }
  }
}

export { HorizontalBarDiagram }
