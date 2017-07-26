import store from 'store';
import axios from 'axios'

export const CONNECT_BACKEND = 'CONNECT_BACKEND';

export const connectBackend = () => {
    //write store (remove this later - it is for testing purposes only)
    store.set(
      'tmc.user',
      { accessToken: "Bearer c114d429c93fd38de8fa10e20f9b0d9a8683603e623a2359bf603ce9bcbb717b" }
    );

    //read accessToken from browser LocalStorage (it should be present when user is logged in)
    const token = store.get("tmc.user");
    console.log("Token is :" + token.accessToken);

    //replace with correct backend API endpoint
    const conn_url = "https://student-dashboard-api.herokuapp.com/points";
    const request = axios.post(conn_url,
       { accessToken: token.accessToken }
    );
    //console.log(request);
    
    return {
      type: 'CONNECT_BACKEND',
      payload: request
    };
}