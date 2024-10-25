/**
 * TEST file for LineDiagram
 *
 * @author Ludwig Wittenberg <lw223cq@student.lnu.se>
 * @version 1.0.0
 */

import { CreateTemplate } from './LineDiagram.template.test.js'

/**
 * class for testing.
 */
class TestLineDiagram {
  /**
   * Constructor for the class.
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
   * Create title for the test.
   */
  #createTitle () {
    const body = document.querySelector('body')
    const h1 = document.createElement('h1')
    h1.textContent = 'LineDiagram Test'

    body.append(h1)
  }

  /**
   * Test number of points.
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

    const t = 'Test Number of points'
    const d = 'Calculate the number of points in the diagram.'
    const e = 'The number of points should be ' + data.length
    const c = new CreateTemplate(t, d, e, 'LINEtest1', data)
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
    const c = new CreateTemplate(t, d, e, 'LINEtest2', data)
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
    const d = 'Check if each value is correct. You can either check the value by the grid or by hovering over the a point and wait for a second.'
    const e = 'All values should be in the correct order: ' + values
    const c = new CreateTemplate(t, d, e, 'LINEtest3', data)
    c.createTemplate()
  }

  /**
   * Test color.
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
    const d = 'Check if one color is in the diagram'
    const e = 'One colors exist and should be:  ' + colors[0]
    const c = new CreateTemplate(t, d, e, 'LINEtest4', data)
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
    const d = 'Hover over a point. Wait for a second. Controll if the point gets bigger and a box appears with the correct label and value. When not hovering over check if the box been removed and point is back to orginal size.'
    const e = 'The point gets bigger when hovering over and a box appears with the correct data. The box should disappear and the point should get back to the orginal size. Labels should be ' + labels + ' Value should be: ' + values
    const c = new CreateTemplate(t, d, e, 'LINEtest6', data)
    c.createTemplate()
  }
}

export { TestLineDiagram }
