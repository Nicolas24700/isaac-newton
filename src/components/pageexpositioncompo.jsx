import { useTranslation, Trans } from 'react-i18next';
export const Expopage = () => {
    const { t } = useTranslation();
    return (
        <header className="header-expo" id='header-website'>
            <h1>
            <Trans i18nKey="expotitle">
            </Trans></h1>
            <p>
                <Trans i18nKey="expotext"></Trans>
            </p>
            <a href="#"><i class="fa-solid fa-gamepad"></i> {t('jouermtn')}</a>
            <img src="./img/expo/illustrationVR.png" alt="" />
        </header>
    );
}
