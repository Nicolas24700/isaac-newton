import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [loginInput, setLoginInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        //send login request for authentification
        fetch('http://localhost:3000/api/auth.php', {
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
            <h2>Log In</h2>
            <form onSubmit={handleSubmit} className="login-form">
            <fieldset>
                <label htmlFor="login">Login</label>
                <input type="text" name="login" id="login" onChange={(e) => setLoginInput(e.target.value)} />
            </fieldset>
            
            <fieldset>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={(e) => setPasswordInput(e.target.value)} />
            </fieldset>
            
            <input type="submit" value="Log In" className="button"/>
            </form>
        </div>
    )
}