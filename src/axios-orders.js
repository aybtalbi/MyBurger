import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-f9248-default-rtdb.firebaseio.com/'
});

export default instance;