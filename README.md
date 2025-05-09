<<<<<<< HEAD
This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
=======
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
>>>>>>> 37f2fdcdcd21b368520052660eb38df21d43b311
