/**
 * Represents a diagram factory.
 *
 * @author Ludwig Wittenberg <lw223cq@student.lnu.se>
 * @version 1.0.0
 */
import { HorizontalBarDiagram } from './HorizontalBarDiagram.js'

/**
 * A class representing a diagram.
 */
class DiagramFactory {
  #data
  /**
   * Creates an instance of DiagramFactory.
   *
   * @param {object} data - The data that will be used to render the diagram.
   */
  constructor (data) {
    this.data = data
  }

  /**
   * Creates the diagram.
   *
   * @returns {string} - The rendered diagram.
   */
  createDiagram () {
    const horizontalBarDiagram = new HorizontalBarDiagram(this.data)
    return horizontalBarDiagram.render()
  }
}

export { DiagramFactory }
