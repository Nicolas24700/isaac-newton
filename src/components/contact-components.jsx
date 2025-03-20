import { useTranslation, Trans } from 'react-i18next';

export const ContactComposents = () => {
          const { t } = useTranslation();
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
                    <p><i class="fa-solid fa-location-dot"></i>2 rue Albert Einstein, 77420 Champs-sur-Marne</p>
                    <p><i class="fa-solid fa-phone"></i> +33 6 00 00 00 00</p>
                    <p><i class="fa-solid fa-envelope"></i> Wavycom@gmail.com</p>
                    <p><i class="fa-solid fa-globe"></i> <a href="">Wavycom.fr</a></p>
                </div>
                <div className='div-gauche-reseaux'>
                    <p>{t('contactreseau')}</p>
                    <div className='reseaux'>
                        <p><a aria-label='instagram' href="https://www.instagram.com/"><i class="fa-brands fa-square-instagram"></i></a></p>
                        <p><a aria-label='youtube' href="https://www.youtube.com/?app=desktop&hl=FR"><i class="fa-brands fa-youtube"></i></a></p>
                        <p><a aria-label='facebook' href="https://www.facebook.com/?locale=fr_FR"><i class="fa-brands fa-square-facebook"></i></a></p>
                    </div>
                </div>
            </div>
            <div className='div-droite'>
            <div class="container-form">
        <h2>{t('fromtitle')}</h2>
        <form>
                <div class="form-group">
                    <label for="prenom">{t('prenom')}</label>
                    <input type="text" id="prenom" name="prenom" placeholder={t('prenom')} required />
                </div>
                <div class="form-group">
                    <label for="nom">{t('nom')}</label>
                    <input type="text" id="nom" name="nom" placeholder={t('nom')} required />
                </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div class="form-group">
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
            <div class="form-group">
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
