import { DiagramFactory } from '../lib/DiagramFactory'

try {
  const diagramFactory = new DiagramFactory({
    elementId: '#svgDiagram',
    data: [10, 20, 100, 40, 120, 96, 130],
    labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    color: 'blue',
    interactivity: {
      changeColor: {
        color: 'green',
        expand: true
      },
      infoBoxWhenHover: true,
      animate: {
        speed: 100
      }
    },
    animation: {
      speed: 100
    }
  })
  diagramFactory.createDiagram()
} catch (error) {
  console.error(error.message)
}
