/**
 * The automatic test for HorizontalBarDiagram.
 *
 * @author Ludwig Wittenberg <lw223cq@student.lnu.se>
 * @version 1.0.0
 */

import '@testing-library/jest-dom'
import { HorizontalBarDiagram } from '../src/lib/DiagramFactory/src/HorizontalBarDiagram.js'

test('A bar should be rendered for each data object.', () => {
  document.body.innerHTML = '<svg id="svgDiagram" width="600" height="400"></svg>'

  const data = [
    { label: 'A', value: 10, color: 'blue' },
    { label: 'B', value: 20, color: 'red' },
    { label: 'C', value: 100, color: 'green' },
    { label: 'D', value: 40, color: 'yellow' },
    { label: 'E', value: 120, color: 'purple' },
    { label: 'F', value: 96, color: 'orange' },
    { label: 'G', value: 130, color: 'cyan' }
  ]

  const horizontalBarDiagram = new HorizontalBarDiagram({
    elementId: '#svgDiagram',
    data
  })
  horizontalBarDiagram.render()

  const svg = document.querySelector('#svgDiagram')
  const bars = svg.querySelectorAll('rect')

  expect(bars.length).toBe(data.length)
})

test('A bar should be rendered for each data object with the correct color.', () => {
  document.body.innerHTML = '<svg id="svgDiagram" width="600" height="400"></svg>'

  const data = [
    { label: 'A', value: 10, color: 'blue' },
    { label: 'B', value: 20, color: 'red' },
    { label: 'C', value: 100, color: 'green' },
    { label: 'D', value: 40, color: 'yellow' },
    { label: 'E', value: 120, color: 'purple' },
    { label: 'F', value: 96, color: 'orange' },
    { label: 'G', value: 130, color: 'cyan' }
  ]

  const horizontalBarDiagram = new HorizontalBarDiagram({
    elementId: '#svgDiagram',
    data
  })
  horizontalBarDiagram.render()

  const svg = document.querySelector('#svgDiagram')
  const bars = svg.querySelectorAll('rect')

  expect(bars.length).toBeGreaterThanOrEqual(data.length)

  data.forEach((object, index) => {
    expect(bars[index].getAttribute('fill')).toBe(object.color)
  })
})
