import styles from "./Input.module.css"
import {objectInputType} from "zod";
import {InputHTMLAttributes} from "react";
interface InputProps{
    onInputChange: (value: string) => void
    placeholder: string
}

export default function Input({onInputChange,placeholder}:  InputProps){
    return(
        <input className={styles.input} required={true} placeholder={placeholder} onChange={(e)=>{onInputChange(e.target.value)}}></input>
    )
}