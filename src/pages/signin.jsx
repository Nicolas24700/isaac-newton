import { Login } from '../components/login';
import { CreationCompte } from '../components/creationcompte';
import { Footerbasic } from '../components/footerbasic';
import { useTranslation } from 'react-i18next';

const Signin = () => {
    const { t } = useTranslation();
    
    return (
        <div className='signin-container'>
            <h1>{t('connexion')}</h1>
            <div className='signin'>
                <CreationCompte />
                <Login />
            </div>
            <Footerbasic />
        </div>
    )
}

export default Signin;