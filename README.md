# Quick start

### First time your start ?
To follow those steps, you need to have an Android SDK setted up and Xcode setted up with the last version of the command lines tools

#### On Android
  - `yarn` to install all dependencies
  - `yarn start` to start watcher
  - `sh $ANDROID_HOME/tools/bin/sdkmanager --licenses` to accept licence
  - `yarn android` to run on your phone

#### On iOS
  - `yarn` to Install dependencies
  - `yarn update:ios` to update cocoapods libs

### Note about Firebase

**Firebase is only used for logging and debugging purpose.**
You don't need to add firebase .json files, unless you need a firebase Android / iOS functionality.

### Not the first time your start && up to date dependencies ?
#### On Android

  - `yarn start`
  - `yarn android` to run on your phone

#### On iOS
  - `yarn start`
  - `yarn ios` to launch the app in dev mode in a simulator

  You can also launch Xcode (and I recommand it).
  Open the `./ios/<Project>.xcworkspace` file and choose the target you want to build / launch:

  ![Dev target is selected in Xcode](./doc/target.png)


# Build on Android

### First time you build on this computer ?
You need to generate a release key by running the script `yarn android:generate:certificate`
Use `Bearstudio$76` for the password
Answer to asked information, and fill password
Then run `yarn android:build:release`

### Not the first time ?
Just run `yarn android:build:release`

# Build on iOS

In Xcode, select the `<project>-release` target and click the arrow to launch a build.
If it succeed, there is an extra step : you need to generate an archive to be able to publish the app.

![Generate an archive in Xcode](./doc/archive.gif)

# How to add a new screen

First you need to know if your screen is:
- A Modal ?
- Accessible only for unauthenticated users ?
- Accessible only for authenticated users ?
- Always accessible ?

## My screen is a modal screen
Add your component screen declaration inside the `RootStack` object.

## My screen is for unauthenticated users
Add your component screen declaration inside the `UnauthenticatedStack` stack.

## My screen is for authenticated users
Add your component screen declaration inside the `AuthenticatedStack` stack.

## My screen is always accessible
Add it to the `RootStack` stack.

In every case, never touch or add a component inside the `AppStack`, it is responsible of switching between the auth and unauth state.

# Export keystore hash for Facebook App

```keytool -exportcert -alias androiddebugkey -keystore .android/debug.keystore | openssl SHA1 -binary | openssl base64```

### Supported versions

## Android

4.1 and higher

## iOS

9.0 and higer
