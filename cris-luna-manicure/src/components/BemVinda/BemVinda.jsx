import styles from './BemVinda.module.css'

function BemVinda() {
    return(
        <div className= {`pt-5  ${styles.bemVinda}`}>
        <h2 className={styles.bvH2}>
            Seja Bem vinda(o)!
        </h2>
        <p className={styles.pBV}>
            Confira alguns dos meus trabalhos e navegue pelo site para se apaixonar pelos detalhes!
        </p>
    </div>
    )
   
}

export default BemVinda