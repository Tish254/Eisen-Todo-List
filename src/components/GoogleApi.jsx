import { gapi } from "gapi-script";
import { useState, useEffect } from "react";

const GoogleApi = ({isLoggedIn, setIsLoggedIn}) => {

    const [googleAuth, setGoogleAuth] = useState();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [imageUrl, setImageUrl] = useState();

    const CLIENT_ID = '788375080665-la28eo3kv6k7nleerqjtvf9c1louegav.apps.googleusercontent.com';
    // const API_KEY = 'AIzaSyBeJ8ORNkqyqvm1HBNjUc0vaMH7gYQfw78';
    // const SCOPES = 'https://www.googleapis.com/auth/calendar.events';

    
    useEffect(() => {
        gapi.load('auth2', () => {
            (async () => {
                const googleAuth = await gapi.auth2.init({
                    client_id: CLIENT_ID
                });

                setGoogleAuth(googleAuth);  
                renderSigninButton(gapi); 

            })();

        }); 

    });

    const logOut = () => {
        (async () => {
            await googleAuth.signOut();
            setIsLoggedIn(false);
            renderSigninButton(gapi)
        })();
    }

    const renderSigninButton = (gapi) => {
        gapi.signin2.render('google-signin', {
            'scope': 'profile email',
            'width': 240,
            'height': 50,
            'longtitle': true,
            'theme': 'dark',
            'onsuccess': onSuccess,
            'onFailure': onFailure

        });

    }


    const onSuccess = (googleUser) => {
        setIsLoggedIn(true);
        const profile = googleUser.getBasicProfile();
        setName(() => profile.getName());
        setEmail(() => profile.getEmail());
        setImageUrl(() => profile.getImageUrl());

    };

    const onFailure = () => {
        setIsLoggedIn(false);

    }

   


  return (
    <div>
        {
            !isLoggedIn && 
            <div id="google-signin">
                
            </div>
        }

        {isLoggedIn && 
        
            <div>
                <div>
                    <img src={imageUrl} alt="Profile"/>
                </div>
                <div>{name}</div>
                <div>{email}</div>
                <button className="btn-primary" onClick={logOut}>
                    Log Out
                </button>
            </div>
        }

    </div>
  )
}

export default GoogleApi