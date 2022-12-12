import { chatClient } from "./client.js";

const createChannel = async (type, id) => {
  const channel = chatClient.channel(type, id, {});
  return channel.create();
};

createChannel("messaging", "another").then((r) => console.log(r));
