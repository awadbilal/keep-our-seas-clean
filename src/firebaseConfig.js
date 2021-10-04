import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAVrIQzep0d_0BHSJFcOxIytCOOIksMtZg",
  authDomain: "capstone-project-b1231.firebaseapp.com",
  projectId: "capstone-project-b1231",
  storageBucket: "capstone-project-b1231.appspot.com",
  messagingSenderId: "790533307107",
  appId: "1:790533307107:web:d9f4b84e3075413537e3d6",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase.firestore();
