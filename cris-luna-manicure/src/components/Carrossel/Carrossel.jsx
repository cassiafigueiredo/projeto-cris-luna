
import { useState, useEffect, useRef } from 'react'
import styles from './Carrossel.module.css'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'



function Carrossel({arrayImages}) {
    const carrossel = useRef()
    const [width, setWidth] = useState(0)
    useEffect(() => {
        console.log(carrossel.current?.scrollWidth, carrossel.current?.offsetWidth)
        setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
    },[])
    return(
       <div className={styles.carrosselWrap}>

        <motion.div ref={carrossel} className={styles.carrossel} whileTap={{ cursor: "grabbing"}}>
            <motion.div className={styles.inner}
            drag="x"
            dragConstraints={{ right: 0, left: -width}}
            >
                {arrayImages.map(imagem => (
                    <motion.div className={styles.imgUnha} key={imagem}>
                        <img src={imagem}/>
                    </motion.div>
                ))}

            </motion.div>
        </motion.div>

       </div> 
    )
}

Carrossel.propTypes = {
    arrayImages: PropTypes.array.isRequired
}

export default Carrossel