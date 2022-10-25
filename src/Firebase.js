import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
//   appId: process.env.REACT_APP_APP_ID,
// };
const firebaseConfig = {
  apiKey: 'AIzaSyDndUSN1j_s61dLcrxqvL5QnHg70dfPy84',
  authDomain: 'netflix-clonne-306a9.firebaseapp.com',
  projectId: 'netflix-clonne-306a9',
  storageBucket: 'netflix-clonne-306a9.appspot.com',
  messagingSenderId: '379772527286',
  appId: '1:379772527286:web:3d6bfe9161c7492083fc17',
};
// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
