// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Initialize Firebase
const firebaseconfig= {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "sudo-q.firebaseapp.com",
    projectId: "sudo-q",
    storageBucket: "sudo-q.appspot.com",
    messagingSenderId: "297886481997",
    appId: "1:297886481997:web:ae7218370c83aa087c6604",
    measurementId: "G-7YLNG9D0T8"
}
console.log(firebaseconfig)
export const app = initializeApp(firebaseconfig);


export function initFirebase() {
    return app;
}

