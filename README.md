# Ten Week Breathing Program

This app is built with React Native.

This app is created by React Native Cli.

`react-native init TenWeekBreathingProgram`

## Environment Setup

You need to install ***watchman*** and ***React Native Cli*** to build the app.

Watchman is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance.

To install ***watchman*** on macOS, run

`brew install watchman`

To install ***React Native Cli***, run

`npm install -g react-native-cli`


## Install Dependencies

To install dependencies, under the project root directory run

`yarn` or `npm install`

For iOS, go to **ios** directory and run

`pod install`

## Run on iOS

`yarn ios` or `npm run ios`

This will build the app for iOS and run app on the latest version of simulator based on XCode.

`yarn dev` or `npm run dev`

This will build the app for iOS and run app on iPhone 11 simulator.

To run the app with your preferred simulator, run following command.

`react-native run-ios --simulator <iPhone Version>`

## Run on Android

`yarn android` or `npm run android`

This will build the app for Android and run app on Android simulator.

## Start the app

`yarn start` or `npm run start`

This will just run the app on turned-on simulator.

## Build App

To build the app, turn on XCode and open .xcodeproj.

Build the app for the preferred simulator or plugged device.

**_Important_**

To exit the app by the **Exit** button on the screen, you need to link RNExitApp library.

To link the library to the app

### iOS

- Add RNExitApp.xcoderproj into your project in the Libraries folder.

- Add the .a file on the General tab of your target under Linked Frameworks And Libraries

- Add the .a file on the Build Phases tab of your target under Link Binary With Libraries

### Android

- In the settings.gradle

```
include ':react-native-exit-app', ':app'
project(':react-native-exit-app').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-exit-app/android')
```
 
- In the build.gradle

```compile project(':react-native-exit-app')```

- In MainApplication.java

```
import com.github.wumke.RNExitApp.RNExitAppPackage;
  ...
  @Override
  protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
      ...
      new RNExitAppPackage(),
      ...
    );
  }
  ...
```

For more information, you can visit

_https://www.npmjs.com/package/react-native-exit-app_