import styles from './Carrossel.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import PropTypes from 'prop-types'



function Carrossel({arrayImages}) {
   
    return(
        <>
      <Swiper className={`${styles.swiper} mySwiper`}
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        cardsEffect={{ slideShadows: false }}
      >
        
        
        {arrayImages.map(imagem => (
        <SwiperSlide className={`swiper-slide ${styles.imgUnha}`} key={imagem}>
            <img src={imagem}/>
          </SwiperSlide>
            
                ))}
        
      </Swiper>
    </>
      
                

    )
}

Carrossel.propTypes = {
    arrayImages: PropTypes.array.isRequired
}

export default Carrossel