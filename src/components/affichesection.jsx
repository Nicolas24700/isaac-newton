import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Affichesection = () => {
        const { t } = useTranslation();

        useEffect(() => {
            gsap.fromTo('.affiche-gauche', 
                { x: -200, opacity: 0 }, 
                { x: 0, opacity: 1, duration: 2, scrollTrigger: {
                  trigger: '.affiche-gauche',
                  toggleActions: 'play none none reset'
                }}
            );
            gsap.fromTo('.gauche-textanim', 
                { x: 10, opacity: 0 }, 
                { x: 0, opacity: 1, duration: 1, scrollTrigger: {
                  trigger: '.affiche-gauche',
                  toggleActions: 'play none none reset'
                }}
            );
            
          }, []);

    return (
        <section className="section4">
            <div>
                <div className="affiche-gauche">
                    <img src="./img/accueil/affiche_newton.jpeg" alt="affiche-gauche" />
                </div>
                <div className='gauche-textanim'>
                    <h4>{t('h4affiche')}</h4>
                    <p>
                    {t('textlinkaffichepart1')} <br /><br />
                        <a href="/reservation">{t('textlinkaffichemiddle')}</a>{t('textlinkaffichepart2')}
                    </p>
                </div>
            </div>
        </section>
    );
  };