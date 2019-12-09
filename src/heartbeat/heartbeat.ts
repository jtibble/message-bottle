import request from 'request-promise-native';

export default function heartbeat(network){
    
    network.send({
        payload: 'thump thump'
    });

}