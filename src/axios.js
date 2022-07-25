import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://test-clone0.herokuapp.com'
});

export default instance;