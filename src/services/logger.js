
import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/database';

// eslint-disable-next-line no-undef
const isDev = __DEV__;

const error = (...info) => {
  if (isDev) {
    console.error(...info);
  } else {
    const resToString = `ERROR: ${Date.now()} ${info.reduce((acc, cur) => `${acc} , ${JSON.stringify(cur)}`)}`;
    // firebase.crashlytics().log(resToString);
    firebase.database().ref('/logs/anonymous').push(resToString);
  }
};

const log = (...info) => {
  try {
    if (isDev) {
      console.log(...info);
    } else {
      const resToString = `${Date.now()} ${info.reduce((acc, cur) => `${acc} , ${JSON.stringify(cur)}`)}`;
      console.log(resToString);
      // firebase.crashlytics().log(resToString);
      firebase.database().ref('/logs/anonymous').push(resToString)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          error(err);
        });
    }
  } catch (err) {
    error(err);
  }
};

module.exports = {
  log,
  error,
};
