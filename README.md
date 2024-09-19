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
    },
    decoration: {
      showGrid: true
    },
    multipleData: {
      data: [
        [10, 20, 100, 40, 120, 96, 130],
        [10, 20, 100, 40, 120, 96, 130],
        [10, 20, 100, 40, 120, 96, 130],
        [10, 20, 100, 40, 120, 96, 130],
        [10, 20, 100, 40, 120, 96, 130],
        [10, 20, 100, 40, 120, 96, 130],
        [10, 20, 100, 40, 120, 96, 130]
      ],
      labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    }
  })

  diagramFactory.createDiagram()
```