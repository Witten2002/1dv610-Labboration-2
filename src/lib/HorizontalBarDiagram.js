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
  #data
  #diagram
  #dataObjects
  /**
   * Creates an instance of BarDiagram.
   *
   * @param {object} data - The data that will be used to render the diagram.
   */
  constructor (data) {
    super(data)
    this.#dataObjects = super.getData()
  }

  /**
   * Renders the diagram.
   *
   * @override
   */
  render () {
    const svg = document.querySelector('#svgDiagram')
    const barWidth = 40
    const barSpacing = 10
    const svgHeight = svg.getAttribute('height')
    const svgWidth = svg.getAttribute('width')
    const maxDataValue = super.findMaxValue()

    super.createAxels(svg, svgWidth, svgHeight)

    // Loop through the data and render the bars
    for (const value of super.getData()) {
      const barHeigth = (value / maxDataValue) * (svgHeight - 50)
      const x = super.getData().indexOf(value) * (barWidth + barSpacing) + 50
      const y = svgHeight - barHeigth - 30

      // Add bars to the diagram
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
      rect.setAttribute('x', x)
      rect.setAttribute('y', y)
      rect.setAttribute('width', barWidth)
      rect.setAttribute('height', barHeigth)
      rect.setAttribute('fill', 'blue')

      // add an if statement if the user want to add interactivity to the bars
      const interactive = new Interactivity(rect)
      interactive.makeInteractive()

      svg.appendChild(rect)

      // Add text to the bars
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
      text.setAttribute('x', x + barWidth / 2)
      text.setAttribute('y', svgHeight - 10)
      text.setAttribute('fill', 'black')
      text.setAttribute('text-anchor', 'middle')
      text.setAttribute('transform', `rotate(-45, ${x + barWidth / 2}, ${svgHeight - 10})`)
      text.textContent = value

      svg.appendChild(text)
    }
  }
}

export { HorizontalBarDiagram }
