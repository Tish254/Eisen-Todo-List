import { GoogleLogout } from "react-google-login";

const LogoutGoogle = () => {

    const CLIENT_ID = '788375080665-la28eo3kv6k7nleerqjtvf9c1louegav.apps.googleusercontent.com';

    const onSuccess = () => {
        console.log("Log out successful!")

    }
    
    
  return (
    <div id="signOutButton">
        <GoogleLogout 
            clientId={CLIENT_ID}
            buttonText={"Logout"}
            onLogoutSuccess={onSuccess}

        />
    </div>
  )
}

export default LogoutGoogle