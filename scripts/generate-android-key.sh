#!/usr/bin/env bash

cd android/app
keytool -genkey -v -keystore lsmartapp-key.keystore -alias lsmartapp-key -keyalg RSA -keysize 2048 -validity 10000
