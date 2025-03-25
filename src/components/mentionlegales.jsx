import { useTranslation, Trans } from 'react-i18next';

export const Mentioncompo = () => {
    const { t } = useTranslation();
    return (
        <section className='mentionlegales' id='header-website'>
            <div className='container-mention'>
                <h1>{t('MentionsLegales')}</h1>
                <ol>
                    <li>
                        <p><strong>{t('Editeur')}</strong></p>
                        <ul>
                            <li>{t('Editeurdetail.directeur')}</li>
                            <li>{t('Editeurdetail.adresse')}</li>
                            <li>{t('Editeurdetail.tel')}</li>
                            <li>{t('Editeurdetail.siren')}</li>
                            <li>{t('Editeurdetail.ape')}</li>
                            <li>{t('Editeurdetail.president')}</li>
                        </ul>
                    </li>
                    <li>
                        <p><strong>{t('Contributeurs')}</strong></p>
                        <ul>
                            <li>{t('Contributeursdetail.front')}</li>
                            <li>{t('Contributeursdetail.site3D')}</li>
                            <li>{t('Contributeursdetail.back')}</li>
                            <li>{t('Contributeursdetail.graphisme')}</li>
                            <li>Communication : Wagne Ramata</li>
                        </ul>
                    </li>
                    <li>
                        <p><strong>{t('hebergement')}</strong></p>
                        <ul>
                            <li>{t('hebergementdetail.hebergeur')}</li>
                            <li>{t('hebergementdetail.adresse')}</li>
                            <li>{t('hebergementdetail.tel')}</li>
                            <li>{t('hebergementdetail.siteweb')}<a target='blank' href="https://www.alwaysdata.com">https://www.alwaysdata.com</a></li>
                        </ul>
                    </li>
                    <li>
                        <p><strong>{t('ProprieteIntellectuelle')}</strong></p>
                        <ul><li>{t('ProprieteIntellectuelledetail.texte')}
                        </li></ul>
                    </li>
                    <li>
                        <p><strong>{t('protection')}</strong></p>
                        <ul><li>{t('protectiondetail')}
                        </li></ul>
                    </li>
                    <li>
                        <p><strong>Cookies</strong></p>
                        <ul><li>{t('cookiesdetail')}
                        </li></ul>
                    </li>
                </ol>
            </div>
        </section>
    );
};