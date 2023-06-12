import styles from "./Input.module.css"
interface InputProps{
    onInputChange: ()=>void
    placeholder: string
}

export default function Input({onInputChange,placeholder}:  InputProps){
    return(
        <input className={styles.input} required={true} placeholder={placeholder} onChange={onInputChange}></input>
    )
}