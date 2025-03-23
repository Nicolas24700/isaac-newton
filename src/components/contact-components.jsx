import { useTranslation, Trans } from 'react-i18next';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ContactComposents = () => {
          const { t } = useTranslation();
          useEffect(() => {
            gsap.fromTo('h1',
                { x: -200, opacity: 0 }, 
                { x: 0, opacity: 1, duration: 1, scrollTrigger: {
                  trigger: 'h1',
                  toggleActions: 'play none none reset'
                }}
              );
            gsap.fromTo('.div-gauche-haut',
                { x: -200, opacity: 0 }, 
                { x: 0, opacity: 1, duration: 1.5, scrollTrigger: {
                  trigger: '.div-gauche-haut',
                  toggleActions: 'play none none reset'
                }}
              );
                gsap.fromTo('.div-gauche-bas',
                    { x: -200, opacity: 0 }, 
                    { x: 0, opacity: 1, duration: 2, scrollTrigger: {
                    trigger: '.div-gauche-bas',
                    toggleActions: 'play none none reset'
                    }}
                );
                gsap.fromTo('.div-gauche-reseaux',
                    { x: -200, opacity: 0 }, 
                    { x: 0, opacity: 1, duration: 2.5, scrollTrigger: {
                    trigger: '.div-gauche-reseaux',
                    toggleActions: 'play none none reset'
                    }}
                );
                gsap.fromTo('.container-form',
                    { x: 15, opacity: 0 }, 
                    { x: 0, opacity: 1, duration: 1, scrollTrigger: {
                    trigger: '.container-form',
                    toggleActions: 'play none none reset'
                    }}
                );
    
          }, []);

          
  return (
    <section className="section-contact" id='header-website'>
        <div className='parentdesdivs'>
            <div className='div-gauche'>
                <div className='div-gauche-haut'>
                    <h1>{t('contactnous')}</h1>
                    <p>
                        <Trans i18nKey="contacttext">

                        </Trans></p>
                </div>
                <div className='div-gauche-bas'>
                    <p><i className="fa-solid fa-location-dot"></i>2 rue Albert Einstein, 77420 Champs-sur-Marne</p>
                    <p><i className="fa-solid fa-phone"></i> +33 6 00 00 00 00</p>
                    <p><i className="fa-solid fa-envelope"></i> Wavycom@gmail.com</p>
                    <p><i className="fa-solid fa-globe"></i> <a href="">Wavycom.fr</a></p>
                </div>
                <div className='div-gauche-reseaux'>
                    <p>{t('contactreseau')}</p>
                    <div className='reseaux'>
                        <p><a aria-label='instagram' href="https://www.instagram.com/"><i className="fa-brands fa-square-instagram"></i></a></p>
                        <p><a aria-label='youtube' href="https://www.youtube.com/?app=desktop&hl=FR"><i className="fa-brands fa-youtube"></i></a></p>
                        <p><a aria-label='facebook' href="https://www.facebook.com/?locale=fr_FR"><i className="fa-brands fa-square-facebook"></i></a></p>
                    </div>
                </div>
            </div>
            <div className='div-droite'>
            <div className="container-form">
        <h2>{t('fromtitle')}</h2>
        <form>
                <div className="form-group">
                    <label for="prenom">{t('prenom')}</label>
                    <input type="text" id="prenom" name="prenom" placeholder={t('prenom')} required />
                </div>
                <div className="form-group">
                    <label for="nom">{t('nom')}</label>
                    <input type="text" id="nom" name="nom" placeholder={t('nom')} required />
                </div>
            <div className="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-group">
                <label for="sujet">{t('sujet')}</label>
                <select id="sujet" name="sujet">
                    <option value="">{t('choisirsujet')}</option>
                    <option value="infoexpo">{t('infoexpo')}</option>
                    <option value="reser">{t('reser')}</option>
                    <option value="modifreser">{t('modifreser')}</option>
                    <option value="tarif">{t('tarif')}</option>
                    <option value="autre">{t('autre')}</option>
                </select>
            </div>
            <div className="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" placeholder={t('votremessage')} required></textarea>
            </div>
            <button type="submit">{t('envoyer')}</button>
        </form>
    </div>

            </div>
        </div>
    </section>
  );
};
