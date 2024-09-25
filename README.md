# 1dv610-Labboration-2
A lib for crearing diagrams

# UNDER CONSTRUCTION

## Tommorrow

Fix so that the diagrams can work with different sizes
Fix so that the an error occure when there is more bars than the diagram can handle or can i make it will load it dynamic? Like if there is more bars then space then I need to adjust the barwidth and the space between the bars.

## Current configuration

```javascript
  const diagramFactory = new DiagramFactory({
    elementId: '#svgDiagram',
    data: [10, 20, 100, 40, 120, 96, 130], // change to object with label and value
    labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], // change to object with label and value
    color: 'blue', // change to object with label and value
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
    },
    decoration: {
      showGrid: true
    }
  })

  // diagramFactory.createBarDiagram()
  // diagramFactory.createLineDiagram()
  // diagramFactory.createPieDiagram()
```
### WE WANT THIS
```javascript
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
      expand: true, // OPTIONAL,
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
  // diagramFactory.createLineDiagram()
  // diagramFactory.createPieDiagram()
```