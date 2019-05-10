#!/usr/bin/env bash

export ENV="production"
export ENVFILE=".env.prod"
PACKAGE_NAME="com.lsmartapp"
PROJECT_ROOT=`pwd`
ANDROID_DIR="${PROJECT_ROOT}/android"
ANDROID_RELEASES_DIR="${ANDROID_DIR}/app/build/outputs/apk/release"
BUILD_ARGS="clean assembleRelease"

echo "Uninstalling ${PACKAGE_NAME}... apk from device"
adb shell pm uninstall $PACKAGE_NAME

echo "Bundling prod app..."
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

# This is to delete duplicates file that break the build
rm -rf android/app/src/main/res/drawable-xxxhdpi android/app/src/main/res/drawable-xxhdpi android/app/src/main/res/drawable-xhdpi android/app/src/main/res/drawable-mdpi android/app/src/main/res/drawable-hdpi

cd $ANDROID_DIR

# BUILD APK
echo "Building release apk..."
./gradlew $BUILD_ARGS

# INSTALL APK FROM COMMAND LINE
echo "Installing release apk on device..."
adb install ${ANDROID_RELEASES_DIR}/app-release.apk

cd $PROJECT_ROOT
