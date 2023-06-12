import styles from './page.module.css'
import Image from "next/image";
import AuthComponent from "@/component/Organisms/AuthComponent/AuthComponent";


export default function Home() {
  return (
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Sudo-Q</h1>
          <Image src={"/icons/sudoku.png"} alt={"sudoku"} width={64} height={64}/>
        </div>
        <div className={styles.wrapper}>
            <AuthComponent></AuthComponent>
        </div>
      </div>
  )
}
