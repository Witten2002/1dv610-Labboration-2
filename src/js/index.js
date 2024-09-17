import { DiagramFactory } from '../lib/DiagramFactory'

try {
  const diagramFactory = new DiagramFactory({
    data: [10, 20, 100, 40, 120, 96, '130'],
    labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    color: 'blue',
    interactivity: {
      hover: {
        color: 'green',
        expand: true
      },
      infoBoxWhenHover: true
    }
  })
  diagramFactory.createDiagram()
} catch (error) {
  console.error(error.message)
}
