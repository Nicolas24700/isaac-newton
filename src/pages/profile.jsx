import { ProfileDetails } from '../components/profile-details';
import { Footerbasic } from '../components/footerbasic'
import Cookies from 'universal-cookie';
import { useEffect, useState } from 'react';

const Profile = () => {
    const cookies = new Cookies(null, { path: '/' });
    const [accountInfo, setAccountInfo] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3000/api/accounts.php?id=${cookies.get('account_id')}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include'
        })
        .then((res) => res.json())
        .then(data => {
            setAccountInfo(data);
        })            
        .catch((err) => {
            console.log(err);
          })
    },[])

    return (
        <div className='profile-container'>
            <h1>Profile</h1>
            <div className='profile'>
                <ProfileDetails accountInfo={accountInfo} />
            </div>
            <Footerbasic />
        </div>
    )
}

export default Profile;