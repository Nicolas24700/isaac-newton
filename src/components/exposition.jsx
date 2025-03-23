import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export const Exposition = () => {
      const { t } = useTranslation();

      useEffect(() => {
        gsap.fromTo('h3 img', 
          { rotationX: 90, opacity: 0 }, 
          { rotationX: 0, opacity: 1, duration: 1, scrollTrigger: {
            trigger: 'h3',
            toggleActions: 'play none none reset'
          }}
        );
        gsap.fromTo('.cards1',
          { x: -200, opacity: 0 }, 
          { x: 0, opacity: 1, duration: 1, scrollTrigger: {
            trigger: '.cards1',
            toggleActions: 'play none none reset'
          }}
        );

        gsap.fromTo('.Cards2',
          { x: 20, opacity: 0 }, 
          { x: 0, opacity: 1, duration: 1, scrollTrigger: {
            trigger: '.Cards2',
            toggleActions: 'play none none reset'
          }}
        );
    
        gsap.fromTo('.Cards3', 
          { x: 20, opacity: 0 }, 
          { x: 0, opacity: 1, duration: 1, scrollTrigger: {
            trigger: '.Cards3',
            toggleActions: 'play none none reset'
          }}
        );
        gsap.fromTo('.panim', 
          { x: -200, opacity: 0 }, 
          { x: 0, opacity: 1, duration: 1, scrollTrigger: {
            trigger: '.panim',
            toggleActions: 'play none none reset'
          }}
        );
        

      }, []);

  return (
      <section className="section3">
        <img className="fond-section-expo" src="./img/accueil/paper-fond-expo.png" alt="" />
        <h3><img src="./img/accueil/titre-exposition.png" alt={t('titleexposition')} /></h3>
        <p className='panim'>{t('expodetail')}</p>
        <div className="allcards">
          <div className="cards-horizontale">
            <div className="cards1">
              <img src="./img/accueil/letelescope.jpg" alt="Le Telescope" />
              <div className="cards3-text">
                <p>{t('letelescope')}</p>
              </div>
            </div>
          </div>
          <div className="cards-verticale">
            <div className="Cards2">
              <img src="./img/accueil/leprisme.jpg" alt="Le Prisme" />
              <div className="cards1-text">
                <p>{t('prisme')}</p>
              </div>
            </div>
            <div className="Cards3">
              <img src="./img/accueil/pendule_newton.jpg" alt="Le pendule d'issac newton" />
              <div className="cards1-text">
                <p>{t('pendulenewton')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};