import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA7Kf45gkXtl-0veeKd5gqOP3FpxOtE0Eg',
  authDomain: 'omu-karate.firebaseapp.com',
  projectId: 'omu-karate',
  storageBucket: 'omu-karate.firebasestorage.app',
  messagingSenderId: '1027616304984',
  appId: '1:1027616304984:web:bdf20307808e66bd6d7f2d',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
googleProvider.addScope('https://www.googleapis.com/auth/youtube.readonly')

export { auth, googleProvider };
