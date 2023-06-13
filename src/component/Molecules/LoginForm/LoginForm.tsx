'use client';
import Input from "@/component/Atoms/Input/Input";
import Button from "@/component/Atoms/Button/Button";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";



export default function LoginForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Login = () =>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user.email);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return(
        <>
            <Input onInputChange={(e)=>{setEmail(e.target.value)}} placeholder={"email"} />
            <Input onInputChange={(e)=>{setPassword(e.target.value)}} placeholder={"password"} />
            <Button onc={Login}>Login</Button>
        </>
    )
}