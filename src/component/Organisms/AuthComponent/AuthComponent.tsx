'use client';
import styles from "./AuthComponent.module.css"
import LoginForm from "@/component/Molecules/LoginForm/LoginForm";
import GoogleButton from "@/component/Molecules/GoogleButton/GoogleButton";
import {useState} from "react";

export default function AuthComponent(){
    const [stage, setStage] = useState("login")
    return(
        <>
            {stage=="login"&&
                <>
                    <LoginForm></LoginForm>
                    <a className={styles.text}>OR</a>
                    <GoogleButton />
                    <a className={styles.text} onClick={event => setStage("register")}> Don't have an account yet? Register</a>
                </>
            }
            {stage=="register"&&
                <a className={styles.text} onClick={event => setStage("login")}>You have an account? Login</a>
            }
        </>
    )
}