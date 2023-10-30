import { chatClient } from "./client.js";

const mark = async () => {
  try {
    const channel = chatClient.channel("messaging", "testEvents");
    await channel.watch();

    // mark all messages on a channel as read
    const markchannel = await channel.markRead();

    return markchannel;
  } catch (error) {
    console.log("error >>>", error);
  }
};

mark().then((r) => console.log(r));
