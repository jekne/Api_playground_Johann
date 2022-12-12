import { chatClient } from "./client.js";

const createChannel = async (type, channel_id, members, name) => {
  try {
    const channel = chatClient.channel(type, channel_id, {
      members,
      name,
    });

    const toCreate = channel.create();
    return toCreate;
  } catch (error) {
    console.log("error >>>", error);
  }
};

createChannel("messaging", "travel", ["luis"], "this name wil be here").then(
  (r) => console.log(r)
);
