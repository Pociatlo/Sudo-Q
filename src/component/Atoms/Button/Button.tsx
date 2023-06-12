import styles from "./Button.module.css"
import React from "react";
interface ButtonProps{
    onc?: ()=>void
}

export default function Button ({onc,children}:  React.PropsWithChildren<ButtonProps>){
    return(
        <button className={styles.button} onClick={onc}>{children} </button>
    )
}