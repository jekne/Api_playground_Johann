import { chatClient } from "./client.js";

//CREATE A CHANNEL FOR A LIST OF MEMBERS:
const createChannel = async (type) => {
  try {
    const channel = chatClient.channel(type, {
      members: ["thierry", "tommaso"],
    });

    const toCreate = channel.create();
    return toCreate;
  } catch (error) {
    console.log("error >>>", error);
  }
  return channel.create();
};

createChannel("messaging").then((r) => console.log(r));
