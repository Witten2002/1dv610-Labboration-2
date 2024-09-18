/**
 * A module representing a horizontal bar diagram.
 *
 * @author Ludwig Wittenberg <lw223cq@student.lnu.se>
 * @version 1.0.0
 */

import { BarDiagram } from './BarDiagram.js'
import { Interactivity } from './Interactivity.js'

/**
 * A class representing a bar diagram.
 */
class HorizontalBarDiagram extends BarDiagram {
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
    this.#barValues = super.getBarValues(super.getVisualData())
  }

  /**
   * Renders the diagram.
   *
   * @override
   */
  render () {
    const svg = document.querySelector(this.#dataObject.config.elementId) // elementId here
    const barWidth = 60 // make this dynamic prop add this to the BarDiagram class or Diagram class. EN TIONEDEL UTAV BREDDEN
    const barSpacing = 10 // make this dynamic. EN TIONEDEL UTAV BARWIDTH
    const svgHeight = svg.getAttribute('height')
    const svgWidth = svg.getAttribute('width')
    const maxDataValue = super.findMaxValue()

    super.createAxels(svg, svgWidth, svgHeight)

    // Loop through the data and render the bars
    const visualData = super.getVisualData()
    for (const data of visualData) {
      const index = this.#barValues.indexOf(data.data)
      const barHeigth = (data.data / maxDataValue) * (svgHeight - 50)
      const x = index * (barWidth + barSpacing) + 50
      const y = svgHeight - barHeigth - 30

      // Add bars to the diagram
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
      rect.setAttribute('x', x)
      rect.setAttribute('y', y)
      rect.setAttribute('width', barWidth)
      rect.setAttribute('height', barHeigth)
      rect.setAttribute('fill', data.color)

      console.log(data)

      // add an if statement if the user want to add interactivity to the bars
      if (this.#dataObject.config.interactivity) {
        const interactive = new Interactivity(rect)
        interactive.makeInteractive(this.#dataObject, barHeigth, y, data)
      }

      svg.appendChild(rect)

      // Add text to the bars
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
      text.setAttribute('x', x + barWidth / 2)
      text.setAttribute('y', svgHeight - 10)
      text.setAttribute('fill', 'black')
      text.setAttribute('text-anchor', 'middle')
      text.setAttribute('transform', `rotate(-45, ${x + barWidth / 2}, ${svgHeight - 10})`)
      text.textContent = data.label

      svg.appendChild(text)
    }
  }
}

export { HorizontalBarDiagram }
