import styles from './page.module.css'
import Button from "@/component/Button/Button";
import {initFirebase} from "@/firebase/init";
import {getAuth, signInWithPopup, GoogleAuthProvider, UserCredential} from "firebase/auth";

export default function Home() {

  const app = initFirebase();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const signIn = async () => {
    const user  = await signInWithPopup(auth, provider);
    console.log(user.user)
  }

  return (
    <Button child={<p>Zaloguj</p>}  onc={signIn}/>
  )
}
