import axios from 'axios';

export const FETCH_COURSE_POINTS = 'FETCH_COURSE_POINTS';

export const fetchCoursePoints = () => {
    // actionCreator, joka aina palauttaa actionin (jolla on aina oltava tyyppi)
    // Tämä actionCreator luo AJAX kyselyn ja palauttaa sen tuloksen (payload)
    // const url = TEST_USER.ROOT_URL+'/courses/'+TEST_USER.COURSE_ID+'/users/'+TEST_USER.USER_ID+'/points';
    // const request = axios.get(url, { headers: {'Authorization': TEST_USER.ACCESS_TOKEN }});

    const request = axios.get("https://student-dashboard-api.herokuapp.com/points");
    return {
        type: 'FETCH_COURSE_POINTS',
        payload: request
    };
}


