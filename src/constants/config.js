import axios from 'axios';
import enviroments from './enviroments';

const http = () => { 
    let baseURL = enviroments.apiUrl;

    const client = axios.create({
        baseURL,
        headers: { 
            'Content-Type': 'application/json'
        }
    });

    client.interceptors.request.use(config => { 
        return config;
    }, err => { 

    });
    return client;
}

export default http();