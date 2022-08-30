// require("dotenv").config("../.env");

import createToken from "../../server-side/createToken.js";
import { StreamChat } from "stream-chat";
const APP_KEY = "chxfbypw4qgn";
// const StreamChat = require("stream-chat").StreamChat;

const test = async () => {
  const client = new StreamChat(APP_KEY, { timeout: 6000 });

  const userID = "ryan";
  const token = createToken(userID);
  const set = await client.connectUser({ id: userID }, token);

  const channel = client.channel("livestream", "watch-this-channel", {});

  const state = await channel.watch();

  return await channel.sendMessage({ text: "seventh  one!!!!!!!" });
};

test().then((r) => console.log(r));

// channel id = team:company-3926-location-1609959
// App id = 103809
// user id = 111436
