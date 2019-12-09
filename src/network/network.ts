import request from 'request-promise-native';

let uri = '';

const network = {
    configure: options =>{
        uri = options.destination
    },
    send: async message =>{

        var options = {
            method: 'POST',
            uri: uri,
            body: message,
            json: true // Automatically stringifies the body to JSON
        };

        const response = await request(options);
        return response;
    }
};

export default network;