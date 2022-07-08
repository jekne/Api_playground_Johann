// require("dotenv").config("../.env");
// const { createToken } = require("../../server-side/createToken");

import createToken from '../../server-side/createToken.js';
import { StreamChat } from "stream-chat";
const APP_KEY ="chxfbypw4qgn"
// const StreamChat = require("stream-chat").StreamChat;

const listToPresenceChanges = async () => {
  const client = new StreamChat(APP_KEY, { timeout: 6000 });

  const userID = "callum";
  const token = createToken(userID);
  const set = await client.connectUser({ id: userID }, token);

  const channel = client.channel("livestream", "watch-this-channel", {});

  const state = await channel.watch({ presence: false });

  channel.on("user.watching.start", (event) => {
    // handle change
    console.log(`${event.user.id} started watching`);
  });
  channel.on("user.watching.stop", (event) => {
    // handle change
    console.log(`${event.user.id} stopped watching`);
  });

  channel.on("message.new", (event) => {
    // handle change
    console.log(`new message, ${event.message.text}`);
  });

  // return channel;

return channel
};

listToPresenceChanges().then((r) => console.log(r));


//   last_message_at: 2022-07-08T12:15:53.745Z,
//   last_message_at: 2022-07-08T12:19:28.298Z,
