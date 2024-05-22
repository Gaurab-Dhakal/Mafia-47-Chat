import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCW28_DVA4JCIqSrjRTY2XrE1k5bnhpwR8",
  authDomain: "mafia-47-85344.firebaseapp.com",
  projectId: "mafia-47-85344",
  storageBucket: "mafia-47-85344.appspot.com",
  messagingSenderId: "736379093534",
  appId: "1:736379093534:web:a8dba434556a4a8ea2e40f",
  measurementId: "G-M0J0BYF7JT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, app}