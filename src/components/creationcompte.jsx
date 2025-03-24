import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export const CreationCompte = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const [loginInput, setLoginInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://isaac-newton.alwaysdata.net/api/accounts', {
            method: "POST",
            credentials: 'include',
            body: new FormData(document.querySelector(".signup-form"))
        })
        .then((res) => res.json())
        .then(data => {
            if (data.status == 1) {
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
                    }
                })            
                .catch((err) => {
                    console.log(err)
                })
            } else console.log("unable to create an account")
        })            
        .catch((err) => {
            console.log(err)
          })
    }

    return (
        <div className="signup">
            <h2>{t('creationcompte')}</h2>
            <form onSubmit={handleSubmit} className="signup-form">
            <fieldset>
                <label htmlFor="first_name">{t('prenom')}</label>
                <input type="text" name="first_name" id="first_name" onChange={(e) => setFnameInput(e.target.value)} />
            </fieldset>

            <fieldset>
                <label htmlFor="last_name">{t('nom')}</label>
                <input type="text" name="last_name" id="last_name" onChange={(e) => setLnameInput(e.target.value)} />
            </fieldset>

            <fieldset>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={(e) => setEmailInput(e.target.value)} />
            </fieldset>

            <fieldset>
                <label htmlFor="login">{t('identifiant')}</label>
                <input type="text" name="login" id="login" onChange={(e) => setLoginInput(e.target.value)} />
            </fieldset>
            
            <fieldset>
                <label htmlFor="password">{t('password')}</label>
                <input type="password" name="password" id="password" onChange={(e) => setPasswordInput(e.target.value)} />
            </fieldset>
            
            <input type="submit" value="Sign up" className="button"/>
            </form>
        </div>
    )
}