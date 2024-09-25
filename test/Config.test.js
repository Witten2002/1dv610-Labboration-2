/**
 * The automatic test for config settings.
 *
 * @author Ludwig Wittenberg <lw223cq@student.lnu.se>
 * @version 1.0.0
 */

import '@testing-library/jest-dom'
import { HorizontalBarDiagram } from '../src/lib/DiagramFactory/src/HorizontalBarDiagram.js'

test('The svg element is found in the DOM', () => {
  document.body.innerHTML = '<svg id="svgDiagram" width="600" height="400"></svg>'

  const svgElement = document.querySelector('#svgDiagram')

  expect(svgElement).toBeInTheDocument()
})

test('Should throw when no element is provided', () => {
  document.body.innerHTML = '<svg id="svgDiagram" width="600" height="400"></svg>'

  expect(() => {
    const horizontalBarDiagram = new HorizontalBarDiagram({})
    horizontalBarDiagram.render()
  }).toThrow('The element is not provided.')
})

test('Should throw when not element is not found in DOM.', () => {
  document.body.innerHTML = '<svg id="svgDiagram" width="600" height="400"></svg>'

  expect(() => {
    const horizontalBarDiagram = new HorizontalBarDiagram({
      elementId: 'svgElement'
    })
    horizontalBarDiagram.render()
  }).toThrow('Could not find the element in the DOM.')
})

test('Should throw no data is provided', () => {
  document.body.innerHTML = '<svg id="svgDiagram" width="600" height="400"></svg>'

  expect(() => {
    const horizontalBarDiagram = new HorizontalBarDiagram({
      elementId: '#svgDiagram'
    })
    horizontalBarDiagram.render()
  }).toThrow('Data was not provided.')
})

test('Should throw when no data is provided.', () => {
  document.body.innerHTML = '<svg id="svgDiagram" width="600" height="400"></svg>'

  expect(() => {
    const horizontalBarDiagram = new HorizontalBarDiagram({
      elementId: '#svgDiagram'
    })
    horizontalBarDiagram.render()
  }).toThrow('Data was not provided.')
})

test('Should throw when no value is provided.', () => {
  document.body.innerHTML = '<svg id="svgDiagram" width="600" height="400"></svg>'

  expect(() => {
    const horizontalBarDiagram = new HorizontalBarDiagram({
      elementId: '#svgDiagram',
      data: [
        { label: 'A', color: 'blue' }
      ]
    })
    horizontalBarDiagram.render()
  }).toThrow('Value was not provided.')
})

test('Should throw when no label is provided.', () => {
  document.body.innerHTML = '<svg id="svgDiagram" width="600" height="400"></svg>'

  expect(() => {
    const horizontalBarDiagram = new HorizontalBarDiagram({
      elementId: '#svgDiagram',
      data: [
        { value: 100, color: 'blue' }
      ]
    })
    horizontalBarDiagram.render()
  }).toThrow('Label was not provided.')
})

test('Should throw when no color is provided.', () => {
  document.body.innerHTML = '<svg id="svgDiagram" width="600" height="400"></svg>'

  expect(() => {
    const horizontalBarDiagram = new HorizontalBarDiagram({
      elementId: '#svgDiagram',
      data: [
        { value: 100, label: 'A' }
      ]
    })
    horizontalBarDiagram.render()
  }).toThrow('Color was not provided.')
})

test('Should not throw when the required config is provided.', () => {
  document.body.innerHTML = '<svg id="svgDiagram" width="600" height="400"></svg>'

  expect(() => {
    const horizontalBarDiagram = new HorizontalBarDiagram({
      elementId: '#svgDiagram',
      data: [
        { value: 100, label: 'A', color: 'blue' }
      ]
    })
    horizontalBarDiagram.render()
  }).not.toThrow()
})

test('Should not throw when multiple data objects is provided.', () => {
  document.body.innerHTML = '<svg id="svgDiagram" width="600" height="400"></svg>'

  expect(() => {
    const horizontalBarDiagram = new HorizontalBarDiagram({
      elementId: '#svgDiagram',
      data: [
        { value: 10, label: 'A', color: 'blue' },
        { value: 30, label: 'B', color: 'red' },
        { value: 60, label: 'C', color: 'yellow' },
        { value: 100, label: 'D', color: 'green' },
        { value: 800, label: 'E', color: 'black' },
        { value: 130, label: 'F', color: 'pink' }
      ]
    })
    horizontalBarDiagram.render()
  }).not.toThrow()
})

