'use client'
import {initFirebase} from "@/firebase/init";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import GoogleButton from 'react-google-button'
import styles from "./GoogleButton.module.css";

const app = initFirebase();
const provider = new GoogleAuthProvider();
const auth = getAuth();

const signIn = async () => {
    const user  = await signInWithPopup(auth, provider);
}

export default function GoogleLogin() {
    return(
        <GoogleButton onClick={signIn} type={"light"} className={styles.google}/>
    )
}