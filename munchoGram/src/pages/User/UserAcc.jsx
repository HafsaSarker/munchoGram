import { useEffect, useState } from 'react';
import './UserAcc.css'
import { supabase } from '../../Client';
import { useParams } from 'react-router-dom';

export default function UserAcc({token}) {
    let createdAt = (token.user.created_at).slice(0,10);

    function handleLogout(){
        sessionStorage.removeItem('token');
        window.location = '/'
    }

    return (
        <>
            {token && 
            <div className="user-page">
                <h1>Your Account Info</h1>
                <h3>Hello, {token.user.user_metadata.user_name}</h3>
                <div className="user-stats">
                    <p>Email: <span>{token.user.email}</span></p>
                    
                    <p>Member Since: <span>{createdAt}</span></p>

                    <p>Status: <span>{token.user.aud}</span></p>
                </div>
                <button onClick={handleLogout}>Log Out</button>
            </div>
            }
        </>
        
    )
}