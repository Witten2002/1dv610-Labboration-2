/**
 * TEST template file for CircleDiagram.
 *
 * @author Ludwig Wittenberg <lw223cq@student.lnu.se>
 * @version 1.0.0
 */

import { DiagramFactory } from '../../../lib/DiagramFactory/DiagramFactory.js'

/**
 * Class for creating the template.
 */
class CreateTemplate {
  #title
  #whatToTest
  #whatToExpect
  #elementId
  #data
  #body

  /**
   * Constructor for the class.
   *
   * @param {string} title - The title of the test.
   * @param {string} whatToTest - The description of what to test.
   * @param {string} whatToExpect - The expected result.
   * @param {string} elementId - The id of the element.
   * @param {Array} data - The data for the diagram.
   */
  constructor (title, whatToTest, whatToExpect, elementId, data) {
    this.#title = title
    this.#whatToTest = whatToTest
    this.#whatToExpect = whatToExpect
    this.#elementId = elementId
    this.#data = data
    this.#body = document.querySelector('body')
  }

  /**
   * Creates the template.
   */
  createTemplate () {
    const testDiv = document.createElement('div')
    testDiv.setAttribute('height', 1000)
    testDiv.setAttribute('width', 500)

    const h2 = document.createElement('h2')
    h2.textContent = this.#title
    testDiv.append(h2)

    const h3Desc = document.createElement('h3')
    h3Desc.textContent = 'Description'
    testDiv.append(h3Desc)

    const desc = document.createElement('p')
    desc.textContent = this.#whatToTest
    testDiv.append(desc)

    const h3Expect = document.createElement('h3')
    h3Expect.textContent = 'Expected'
    testDiv.append(h3Expect)

    const expect = document.createElement('p')
    expect.textContent = this.#whatToExpect
    testDiv.append(expect)

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('id', this.#elementId)
    svg.setAttribute('width', 500)
    svg.setAttribute('height', 1000)

    testDiv.append(svg)

    this.#body.append(testDiv)

    this.#setConfig(this.#body)
  }

  /**
   * Sets the configuration for the diagram.
   */
  #setConfig () {
    const diagramFactory = new DiagramFactory({
      elementId: `#${this.#elementId}`,
      height: 200,
      width: 400,
      data: this.#data,
      interactivity: {
        expand: true,
        infoBoxWhenHover: true
      },
      animation: {
        speed: 100
      },
      decoration: {
        showGrid: true
      }
    })

    diagramFactory.displayCircleDiagram()
  }
}

export { CreateTemplate }
