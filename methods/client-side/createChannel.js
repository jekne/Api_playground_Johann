import { chatClient, user_id } from "./client.js";

const createChannel = async (type, id, members, name) => {
  const channel = chatClient.channel(type, id, {
    members,
    name,
  });
  return channel.create();
};

createChannel(
  "messaging",
  "testing-playground-03",
  ["george"],
  "snoopys secret channel"
).then((r) => console.log(r));