test('Should not throw when interactivity expand is added.', () => {
  document.body.innerHTML = '<svg id="svgDiagram" width="600" height="400"></svg>'

  expect(() => {
    const horizontalBarDiagram = new HorizontalBarDiagram({
      elementId: '#svgDiagram',
      data: [
        { value: 100, label: 'A', color: 'blue' }
      ],
      Interactivity: {
        expand: true
      }
    })
    horizontalBarDiagram.render()
  }).not.toThrow()
})

test('Should not throw when interactivity infoBoxWhenHover is added.', () => {
  document.body.innerHTML = '<svg id="svgDiagram" width="600" height="400"></svg>'

  expect(() => {
    const horizontalBarDiagram = new HorizontalBarDiagram({
      elementId: '#svgDiagram',
      data: [
        { value: 100, label: 'A', color: 'blue' }
      ],
      Interactivity: {
        infoBoxWhenHover: true
      }
    })
    horizontalBarDiagram.render()
  }).not.toThrow()
})

test('Should not throw when interactivity infoBoxWhenHover is added.', () => {
  document.body.innerHTML = '<svg id="svgDiagram" width="600" height="400"></svg>'

  expect(() => {
    const horizontalBarDiagram = new HorizontalBarDiagram({
      elementId: '#svgDiagram',
      data: [
        { value: 100, label: 'A', color: 'blue' }
      ],
      Interactivity: {
        infoBoxWhenHover: true
      }
    })
    horizontalBarDiagram.render()
  }).not.toThrow()
})

test('Should not throw when interactivity infoBoxWhenHover and expand is added.', () => {
  document.body.innerHTML = '<svg id="svgDiagram" width="600" height="400"></svg>'

  expect(() => {
    const horizontalBarDiagram = new HorizontalBarDiagram({
      elementId: '#svgDiagram',
      data: [
        { value: 100, label: 'A', color: 'blue' }
      ],
      Interactivity: {
        expand: true,
        infoBoxWhenHover: true
      }
    })
    horizontalBarDiagram.render()
  }).not.toThrow()
})

test('Should not throw when animtion is added', () => {
  document.body.innerHTML = '<svg id="svgDiagram" width="600" height="400"></svg>'

  expect(() => {
    const horizontalBarDiagram = new HorizontalBarDiagram({
      elementId: '#svgDiagram',
      data: [
        { value: 100, label: 'A', color: 'blue' }
      ],
      animation: true
    })
    horizontalBarDiagram.render()
  }).not.toThrow()
})

test('Should not throw when animtion speed is added', () => {
  document.body.innerHTML = '<svg id="svgDiagram" width="600" height="400"></svg>'

  expect(() => {
    const horizontalBarDiagram = new HorizontalBarDiagram({
      elementId: '#svgDiagram',
      data: [
        { value: 100, label: 'A', color: 'blue' }
      ],
      animation: {
        speed: 10
      }
    })
    horizontalBarDiagram.render()
  }).not.toThrow()
})

test('Should not throw when decoration showGrid is false', () => {
  document.body.innerHTML = '<svg id="svgDiagram" width="600" height="400"></svg>'

  expect(() => {
    const horizontalBarDiagram = new HorizontalBarDiagram({
      elementId: '#svgDiagram',
      data: [
        { value: 100, label: 'A', color: 'blue' }
      ],
      decoration: {
        showGrid: false
      }
    })
    horizontalBarDiagram.render()
  }).not.toThrow()
})

test('Should not throw when full config is provided.', () => {
  document.body.innerHTML = '<svg id="svgDiagram" width="600" height="400"></svg>'

  expect(() => {
    const horizontalBarDiagram = new HorizontalBarDiagram({
      elementId: '#svgDiagram',
      data: [
        { label: 'A', value: 10, color: 'blue' },
        { label: 'B', value: 20, color: 'red' },
        { label: 'C', value: 100, color: 'green' },
        { label: 'D', value: 40, color: 'yellow' },
        { label: 'E', value: 120, color: 'purple' },
        { label: 'F', value: 96, color: 'orange' },
        { label: 'G', value: 130, color: 'cyan' }
      ],
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
    horizontalBarDiagram.render()
  }).not.toThrow()
})
