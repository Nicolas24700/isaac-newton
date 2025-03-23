import { useTranslation, Trans } from 'react-i18next';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);



export const Expopage = () => {
    const { t } = useTranslation();

    useEffect(() => {
          gsap.fromTo('header',
            { opacity: 0 }, 
            { opacity: 1, duration: 2, scrollTrigger: {
              trigger: '.header-expo img',
              toggleActions: 'play none none reset'
            }}
          );
        }, []);

    return (
        <header className="header-expo" id='header-website'>
            <h1>
            <Trans i18nKey="expotitle">
            </Trans></h1>
            <p>
                <Trans i18nKey="expotext"></Trans>
            </p>
            <a href="#"><i className="fa-solid fa-gamepad"></i> {t('jouermtn')}</a>
            <img src="./img/expo/illustrationVR.png" alt="" />
        </header>
    );
}
