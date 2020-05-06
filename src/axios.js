import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://blog-e93ec.firebaseio.com";

export default instance;
