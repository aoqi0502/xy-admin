import axios from 'axios';
axios.defaults.timeout = 10000;
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL

export default axios
