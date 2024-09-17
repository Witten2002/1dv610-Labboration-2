import { DiagramFactory } from '../lib/DiagramFactory'

try {
  const diagramFactory = new DiagramFactory({
    data: [10, 20, 100, 40, 120, 96, 130],
    labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
  })
  diagramFactory.createDiagram()
} catch (error) {
  console.error(error.message)
}
