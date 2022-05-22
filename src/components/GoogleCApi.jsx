import {useState, useEffect} from 'react';

const GoogleCApi = (props) => {

    const [googleEvents, setGoogleEvents] = useState(null);
    
    // Google Stuff
    const CLIENT_ID = '788375080665-la28eo3kv6k7nleerqjtvf9c1louegav.apps.googleusercontent.com';
    const DISCOVERY_DOCS = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
    const SCOPES = 'https://www.googleapis.com/auth/calendar.events';

    let gapi = window.gapi;
    let google = window.google;

    let tokenClient;

    useEffect(() => {
        gapiLoaded();
        gisLoaded();
    })

    const gapiLoaded = () => {
        gapi.load('client', initializeGapiClient);
    }

    const initializeGapiClient = async () => {
        await gapi.client.init({
            apiKey: API_KEY,
            discoveryDocs: [DISCOVERY_DOCS]
        });
    }

    const gisLoaded = () => {
        tokenClient = google.accounts.oauth2.initTokenClient({
            client_id: CLIENT_ID,
            scope: SCOPES,
            callback: '',
          });
    }

    const handleAuthClick = () => {
        tokenClient.callback = async (resp) => {

            if (resp.error !== undefined) {
              throw (resp);

            }

            await listUpcomingEvents();
        

          };
  
          if (gapi.client.getToken() === null) {
            tokenClient.requestAccessToken({prompt: 'consent'});


          } else {
            tokenClient.requestAccessToken({prompt: ''});

          }

    }

    const listUpcomingEvents = async () => {
        let response;

        try {

          const request = {
            'calendarId': 'primary',
            'timeMin': (new Date()).toISOString(),
            'showDeleted': false,
            'singleEvents': true,
            'maxResults': 10,
            'orderBy': 'startTime',

          };

          response = await gapi.client.calendar.events.list(request);

        } catch (err) {

          console.log(err);
          return;

        }

        const events = response.result.items;


        const output = events.reduce(
            (str, event) => `${str}${event.summary} (${event.start.dateTime || event.start.date})\n`,
            'Events:\n');

        setGoogleEvents(output);

    }

    


  return (
    <div>
        <button className='bg-red-300 p-10 mb-10' onClick={handleAuthClick}>
            Get Calendar Events
            
        </button>

        <div>
            {!googleEvents ? "No EVents": googleEvents}
        </div>
        
    </div>
  )
}

export default GoogleCApi