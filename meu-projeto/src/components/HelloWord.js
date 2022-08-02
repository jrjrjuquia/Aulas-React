import Frase from "./Frase"
import styles from './HelloWord.module.css'

function HelloWord() {

    return (
        <div className={styles.HelloWordConteiner}>
            <h1 className={styles.HelloWordContent}> Meu Primeiro Arquivo JSX</h1>
            <Frase/>
        </div>
    )

}

export default HelloWord