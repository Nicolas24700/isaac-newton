import { useTranslation, Trans } from 'react-i18next';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Sectionwhonewton = () => {
    const { t } = useTranslation();

    useEffect(() => {
        gsap.fromTo('.image-gif', 
            { x: -100, opacity: 0 }, 
            { x: 0, opacity: 1, duration: 2, scrollTrigger: {
                trigger: '.section-gif',
                toggleActions: 'play none none reset'
            }}
        );
        gsap.fromTo('.text-gif', 
            { x: 10, opacity: 0 }, 
            { x: 0, opacity: 1, duration: 2, scrollTrigger: {
                trigger: '.section-gif',
                toggleActions: 'play none none reset'
            }}
        );
    }, []);

    return (
    <section className="section-gif">
        <img className="fond-section-gif" src="./img/accueil/Paper-top.png" alt="" />
        <div className="container-gif">
            <div className="image-gif">
                <img src="./img/accueil/tableau-contour.png" alt="" />
                <video src="./gif/gif_newton.mp4" alt="" className="inner-video" autoPlay loop muted></video>
                <img src="./gif/your-gif.gif" alt="" className="inner-gif" />
            </div>
            <div className="text-gif">
                <h2>{t('quinewton')}</h2>
                
                <p>
                    <Trans i18nKey="quiexplication">
                        </Trans>
                        </p>
            </div>
        </div>
        <img className="fond-sectionBottom-gif" src="./img/accueil/Paper-bottom.png" alt="" />
    </section>
    );
}