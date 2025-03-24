import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export const Login = () => {
    const [loginInput, setLoginInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        //send login request for authentification
        fetch('https://isaac-newton.alwaysdata.net/api/auth', {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            credentials: 'include',
            body: JSON.stringify({
                login: loginInput,
                password: passwordInput
            })
        })
        .then((res) => res.json())
        .then(data => {
            if (data.status == 1) {
                navigate('/profile');
            } else console.log(data);
        })            
        .catch((err) => {
            console.log(err)
          })
    }

    return (
        <div className="login">
            <h2>{t('connexion')}</h2>
            <form onSubmit={handleSubmit} className="login-form">
            <fieldset>
                <label htmlFor="login">{t('identifiant')}</label>
                <input type="text" name="login" id="login" onChange={(e) => setLoginInput(e.target.value)} />
            </fieldset>
            
            <fieldset>
                <label htmlFor="password">{t('password')}</label>
                <input type="password" name="password" id="password" onChange={(e) => setPasswordInput(e.target.value)} />
            </fieldset>
            
            <input type="submit" value={t('connexion')} className="button"/>
            </form>
        </div>
    )
}