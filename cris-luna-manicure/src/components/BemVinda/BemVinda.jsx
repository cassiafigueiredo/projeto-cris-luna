import imagens from '../ArrayImagens';  
import Carrossel from '../Carrossel/Carrossel'
import styles from './BemVinda.module.css'
import PropTypes from 'prop-types'

function BemVinda() {
    return(
        <div className= {`pt-5  ${styles.bemVinda}`}>
        <Carrossel arrayImages={imagens}/>
        <div className={styles.frase}>
            <h2 className={styles.bvH2}>
                Seja Bem vinda(o)!
            </h2>
            <p className={styles.bvP}>
                Confira alguns dos meus trabalhos e navegue pelo site para se apaixonar pelos detalhes!
            </p>
        </div>
    </div>
    )
   
}
BemVinda.propTypes = {
    arrayImages: PropTypes.array.isRequired
}

export default BemVinda