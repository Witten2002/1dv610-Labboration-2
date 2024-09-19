/**
 * KOMMENTAR FÖR MODULEN
 *
 * @author Ludwig Wittenberg <lw223cq@student.lnu.se>
 * @version 1.0.0
 */

import { HorizontalBarDiagram } from './HorizontalBarDiagram'

/**
 * A class representing a line diagram.
 */
class LineDiagram extends HorizontalBarDiagram {
  #dataObject
  #visualData

  /**
   * Creates an instance of LineDiagram.
   *
   * @param {object} config - The data that will be used to render the diagram.
   */
  constructor (config) {
    super(config)
    this.#dataObject = super.getDataObject()
    this.#visualData = super.getVisualData()
  }

  /**
   * Renders the diagram.
   */
  render () {
    let yCoordinate
    let xCoordinate
    const svg = super.getSvg()
    const svgHeight = svg.getAttribute('height')
    const svgWidth = svg.getAttribute('width')
    const maxDataValue = super.getMaxValue()

    super.createAxels(svg, svgWidth, svgHeight)

    const visualData = super.getVisualData()
    const points = []

    for (let i = 0; i < visualData.length; i++) {
      xCoordinate = (i / visualData.length) * (svgWidth - 100) + 50
      yCoordinate = svgHeight - (visualData[i].data / maxDataValue) * (svgHeight - 50) - 30
      points.push(`${xCoordinate},${yCoordinate}`)
    }

    const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline')
    polyline.setAttribute('points', points)
    polyline.setAttribute('fill', 'none')
    polyline.setAttribute('stroke', this.#dataObject.config.decoration.color)
    polyline.setAttribute('stroke-width', '2')

    svg.appendChild(polyline)

    // i = 0

    for (let i = 0; i < points; i++) {
      const coords = points[i].split(',')
      const xCoord = coords[0]
      const yCoord = coords[1]

      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
      text.setAttribute('x', xCoord)
      text.setAttribute('y', svgHeight - 10)
      text.setAttribute('fill', 'black')
      text.setAttribute('text-anchor', 'middle')
      text.setAttribute('font-size', this.#dataObject.config.fonts.xAxel)
      text.textContent = this.#visualData[i].label

      svg.appendChild(text)

      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      circle.setAttribute('cx', xCoord)
      circle.setAttribute('cy', yCoord)
      circle.setAttribute('r', 4)
      circle.setAttribute('fill', this.#dataObject.config.decoration.color)

      // here we can make this interactive

      svg.appendChild(circle)
    }
  }
}

export { LineDiagram }
