# multiplication-tables

This is a simple React Native app built as part of a beginner-level training exercise. It displays multiplication tables for numbers 2 to 10 and allows the user to interact by adding multiples and resetting the values. The project serves as a basic example of handling user input, managing state, and rendering dynamic content in a React Native app.

Features
Displays multiplication tables for numbers 2 to 10.

User can click a button to add the next multiple to the multiplication table.

Allows users to reset the table back to its initial state.

Interactive UI with a clean and simple layout.

Components Used
1. StepCounter Component
This component is responsible for rendering a multiplication table for a given number (from 2 to 10).

Props:

label: The number whose multiplication table is displayed (e.g., "2", "3", "4", etc.).

step: The step size (which is essentially the number itself, like 2 for table of 2).

Functions:

handlePress: Increments the current count by the step (e.g., if step is 2, it adds 2 to the count each time the button is clicked).

handleReset: Resets the count and the click history to 0.

renderHistory: Dynamically generates a list of multiplication results based on the number of clicks. It renders each multiplication in the form of label x multiplier = result.

2. App Component
The main component of the application, which contains the layout, UI elements, and the logic for rendering all the StepCounter components for different multiplication tables.

Features:

A LinearGradient is used to create a beautiful gradient background.

Displays a header with the app title and description.

A horizontal ScrollView that holds all the multiplication tables. This allows users to scroll through different tables for each number (2 to 10).

Each multiplication table is represented by the StepCounter component.

Libraries and Tools Used
React Native: Framework for building mobile apps using JavaScript and React.

useState Hook: Used to manage state for the count and the number of button clicks.

LinearGradient: A component from react-native-linear-gradient that is used to apply a gradient background to the entire app.
