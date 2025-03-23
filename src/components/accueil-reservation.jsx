import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export const AccueilReservation = () => {
          const { t } = useTranslation();

          useEffect(() => {
            gsap.fromTo('h5', 
              { x: -200, opacity: 0 }, 
              { x: 0, opacity: 1, duration: 1, scrollTrigger: {
                trigger: 'h5',
                toggleActions: 'play none none reset'
              }}
            );
            gsap.fromTo('.offre-contenu', 
              { rotationX: 90, opacity: 0 }, 
              { rotationX: 0, opacity: 1, duration: 1, scrollTrigger: {
                trigger: '.offre-contenu',
                toggleActions: 'play none none reset'
              }}
            );
            gsap.to('.doigt-gauche', {
              rotate: 8,
              duration: 1,
              repeat: -1,
              yoyo: true,
              ease: 'power1.inOut'
            });
            gsap.to('.doigt-droite', {
              x: -25,
              rotate: 8,
              duration: 1,
              repeat: -1,
              yoyo: true,
              ease: 'power1.inOut'
            });
    
          }, []);

  return (
    <section className="section-reservation">
      <h5>{t('Reservplace')}</h5>
      <div className="offres-container">
        {/* Offre Étudiante */}
        <div className="offre offre-etudiante">
          <div className="offre-contenu">
            <h6>{t('offreEtudiante')}</h6>
            <p>{t('offreetuddetail')}
            </p>
          </div>
          <a href="/reservation" className="btn-reserver">{t('reservernow')}</a>
        </div>

        {/* Offre Famille */}
        <div className="offre offre-famille">
          <div className="offre-contenu">
            <h6>{t('offreFamille')}</h6>
            <p>{t('offrefamilledetail')}</p>
          </div>
          <a href="/reservation" className="btn-reserver">{t('reservernow')}</a>
        </div>
        <img src="./img/accueil/doigt-gauche.png" alt="" className="doigt-gauche" />
        <img src="./img/accueil/doigt-droite.png" alt="" className="doigt-droite" />
      </div>
    </section>
  );
};
