

const express = ()=>{
    return {
        get: jest.fn(),
        listen: jest.fn()
    }
};

export default express;