/**
 * TEST file for CircleDiagram
 *
 * @author Ludwig Wittenberg <lw223cq@student.lnu.se>
 * @version 1.0.0
 */

import { CreateTemplate } from './CircleDiagram.template.test.js'

/**
 * Class for testing.
 */
class TestCircleDiagram {
  /**
   * Constructor for the test class.
   */
  constructor () {
    this.#createTitle()
  }

  /**
   * Starts the test.
   */
  startTest () {
    this.#test1()
    this.#test2()
    this.#test3()
    this.#test4()
    this.#test5()
  }

  /**
   * Creates a title for the test.
   */
  #createTitle () {
    const body = document.querySelector('body')
    const h1 = document.createElement('h1')
    h1.textContent = 'CircleDiagram Test'

    body.append(h1)
  }

  /**
   * Test number of paths.
   */
  #test1 () {
    const data = [
      { label: 'A', value: 10, color: 'blue' },
      { label: 'B', value: 20, color: 'red' },
      { label: 'C', value: 100, color: 'green' },
      { label: 'D', value: 40, color: 'yellow' },
      { label: 'E', value: 120, color: 'purple' },
      { label: 'F', value: 96, color: 'orange' },
      { label: 'G', value: 130, color: 'cyan' }
    ]

    const t = 'Test Number of paths'
    const d = 'Calculate the number of paths in the diagram.'
    const e = 'The number of paths should be ' + data.length
    const c = new CreateTemplate(t, d, e, 'Circletest1', data)
    c.createTemplate()
  }

  /**
   * Test each label.
   */
  #test2 () {
    const data = [
      { label: 'A', value: 60, color: 'purple' },
      { label: 'B', value: 10, color: 'yellow' },
      { label: 'C', value: 120, color: 'green' },
      { label: 'D', value: 130, color: 'blue' },
      { label: 'E', value: 100, color: 'orange' },
      { label: 'F', value: 40, color: 'pink' },
      { label: 'G', value: 96, color: 'brown' }
    ]

    const labels = []

    for (const d of data) {
      labels.push(d.label)
    }

    const t = 'Test Each Label'
    const d = 'Check if each label exist and if it is correct.'
    const e = 'All labels exist and should be in the correct order:  ' + labels
    const c = new CreateTemplate(t, d, e, 'Circletest2', data)
    c.createTemplate()
  }

  /**
   * Test each value.
   */
  #test3 () {
    const data = [
      { label: 'A', value: 96, color: 'orange' },
      { label: 'B', value: 80, color: 'yellow' },
      { label: 'C', value: 40, color: 'brown' },
      { label: 'D', value: 100, color: 'blue' },
      { label: 'E', value: 130, color: 'brown' },
      { label: 'F', value: 120, color: 'pink' },
      { label: 'G', value: 60, color: 'green' }
    ]

    const values = []

    for (const d of data) {
      values.push(d.value)
    }

    const t = 'Test Value'
    const d = 'Check if each value is correct. Hover over a path to se what the value is.'
    const e = 'All values should exist: ' + values
    const c = new CreateTemplate(t, d, e, 'Circletest3', data)
    c.createTemplate()
  }

  /**
   * Test each color.
   */
  #test4 () {
    const data = [
      { label: 'A', value: 60, color: 'purple' },
      { label: 'B', value: 40, color: 'yellow' },
      { label: 'C', value: 120, color: 'green' },
      { label: 'D', value: 130, color: 'blue' },
      { label: 'E', value: 100, color: 'orange' },
      { label: 'F', value: 40, color: 'pink' },
      { label: 'G', value: 96, color: 'brown' }
    ]

    const colors = []

    for (const d of data) {
      colors.push(d.color)
    }

    const t = 'Test Color'
    const d = 'Check if each color is correct.'
    const e = 'All colors exist: ' + colors
    const c = new CreateTemplate(t, d, e, 'Circletest4', data)
    c.createTemplate()
  }

  /**
   * Test interactivity.
   */
  #test5 () {
    const data = [
      { label: 'A', value: 96, color: 'orange' },
      { label: 'B', value: 80, color: 'yellow' },
      { label: 'C', value: 40, color: 'brown' },
      { label: 'D', value: 100, color: 'blue' },
      { label: 'E', value: 130, color: 'brown' },
      { label: 'F', value: 120, color: 'pink' },
      { label: 'G', value: 60, color: 'green' }
    ]

    const labels = []
    const values = []

    for (const d of data) {
      labels.push(d.label)
      values.push(d.value)
    }

    const t = 'Test Interactivity'
    const d = 'Hover over a path. Wait for a second. Controll if a box appears with the correct label and value. When not hovering over check if the box has been removed.'
    const e = 'A box appears with the correct data. The box should disappear when not hovering over the path. Labels should be ' + labels + ' Value should be: ' + values
    const c = new CreateTemplate(t, d, e, 'Circletest6', data)
    c.createTemplate()
  }
}

export { TestCircleDiagram }
