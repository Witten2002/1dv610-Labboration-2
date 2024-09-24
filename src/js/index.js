import { DiagramFactory } from '../lib/DiagramFactory/DiagramFactory'

try {
  const diagramFactory = new DiagramFactory({
    elementId: '#svgDiagram', // REQUIRED
    data: [ // REQUIRED
      { label: 'A', value: 10, color: 'blue' },
      { label: 'B', value: 20, color: 'red' },
      { label: 'C', value: 100, color: 'green' },
      { label: 'D', value: 40, color: 'yellow' },
      { label: 'E', value: 120, color: 'purple' },
      { label: 'F', value: 96, color: 'orange' },
      { label: 'G', value: 130, color: 'cyan' }
    ],
    interactivity: { // OPTIONAL
      changeColor: { // OPTIONAL
        expand: true // OPTIONAL
      },
      infoBoxWhenHover: true // OPTIONAL
    },
    animation: { // OPTIONAL
      speed: 100 // OPTIONAL
    },
    decoration: { // OPTIONAL
      showGrid: true // OPTIONAL
    }
  })
  // diagramFactory.createBarDiagram()
  diagramFactory.createLineDiagram()
  // diagramFactory.createCircleDiagram()
} catch (error) {
  console.error(error.message)
}
