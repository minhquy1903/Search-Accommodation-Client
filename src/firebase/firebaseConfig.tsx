import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBCoO0MilVBM0gQ8M5x2C5Q__HQ-YPXP5A',
  authDomain: 'upheld-arena-310808.firebaseapp.com',
  projectId: 'upheld-arena-310808',
  storageBucket: 'upheld-arena-310808.appspot.com',
  messagingSenderId: '605827866841',
  appId: '1:605827866841:web:af14c1fcb3ee39f8badec8',
  measurementId: 'G-5QG2W0KWFX',
  isAppVerificationDisabledForTesting: true,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
