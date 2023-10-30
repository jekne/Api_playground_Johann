import { chatClient } from "./client.js";

//CREATE A CHANNEL FOR A LIST OF MEMBERS:
const createChannel = async (type, channel_id) => {
  try {
    const channel = chatClient.channel(type, channel_id, {
      // members: ["johann", "luis"],
      tag1: "filterByTag1",
      tag2: "filterByTag2",
    });

    const toCreate = channel.create();
    return toCreate;
  } catch (error) {
    console.log("error >>>", error);
  }
  return channel.create();
};

createChannel("messaging", "custom_fiel_check").then((r) => console.log(r));
