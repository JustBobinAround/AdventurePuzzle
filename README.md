# AdventurePuzzle - Try It Out!
[Demo Adventure](https://justbobinaround.github.io/AdventurePuzzle/)*

This is a GitHub Pages website that presents a choose-your-own-adventure story. Users can make choices and navigate through the story, experiencing different outcomes based on their decisions.

This project is designed to be used in conjunction with the AdventurePuzzle-Builder application, which is a JavaFX application that provides a GUI interface for developing stories and converting them into the appropriate Story.json format to be read by this website.

## AdventurePuzzle-Builder
This is an interactive gui for creating text adventure .json files made in [AdventurePuzzle-Builder](https://github.com/JustBobinAround/AdventurePuzzle-Builder)*.

The AdventurePuzzle-Builder project is a JavaFX application that simplifies the process of creating choose-your-own-adventure stories. It offers a user-friendly graphical interface where you can develop your story by creating nodes, defining outcomes, adding items, and specifying choices.

Once you've created and finalized your story in the AdventurePuzzle-Builder application, you can export it as a valid `Story.json` file. This file can then be used by this GitHub Pages website to present your interactive story to users.

For more information and instructions on using the AdventurePuzzle-Builder application, refer to the separate documentation included with that project.

## Project Overview

The choose-your-own-adventure website project consists of an HTML file (`index.html`) and a JavaScript file (`main.js`). The HTML file provides the structure of the webpage, and the JavaScript file contains the logic to handle user interactions and display the story.

## Technologies Used

- HTML
- JavaScript
- jQuery library

## Getting Started

To run the choose-your-own-adventure website locally, follow these steps:

1. Clone the repository: `git clone https://github.com/JustBobinAround/AdventurePuzzle.git`
2. Navigate to the project directory: `cd AdventurePuzzle`
3. Start an HTTP server to serve the website. You can use Python's built-in HTTP server library with the following command:

   ```bash
   python3 -m http.server
   ```

   This will start a local server on `http://localhost:8000`.

4. Open your web browser and visit `http://localhost:8000` to view the choose-your-own-adventure website.

## Usage

- Upon loading the webpage, the story messages and initial options will be displayed.
- Read the story messages and click on the provided options to make choices.
- The chosen option will update the story outcome and display the next set of messages and choices.
- Continue making choices to progress through the adventure and explore different outcomes.

## Customization

To modify the story and choices, follow these steps:

1. Open the `Story.json` file.
2. Update the JSON structure to define your own story, outcomes, and choices.
3. Ensure the updated `Story.json` file follows the same format and structure as the existing file.

## License

This project is licensed under the [GNU General Public License v3.0](LICENSE) - see the [LICENSE](LICENSE) file for details.
