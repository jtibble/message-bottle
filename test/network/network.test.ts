import network from '../../src/network/network';

jest.mock('request-promise-native', ()=> async ()=>{
    return 'mock from test';
});

test('network exists', ()=>{
    expect(network).toBeTruthy();
});

test('network can be configured', ()=>{
    network.configure({destination: 'http://localhost:3001'});
});

test('network can send', async ()=>{
    
    network.configure({destination: 'http://localhost:3001'});
    const response = await network.send({});

    expect(response).toBe('mock from test');
});