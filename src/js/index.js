import { TestBarDiagram } from './test/BarDiagram/BarDiagram.test.js'
import { TestLineDiagram } from './test/LineDiagram/LineDiagram.test.js'
import { TestCircleDiagram } from './test/CircleDiagram/CircleDiagram.test.js'

const testBarDiagram = new TestBarDiagram()
testBarDiagram.startTest()

const testLineDiagram = new TestLineDiagram()
testLineDiagram.startTest()

const testCircleDiagram = new TestCircleDiagram()
testCircleDiagram.startTest()
