// Firebase.js
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseCinfig'; // Import your Firebase configuration object

const Firebase = initializeApp(firebaseConfig);

export default Firebase; // Export the initialized Firebase app as the default export
