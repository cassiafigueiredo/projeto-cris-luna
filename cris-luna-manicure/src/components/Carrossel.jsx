
import { useState, useEffect, useRef } from 'react'
import styles from './Carrossel.module.css'
import { motion } from 'framer-motion'
import imagem1 from '../assets/images/cinza-claro.jpg'
import imagem2 from '../assets/images/cinza-escuro.jpg'
import imagem3 from '../assets/images/cinza-mao-fechada.jpg'
import imagem4 from '../assets/images/cinza-mao-aberta.jpg'
import imagem5 from '../assets/images/cinza-terço.jpg'
import imagem6 from '../assets/images/vermelho-acessorios.jpg'

const imagens = [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6]

function Carrossel() {
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
                {imagens.map(imagem => (
                    <motion.div className={styles.imgUnha} key={imagem}>
                        <img src={imagem}/>
                    </motion.div>
                ))}

            </motion.div>
        </motion.div>

       </div> 
    )
}

export default Carrossel