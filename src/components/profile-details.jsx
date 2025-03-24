import { useEffect, useState } from "react";

export const ProfileDetails = ({ accountInfo }) => {


    return (
        <div className="profile-details">
            <h2>Account details</h2>
            <form>
                <div className="profile-row">
                    <fieldset>
                        <label htmlFor="login">Login</label>
                        <input type="text" name="login" id="login" value={accountInfo.login} readOnly={true} disabled/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={accountInfo.email} readOnly={true} disabled/>
                    </fieldset>
                </div>

                <div className="profile-row">
                    <fieldset>
                        <label htmlFor="first_name">Prénom</label>
                        <input type="text" name="first_name" id="first_name" value={accountInfo.first_name} readOnly={true} disabled/>
                    </fieldset>

                    <fieldset>
                        <label htmlFor="last_name">Nom</label>
                        <input type="text" name="last_name" id="last_name" value={accountInfo.last_name} readOnly={true} disabled/>
                    </fieldset>
                </div>
            
            </form>
        </div>
    )
}