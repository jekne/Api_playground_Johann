import serverClient from "./client.js";
// import { StreamChat } from "stream-chat";
const createToken = (userID) => serverClient.createToken(userID);
console.log("token", createToken("johann"));
export default createToken;

// // Define values.
// const apikey = "939curfsgahx";
// const apisecret =
//   "r9537738d5tkbqk9em427fcbudsmy2sq43cvnby7mxxmqrashxdru7d28nkc5nwf";
// const user_id = "john";
// // Initialize a Server Client
// const serverClient = StreamChat.getInstance(apikey, apisecret);
// // Create User Token
// const token = serverClient.createToken(user_id);
// console.log(token);
