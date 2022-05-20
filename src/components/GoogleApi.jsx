import { useEffect, useRef } from 'react';
import jwt_decode from 'jwt-decode';

const GoogleApi = ({isLoggedIn, setIsLoggedIn, setUserCredentials}) => {

    const divRef = useRef(null);
    
    const CLIENT_ID = '788375080665-la28eo3kv6k7nleerqjtvf9c1louegav.apps.googleusercontent.com';

    const handleResponse = (resp) => {

        let userDetails = jwt_decode(resp.credential);
    
        setUserCredentials({name: userDetails.name, picture: userDetails.picture, email: userDetails.email})

        setIsLoggedIn(true);
    
        

    }

    useEffect(() => {
        window.onload = () => {
            window.google.accounts.id.initialize({
                client_id: CLIENT_ID,
                callback: handleResponse
            });

            window.google.accounts.id.renderButton(divRef.current,
                { 
                    theme: "filled_blue", 
                    size: "large",
                    text: "continue_with"
                }
              );
            
            if (!isLoggedIn) {
                window.google.accounts.id.prompt((notification) => {
                    console.log(notification)
                });

            }
        }

    })
    
    
  return (
    <div className={!isLoggedIn ? "flex flex-col items-center justify-center gap-4 text-lg w-[50%]" : "hidden"}>
        <div className="text-5xl font-bold text-center mb-2">
            <h1>
              <strong>
                  Eisen
              </strong>
              <span className="line-through text-violet-900">Todo</span>
            </h1>
            
        </div>
        <p className='text-xl text-center'>

            Manage all your tasks in one place & And Yes, Yes your <strong>Google Calendar</strong> Too.
        </p>
        <div ref={divRef}>
            
        </div>
    </div>
  )
}

export default GoogleApi