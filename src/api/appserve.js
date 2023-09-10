import axios from "axios";

const appserve = axios.create({
  baseURL: process.env.VUE_APP_BASEURL,
  headers: {
    // 'Access-Control-Allow-Credentials':true,
    "Access-Control-Allow-Origin": "*"
  }
});

export default appserve;
