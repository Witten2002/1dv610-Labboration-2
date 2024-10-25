# Test Documentation

## Introduction
The purpose of this testing process is to thoroughly validate the functionality and reliability of the `DiagramFactory` library, which is intended for use on the client side. This library is responsible for generating a variety of diagram types, each with its unique data structure and visual representation, directly in the user's browser environment.

During this test phase, we will focus on verifying that the factory successfully generates each type of diagram it is designed to create, ensuring that all input data is accurately processed and correctly visualized in client-side environments. We will also assess how well the library performs across different browsers and devices, ensuring compatibility and responsiveness.

In addition, we will evaluate various configurations, including interactive elements, animations, colors, and labels, to ensure that the diagrams behave as expected. Special attention will be given to edge cases, such as invalid or missing data, to assess how the library handles error scenarios and maintains stability in a browser context.

## Test Environment

The application is designed to be tested in a web environment, specifically on the client side, within various browser platforms. The testing process includes both automated and manual tests to ensure a comprehensive validation of the DiagramFactory library.

### Technologies Used:
- JavaScript (JS): Core functionality for the DiagramFactory library.
- HTML & CSS: Structure and styling of the user interface.
- SVG (Scalable Vector Graphics): Rendering diagrams with resolution independence and interactivity.

### Automated Testing:
Automated tests are executed using the following tools and frameworks:

- Testing framework: Jest.

Automated tests are used to validate key functions of the library, including:

- Diagram generation
- Data input processing
- Error handling

### Manual Testing:
Manual tests focus on the user experience and interaction with the application. These include:

- Verifying diagram rendering and appearance in real-time across browsers
- Testing responsiveness and performance on different devices
- Verifying interactivity features (e.g., hover effects, animations)

### Browsers:
- Google Chrome (latest version)
- Mozilla Firefox (latest version)

### Devices:
- Desktop: High-resolution (1920x1080)
- Laptop: Standard resolution (1366x768)

Automated and manual testing combined ensures both functional accuracy and a seamless user experience across different platforms.

## Test Cases

### Automated Test Cases

A suite of automated tests was executed to validate the core functionality of the DiagramFactory library. These tests covered various aspects of diagram creation, data processing, error handling, and configuration options. The test suite included unit tests and integration tests.

- Total number of automated tests: 24
- Tests passed: 24
- Tests failed: 0

Key automated tests:

- **Test Diagram Creation**: Verified that all supported diagram types (bar, line, pie) are generated correctly.
- **Test Data Handling**: Ensured proper data processing, including edge cases like empty or malformed input.
- **Test Error Handling**: Confirmed that the system responds gracefully to invalid or missing data.

### Manual Test Cases

For manual testing, a series of test cases were designed to evaluate the user experience and interaction with the DiagramFactory library. These tests focused on visual appearance and interactivity features of the diagrams.

To start the manual testing process, the following steps were taken:
1. clone the repository to a local environment.
2. run npm install to install all dependencies.
3. write npm start to start the development server.
4. Open the browser and navigate to the local server.
5. Start testing the DiagramFactory library with the following test cases.

| Test Case ID | Type | Name | Description | Expected Result | Status |
|--------------|------|------|-------------|-----------------|--------|
| TC1.1 | Bar | Test Number of bars | Calculate the number of bars in the diagram. | The number of bars should be 7 | PASS |
| TC1.2 | Bar | Test Each Label | Check if each label exist and if it is correct. | All labels exist and should be in the correct order: A,B,C,D,E,F,G | PASS |
| TC1.3 | Bar | Test Value | Check if each value is correct. You can either check the value by the grid or by hovering over the bar and wait for a second. | All values should be in the correct order: 96,80,40,100,130,120,60 | PASS |
| TC1.4 | Bar | Test Color | Check if each color is correct. | All colors exist and should be in the correct order: purple,yellow,green,blue,orange,pink,brown | PASS |
| TC1.5 | Bar | Test Animation | Reload the site and check if bars will be animated from bottom to top. | The bars should be animated bottom to top. | PASS |
| TC1.6 | Bar | Test Interactivity | Hover over a bar. Wait for a second. Controll if the bar gets bigger and a box appears with the correct label and value. When not hovering over check if the box been removed and bars is back to orginal size. | The bars gets bigger when hovering over and a box appears with the correct data. The box and bars should get back to the orginal state. Labels should be A,B,C,D,E,F,G Value should be: 96,80,40,100,130,120,60 | PASS |
| TC2.1 | Line | Test Number of points | Calculate the number of points in the diagram. | The number of points should be 7 | PASS |
| TC2.2 | Line | Test Each Label | Check if each label exist and if it is correct. | All labels exist and should be in the correct order: A,B,C,D,E,F,G | PASS |
| TC2.3 | Line | Test Value | Check if each value is correct. You can either check the value by the grid or by hovering over the a point and wait for a second. | All values should be in the correct order: 96,80,40,100,130,120,60 | PASS |
| TC2.4 | Line | Test Color | Check if one color is in the diagram | One colors exist and should be: purple | PASS |
| TC2.5 | Line | Test Interactivity | Hover over a point. Wait for a second. Controll if the point gets bigger and a box appears with the correct label and value. When not hovering over check if the box been removed and point is back to orginal size. | The point gets bigger when hovering over and a box appears with the correct data. The box should disappear and the point should get back to the orginal size. Labels should be A,B,C,D,E,F,G Value should be: 96,80,40,100,130,120,60 | PASS |
| TC3.1 | Circle | Test Number of paths | Calculate the number of paths in the diagram. | The number of paths should be 7 | PASS |
| TC3.2 | Circle | Test Each Label | Check if each label exist and if it is correct. | All labels exist and should be in the correct order: A,B,C,D,E,F,G | PASS |
| TC3.3 | Circle | Test Value | Check if each value is correct. Hover over a path to se what the value is. | All values should exist: 96,80,40,100,130,120,60 | PASS |
| TC3.4 | Circle | Test Color | Check if each color is correct. | All colors exist: purple,yellow,green,blue,orange,pink,brown | PASS |
| TC3.5 | Circle | Test Interactivity | Hover over a path. Wait for a second. Controll if a box appears with the correct label and value. When not hovering over check if the box has been removed. | A box appears with the correct data. The box should disappear when not hovering over the path. Labels should be A,B,C,D,E,F,G Value should be: 96,80,40,100,130,120,60 | PASS |

## Known Issues
While no critical issues were found during testing, the following areas may benefit from further investigation:
- Performance on mobile devices has not been tested and should be evaluated for responsiveness and usability.

## BugReports
| Issue ID | Description | Status | Priority | Remarks |
|----------|-------------|--------|----------|---------|
| BUG001 | The CircleDiagram does not have the ability to expand. | open | minor | Requires update to interaction logic |
| BUG002 | The Labels does not fit good with the circle diagram when the space is to small | open | minor | Suggest resizing or using smaller labels |

## Conclusion

The testing process for the `DiagramFactory` library was successful, with all automated and manual tests passing. The library demonstrated robust functionality in generating various types of diagrams, handling data processing, and providing interactive features. The tests also confirmed that the library is compatible with different browsers and devices, ensuring a consistent user experience.

No critical bugs were identified, and all expected functionalities performed as intended. However, it is recommended that further testing be conducted on mobile devices and in additional browsers (Safari, Microsoft Edge) to ensure broader compatibility.