// require("dotenv").config("../.env");
// const { createToken } = require("../../server-side/createToken");

import createToken from "../../server-side/createToken.js";
import { StreamChat } from "stream-chat";
const APP_KEY = "939curfsgahx";
// const StreamChat = require("stream-chat").StreamChat;

const listToPresenceChanges = async () => {
  const client = new StreamChat(APP_KEY, { timeout: 6000 });

  const userID = "luis";
  const token = createToken(userID);
  const set = await client.connectUser({ id: userID }, token);

  const channel = client.channel("messaging", "testEvents", {});

  const state = await channel.watch({ presence: true });

  // client.on("user.banned", (event) => {
  //   console.log(event);
  // });

  // client.on("notification.added_to_channel", (event) => {
  //   console.log(`A notification was added to the channel - ${event.type}`);
  //   console.log(event);
  // });

  // client.on("notification.invited", (event) => {
  //   console.log(
  //     `An invitation notification has been sent - ${event.member.invited}`
  //   );
  //   console.log(event);
  // });

  // client.on("notification.mark_read", (event) => {
  //   console.log(
  //     `A notification was marked as read - ${event.mark_messages_deleted}`
  //   );
  // });

  channel.on("message.new", (event) => {
    console.log(`new message -  ${event.message.text}`);
    console.log(event);
  });

  channel.on("reaction.new", (event) => {
    console.log(`A new reaction - ${event.reaction.type}`);
    console.log(event);
  });

  channel.on("member.added", (event) => {
    console.log(`A member was added - ${event.member.created_at}`);
    console.log(event);
  });

  channel.on("member.removed", (event) => {
    console.log(`A member was removed - ${event.member}`);
  });
  // // channel.on("user.update", (event) => {
  // //   console.log(`A user was updated - ${event.reaction}`);
  // // });

  return null;
};

listToPresenceChanges().then((r) => console.log(r));

// channel.on;
// user.update;
// member.added;
// message.new;
// reaction.new;

// client.on
// user.banned
// NOTIFICATION.ADDED_TO_CHANNEL;
// "notification.added_to_channel"
// "notifcation.invited"
// NOTIFICATION.MARK_READ;
// "notification.mark_read"
