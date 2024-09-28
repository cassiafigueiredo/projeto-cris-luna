import styles from './CrisLuna.module.css'
function CrisLuna() {
   
    return(
        <div className={styles.divCris}>
             <img className={styles.unhasInicio} src="./src/assets/images/unhas-img-principal.jpeg" alt="unhas vermelhas" />
            <h1 className='text-center p-2'>
                Cris Luna.
            </h1>
           
        </div>
        
    )
}

export default CrisLuna