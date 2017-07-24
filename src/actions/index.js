import axios from 'axios';

const TEST_USER = {
  ACCESS_TOKEN: "Bearer c114d429c93fd38de8fa10e20f9b0d9a8683603e623a2359bf603ce9bcbb717b",
  ROOT_URL: "https://tmc.mooc.fi/api/v8",
  USER_ID: "15653",
  COURSE_ID: "214"
};

export const FETCH_COURSE_POINTS = 'FETCH_COURSE_POINTS';

export const fetchCoursePoints = () => {
    // actionCreator, joka aina palauttaa actionin (jolla on aina oltava tyyppi)
    // Tämä actionCreator luo AJAX kyselyn ja palauttaa sen tuloksen (payload)
    const url = TEST_USER.ROOT_URL+'/courses/'+TEST_USER.COURSE_ID+'/users/'+TEST_USER.USER_ID+'/points';
    const request = axios.get(url, { headers: {'Authorization': TEST_USER.ACCESS_TOKEN, "Access-Control-Allow-Origin": "http://localhost:3000" }});

    return {
        type: 'FETCH_COURSE_POINTS',
        payload: request
    };
}
