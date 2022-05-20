import GoogleLogin from "react-google-login";

const LoginGoogle = ({isLoggedIn, setIsLoggedIn}) => {

    

    const CLIENT_ID = '788375080665-la28eo3kv6k7nleerqjtvf9c1louegav.apps.googleusercontent.com';
    const API_KEY = 'AIzaSyBeJ8ORNkqyqvm1HBNjUc0vaMH7gYQfw78';
    const DISCOVERY_DOCS = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
    const SCOPES = 'https://www.googleapis.com/auth/calendar.events';
    
    const responseGoogle = (response) => {
        console.log(response.profileObj.email);
        
    }

    return(
        <GoogleLogin
            clientId={CLIENT_ID}
            buttonText="Sign in with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            theme="dark"
            className="w-240"
            fetchBasicProfile={true}
        />
    );
}
export default LoginGoogle