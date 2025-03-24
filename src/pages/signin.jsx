import { Login } from '../components/login';
import { CreationCompte } from '../components/creationcompte';
import { Footerbasic } from '../components/footerbasic'

const Signin = () => {
    return (
        <div className='signin-container'>
            <h1>Se connecter</h1>
            <div className='signin'>
                <CreationCompte />
                <Login />
            </div>
            <Footerbasic />
        </div>
    )
}

export default Signin;