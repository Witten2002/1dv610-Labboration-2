/**
 * The automatic test for HorizontalBarDiagram.
 *
 * @author Ludwig Wittenberg <lw223cq@student.lnu.se>
 * @version 1.0.0
 */

import '@testing-library/jest-dom'
import { HorizontalBarDiagram } from '../src/lib/DiagramFactory/src/HorizontalBarDiagram.js'

// Check if svg element exist in the DOM
test('The svg element is found in the DOM', () => {
  document.body.innerHTML = '<svg id="svgDiagram" width="600" height="400"></svg>'

  const svgElement = document.querySelector('#svgDiagram')

  expect(svgElement).toBeInTheDocument()
})

// Should throw when no element is provided
test('Should throw when no element is provided', () => {
  document.body.innerHTML = '<svg id="svgDiagram" width="600" height="400"></svg>'

  expect(() => {
    const horizontalBarDiagram = new HorizontalBarDiagram({})
    horizontalBarDiagram.render()
  }).toThrow('The element is not provided.')
})

// Should throw when not element is found.
test('Should throw when not element is not found in DOM.', () => {
  document.body.innerHTML = '<svg id="svgDiagram" width="600" height="400"></svg>'

  expect(() => {
    const horizontalBarDiagram = new HorizontalBarDiagram({
      elementId: 'svgElement'
    })
    horizontalBarDiagram.render()
  }).toThrow('Could not find the element in the DOM.')
})

// Should throw when no data is provided.
test('Should throw no data is provided', () => {
  document.body.innerHTML = '<svg id="svgDiagram" width="600" height="400"></svg>'

  expect(() => {
    const horizontalBarDiagram = new HorizontalBarDiagram({
      elementId: '#svgElement'
    })
    horizontalBarDiagram.render()
  }).toThrow('Data was not provided.')
})

// Should throw when no data is provided.
test('Should throw when no data is provided.', () => {
  document.body.innerHTML = '<svg id="svgDiagram" width="600" height="400"></svg>'

  expect(() => {
    const horizontalBarDiagram = new HorizontalBarDiagram({
      elementId: '#svgElement'
    })
    horizontalBarDiagram.render()
  }).toThrow('Data was not provided.')
})

// Should throw when no value is provided.
test('Should throw when no value is provided.', () => {
  document.body.innerHTML = '<svg id="svgDiagram" width="600" height="400"></svg>'

  expect(() => {
    const horizontalBarDiagram = new HorizontalBarDiagram({
      elementId: '#svgElement',
      data: [
        { label: 'A', color: 'blue' }
      ]
    })
    horizontalBarDiagram.render()
  }).toThrow('Value was not provided.')
})

// Should throw when no label is provided.
test('Should throw when no label is provided.', () => {
  document.body.innerHTML = '<svg id="svgDiagram" width="600" height="400"></svg>'

  expect(() => {
    const horizontalBarDiagram = new HorizontalBarDiagram({
      elementId: '#svgElement',
      data: [
        { value: 100, color: 'blue' }
      ]
    })
    horizontalBarDiagram.render()
  }).toThrow('Label was not provided.')
})

// Should throw when no color is provided.
test('Should throw when no color is provided.', () => {
  document.body.innerHTML = '<svg id="svgDiagram" width="600" height="400"></svg>'

  expect(() => {
    const horizontalBarDiagram = new HorizontalBarDiagram({
      elementId: '#svgElement',
      data: [
        { value: 100, label: 'A' }
      ]
    })
    horizontalBarDiagram.render()
  }).toThrow('Color was not provided.')
})
