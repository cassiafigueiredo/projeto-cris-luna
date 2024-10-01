
//import styles from './Carrossel.module.css'
import { motion } from 'framer-motion'
import imagem1 from '../src/assets/images/cinza-claro.jpeg'
import imagem2 from '../src/assets/images/cinza-escuro.jpeg'
import imagem3 from '../src/assets/images/cinza-mao-fechada.jpeg'
import imagem4 from '../src/assets/images/cinza-mao-aberta.jpeg'
import imagem5 from '../src/assets/images/cinza-terço.jpeg'
import imagem6 from '../src/assets/images/vermelho-acessorios.jpeg'

const imagens = [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6]

function Carrossel() {
    return(
       <div className='carrossselWrap'>

        <motion.div className='carrossel'>
            <motion.div className='inner'>
            
                {imagens.map(imagem => (
                    // eslint-disable-next-line react/jsx-keyy
                    <motion.div>
                        <img/>
                    </motion.div>
                ))}

            </motion.div>
        </motion.div>

       </div> 
    )
}

export default Carrossel