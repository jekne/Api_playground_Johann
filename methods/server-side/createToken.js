import serverClient from "./client.js";

const createToken = (userID) => serverClient.createToken(userID);
// console.log("token", createToken("johann"))
export default createToken;
