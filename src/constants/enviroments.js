const name = process.env.NODE_ENV || 'local';

let enviroments;

switch(name){
    case 'uat': 
        enviroments = { 
            apiUrl: 'https://node-red-nxdup.mybluemix.net/'
        };
        break;
    case 'production':
        enviroments = {
            apiUrl: 'https://node-red-nxdup.mybluemix.net/'
        }
    default: {
        enviroments = { 
            apiUrl: 'https://node-red-nxdup.mybluemix.net/'
        }
    };
    break;
}

export default enviroments;