import axios from 'axios';

var instance = axios.create({
    timeout: 1000
});

export default instance
