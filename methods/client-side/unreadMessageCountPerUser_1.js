import { StreamChat } from "stream-chat";
import dotenv from "dotenv";
import createToken from "../server-side/createToken.js";

dotenv.config({ path: "./.env" });

const app_key = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];

const chatClient = StreamChat.getInstance(app_key);

const user_id = "johann";

// Fetch token from client-side method to create token
const token = createToken(user_id);

const connect = async () => {
  const connect = await chatClient.connectUser({ id: user_id }, token);
  console.log("CONNECT -------", connect);
  console.log(
    `The total unread count of the User_id ${user_id} is `,
    connect.me.total_unread_count
  );
  console.log(
    `returns the count of channels with unread messages`,
    connect.me.unread_channels
  );
  return connect;
};

connect();

export { chatClient, user_id };
