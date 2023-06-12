
import styles from "./Button.module.css"
import {ReactNode} from "react";
interface InputProps{
    onclick(): void,
    placeholder: string
}

export default function Input({onclick, placeholder}:  InputProps){
    return(
        <input className={styles.input} onClick={()=>{}} placeholder={placeholder}></input>
    )
}