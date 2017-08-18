
import axios from 'axios'
import { API_BASE_URL } from "./config"

export const GET = (url, token) => {
  return axios.get(
    API_BASE_URL + url,
    { headers: { Authorization: "Bearer " + token }}
  );
};

export const POST = (url, body) => {
  return axios.post(
    API_BASE_URL + url,
    body
  );
};
