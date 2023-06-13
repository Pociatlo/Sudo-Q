'use client';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Input from "@/component/Atoms/Input/Input";
import Button from "@/component/Atoms/Button/Button";
import {useState} from "react";

export default function SignInForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const SignIn= () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;


            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

            });
    }
    return(
        <>
            <Input onInputChange={(e)=>setEmail(e)} placeholder={"email"}></Input>
            <Input onInputChange={(e)=>setPassword(e)} placeholder={"password"}></Input>
            <Button onc={SignIn}>Sign In</Button>
        </>
    )
}
