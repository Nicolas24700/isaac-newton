import { useTranslation, Trans } from 'react-i18next';
export const ConceptAccueil = () => {
    const { t } = useTranslation();
    return (
        <>
        <header className="Concept-header" id='header-website'>
            <div className="conceptheaderdiv">
                <h1>Concept</h1>
                <p>
                <Trans i18nKey="concepttexte">
                </Trans></p>
                <a href="#linkvideo"><i class="fa-brands fa-youtube"></i> {t('videolink')}</a>
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