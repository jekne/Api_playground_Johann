import { StreamChat } from "stream-chat";
import dotenv from "dotenv";
import createToken from "../server-side/createToken.js";

dotenv.config({ path: "./.env" });

const app_key = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];

// For client-side auth the client uses only the app_key
// const chatClient = new StreamChat(app_key); // you may see this - updated version below using getInstance()
const chatClient = StreamChat.getInstance(app_key);

const user_id = "johann";

//imnportant in this file change the user_id

// const extraData = {
//   type: "puppy",
//   status: "up to mischief",
// };

// Fetch token from client-side method to create token
const token = createToken(user_id);

// const connect = chatClient.connectUser({ id: user_id, extraData }, token);

// console.log("CONNECT", connect);

const connect = async () => {
  const connect = await chatClient.connectUser({ id: user_id }, token);
  console.log("TOKEN", token);

  console.log("CONNECT", connect);
  return connect;
};

connect();
// const connect = async () => {
//   const temp = await chatClient.connectUser({ id: user_id }, token);
//   console.log(temp.me.channel_mutes);
// };

// connect();

export { chatClient, user_id };
// app ID: 1203489
// user id: 63a71ee0-7c83-4e9a-9a5e-4a88d423cbe6
// channel id: 17A46A15-4732-4C05-94B0-9767A457364F
