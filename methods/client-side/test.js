import { StreamChat } from "stream-chat";
import createToken from "../server-side/createToken.js";

const app_key = "7bgqhwwqa8gx";
const secret =
  "6qut3329ewj9t3kzmcsx62fk7hgxypggkumgz4ghtpsttk97hjzhm7bq52ag7drm";

// For client-side auth the client uses only the app_key
// const chatClient = new StreamChat(app_key); // you may see this - updated version below using getInstance()
const chatClient = StreamChat.getInstance(app_key);

const user_id = "carolina";

// Fetch token from client-side method to create token
const token = createToken(user_id);

const connect = async () => {
  const connect = await chatClient.connectUser({ id: user_id }, token);
  console.log("TOKEN", token);

  console.log("CONNECT", connect);
  return connect;
};

connect();

export { chatClient, user_id };
