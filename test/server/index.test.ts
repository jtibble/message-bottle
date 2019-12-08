import { run, helloWorldMiddleware } from '../../src/server/index';

test("server throws exception when no port is provided", async (done) => {

    run([]).then(() => {
        throw "Wrong, this function should throw an exception";
    }).catch((e) => {
        expect(e.includes('Cannot start the server without a port specified')).toBeTruthy();
        done();
    });

});

test('server starts up with port provided', async (done) => {
    await run(['n/a', 'n/a', '-p', '3000']);
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
})