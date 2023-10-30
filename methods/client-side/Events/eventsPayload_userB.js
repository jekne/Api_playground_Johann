import createToken from "../../server-side/createToken.js";
import { StreamChat } from "stream-chat";

const APP_KEY = "939curfsgahx";
const userID = "johann";
const channelType = "messaging";
const channel_ID = "test_unread_counts_1f41aacb-72a2-4fbf-b0a2-b495c630324d";

const listToPresenceChanges = async () => {
  const client = new StreamChat(APP_KEY, { timeout: 6000 });

  const token = createToken(userID);
  const set = await client.connectUser({ id: userID }, token);

  const channel = client.channel(channelType, channel_ID, {});

  const state = await channel.watch({ presence: false });

  channel.on("user.watching.start >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", (event) => {
    // handle change
    console.log(`${event.user.id} started watching`);
  });
  channel.on("user.watching.stop", (event) => {
    // handle change
    // console.log(`${event.user.id} stopped watching`);
  });

  channel.on("message.new", (event) => {
    // handle change
    console.log(`new message, ${event.message.text}`);
  });

  channel.on((event) => {
    // handle change
    console.log(event);
  });

  return channel;
};

listToPresenceChanges().then((r) => console.log(r));
