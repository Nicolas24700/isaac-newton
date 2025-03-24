import { useTranslation } from 'react-i18next';

export const ProfileDetails = ({ accountInfo }) => {
    const { t } = useTranslation();

    return (
        <div className="profile-details">
            <h2>{t('accdetails')}</h2>
            <form>
                <div className="profile-row">
                    <fieldset>
                        <label htmlFor="login">{t('identifiant')}</label>
                        <input type="text" name="login" id="login" value={accountInfo.login} readOnly={true} disabled/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={accountInfo.email} readOnly={true} disabled/>
                    </fieldset>
                </div>

                <div className="profile-row">
                    <fieldset>
                        <label htmlFor="first_name">{t('prenom')}</label>
                        <input type="text" name="first_name" id="first_name" value={accountInfo.first_name} readOnly={true} disabled/>
                    </fieldset>

                    <fieldset>
                        <label htmlFor="last_name">{t('nom')}</label>
                        <input type="text" name="last_name" id="last_name" value={accountInfo.last_name} readOnly={true} disabled/>
                    </fieldset>
                </div>
            </form>
        </div>
    )
}