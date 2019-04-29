import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyAZVqtsODpugnQC_aLTKOLHrO2Z5JbQtGI',
  authDomain: 'lsmart-dev.firebaseapp.com',
  databaseURL: 'https://lsmart-dev.firebaseio.com',
  projectId: 'lsmart-dev',
  storageBucket: 'lsmart-dev.appspot.com',
  messagingSenderId: '979836000418',
};

const app = firebase.initializeApp(config);
export default app;
