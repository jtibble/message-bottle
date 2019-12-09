import heartbeat from '../../src/heartbeat/heartbeat';


const network = {
    send: jest.fn()
};

test('heartbeat emits a request',()=>{
    heartbeat(network);

    expect(network.send).toBeCalled();
    const firstCall = network.send.mock.calls[0];
    const firstCallArgument = firstCall[0];
    expect(firstCallArgument.payload).toBe('thump thump');
});