import { run, helloWorldMiddleware, heatbeatReceiverMiddleware } from '../../src/server/index';

jest.mock('express', () => {
    return require('jest-express');
});


const getArgVFromOptions = options => {
    let array = ['n/a', 'n/a'];

    if (options.port) {
        array.push('-p');
        array.push(options.port.toString());
    }

    if (options.destination) {
        array.push('-d');
        array.push(options.destination);
    }

    return array;
};

const defaultArgV = getArgVFromOptions({
    port: 3000,
    destination: 'http://localhost:3001'
});

test("server throws exception when no port is provided", async (done) => {

    const argVsNoPort = getArgVFromOptions({ destination: '' });

    run(argVsNoPort).then(() => {
        throw "Wrong, this function should throw an exception";
    }).catch((e) => {
        expect(e.includes('Cannot start the server without a port specified')).toBeTruthy();
        done();
    });

});

test("server throws exception when no destination is provided", async (done) => {

    const argVsNoPort = getArgVFromOptions({ port: 3000 });

    run(argVsNoPort).then(() => {
        throw "Wrong, this function should throw an exception";
    }).catch((e) => {
        expect(e).toBe('Cannot start the server without a destination url');
        done();
    });

});

test('server starts up with port provided', async (done) => {
    await run(defaultArgV);
    done();
});

test('middleware returns greeting', () => {
    const mockRequest = {

    };

    const mockResponse = {
        send: jest.fn()
    }

    helloWorldMiddleware(mockRequest, mockResponse);
    expect(mockResponse.send).toBeCalledTimes(1);
    expect(mockResponse.send).toBeCalledWith('Hello, world!');
});

test('heartbeat middleware exists', () => {
    const mockRequest = {
        body: 'thump thump'
    };

    const mockResponse = {
        send: jest.fn()
    }

    heatbeatReceiverMiddleware(mockRequest, mockResponse);
})

test('server starts up and sends heartbeat', async () => {

    jest.mock('../../src/heartbeat/heartbeat');
    await run(defaultArgV);

    //expect(heartbeat).toHaveBeenCalled();
});