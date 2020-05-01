import axios from "axios";

const instance = axios.create();

instance.interceptors.request.use(
  (request) => {
    console.log("Request successfully made");
    return request;
  },
  (error) => {
    console.log("Request failed");
    return new Promise(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    console.log("Response successfully recieved");
    return response;
  },
  (error) => {
    console.log("Response failed");
    return new Promise(error);
  }
);

instance.defaults.baseURL = "https://blog-e93ec.firebaseio.com";

export default instance;
