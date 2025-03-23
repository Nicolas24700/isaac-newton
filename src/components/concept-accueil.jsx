import { useTranslation, Trans } from 'react-i18next';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ConceptAccueil = () => {
    const { t } = useTranslation();
    useEffect(() => {
        gsap.fromTo('.conceptheaderdiv h1',
          {opacity: 0 }, 
          {opacity: 1, duration: 1, scrollTrigger: {
            trigger: '.conceptheaderdiv h1',
            toggleActions: 'play none none reset'
          }}
        );
        gsap.fromTo('.conceptheaderdiv p',
            { opacity: 0 }, 
            { opacity: 1, duration: 2, scrollTrigger: {
              trigger: '.conceptheaderdiv h1',
              toggleActions: 'play none none reset'
            }}
          );
          gsap.fromTo('.conceptheaderdiv a',
            { opacity: 0 }, 
            { opacity: 1, duration: 3, scrollTrigger: {
              trigger: '.conceptheaderdiv h1',
              toggleActions: 'play none none reset'
            }}
          );
          gsap.to('.nuagegauche', {
            rotate: 1,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
          });
          gsap.to('.nuagedroite', {
            x: -10,
            rotate: 1,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
          });

      }, []);

    return (
        <>
        <header className="Concept-header" id='header-website'>
            <div className="conceptheaderdiv">
                <h1>Concept</h1>
                <p>
                <Trans i18nKey="concepttexte">
                </Trans></p>
                <a href="#linkvideo"><i className="fa-brands fa-youtube"></i> {t('videolink')}</a>
            </div>
        </header>
        <section className='conceptsection'>
            <img className='nuagedroite' src="./img/concept/droitenuage.png" alt="" />
            <img className='nuagegauche' src="./img/concept/gauchenuage.png" alt="" />
            <img className='videoimg' src="./img/concept/videocontour.png" alt="" />
        <iframe id='linkvideo' width="560" height="315" src="https://www.youtube.com/embed/Qm-44oJhWCQ?si=9KcwPx0EVXpUdFtV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>
        </>
    );
  };