// __mocks__/@react-native-async-storage/async-storage.js

const mockAsyncStorage = {
    setItem: jest.fn(() => Promise.resolve()),
    getItem: jest.fn(() => Promise.resolve(null)),
    removeItem: jest.fn(() => Promise.resolve()),
  };
  
  export default mockAsyncStorage;
  