import styles from "./Button.module.css"
import React, {ReactNode} from "react";
interface ButtonProps{
    onc: (e: React.MouseEvent<HTMLButtonElement>)=>void
    child: ReactNode
}

export default async function Button({onc,child}:  ButtonProps){
    return(
        <button className={styles.button} onClick={onc}></button>
    )
}