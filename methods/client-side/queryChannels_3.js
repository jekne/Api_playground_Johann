import { chatClient } from "./client.js";

const queryChannels = async () => {
  const filter = {
    type: "messaging",
    // members: { $in: [user_id] },
    id: "test_reactions",
  };
  // const sort = { last_message_at: -1 };
  const channels = await chatClient.queryChannels(filter);
  console.log("CHANNEL", channels);
  // Log the channel ID for each channel
  channels.forEach((channel) => {
    console.log("Channel ID (cid):", channel.cid);
  });
  return channels;
};
queryChannels().then((r) => console.log(r));
