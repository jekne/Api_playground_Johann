// require("dotenv").config("../.env");

import createToken from "../../server-side/createToken.js";
import { StreamChat } from "stream-chat";
const APP_KEY = "939curfsgahx";
// const StreamChat = require("stream-chat").StreamChat;

const test = async () => {
  const client = new StreamChat(APP_KEY, { timeout: 6000 });

  const userID = "johann";
  // const userID = "QE8qRaEwvHXQhxXFfhbRgOYtsbv2";
  const token = createToken(userID);
  const set = await client.connectUser({ id: userID }, token);

  return set;
};

test().then((r) => console.log(r));
