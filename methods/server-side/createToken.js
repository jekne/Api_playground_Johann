import serverClient from './client.js';

const createToken = (userID) => serverClient.createToken(userID);

export default createToken;
