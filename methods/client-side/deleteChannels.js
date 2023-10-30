import { chatClient } from "./client.js";

//CREATE A CHANNEL FOR A LIST OF MEMBERS:
const deleteChannel = async (type, channel_ID) => {
  try {
    const channel = chatClient.channel(type, channel_ID, {});

    const toDelete = await channel.delete({ hard_delete: true });
    return toDelete;
  } catch (error) {
    console.log("error >>>", error);
  }
  return channel.create();
};

deleteChannel("messaging", "channel_to_delete").then((r) => console.log(r));
