import { StreamChat } from "stream-chat";
import dotenv from "dotenv";
import createToken from "../server-side/createToken.js";

dotenv.config({ path: "./.env" });

const app_key = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];

const chatClient = StreamChat.getInstance(app_key);

const user_id = "johann";

const token = createToken(user_id);

const connect = async () => {
  const connect = await chatClient.connectUser(
    { id: user_id, password: 123 },
    token
  );

  console.log("CONNECT", connect);
  return connect;
};

connect();

export { chatClient, user_id };
