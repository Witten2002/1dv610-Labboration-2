/**
 * Represents a diagram factory.
 *
 * @author Ludwig Wittenberg <lw223cq@student.lnu.se>
 * @version 1.0.0
 */
import { HorizontalBarDiagram } from './src/HorizontalBarDiagram.js'
import { LineDiagram } from './src/LineDiagram.js'
import { CircleDiagram } from './src/CircleDiagram.js'

/**
 * A class representing a diagram.
 */
class DiagramFactory {
  #config
  /**
   * Creates an instance of DiagramFactory.
   *
   * @param {object} config - The data that will be used to render the diagram.
   */
  constructor (config) {
    this.#config = config
  }

  /**
   * Creates the diagram.
   */
  createBarDiagram () {
    try {
      const horizontalBarDiagram = new HorizontalBarDiagram(this.#config)
      horizontalBarDiagram.render()
    } catch (error) {
      console.error(error.message)
    }
  }

  /**
   * Creates the diagram.
   */
  createLineDiagram () {
    try {
      const lineDiagram = new LineDiagram(this.#config)
      lineDiagram.render()
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * Creates the diagram.
   */
  createCircleDiagram () {
    try {
      const circleDiagram = new CircleDiagram(this.#config)
      circleDiagram.render()
    } catch (error) {
      console.error(error)
    }
  }
}

export { DiagramFactory }
