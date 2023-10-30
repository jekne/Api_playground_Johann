import { StreamChat } from "stream-chat";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const app_key = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];

const client = StreamChat.getInstance(app_key, secret);
const currentUser = "teodoro";
const token = client.createToken(currentUser);

const connect = async () => {
  const connect = await client.connectUser(
    {
      id: currentUser,
      name: currentUser.displayName,
    },
    token
  );
  console.log("TOKEN", token);

  console.log("CONNECT", connect);
  return connect;
};
connect();
