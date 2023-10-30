import { chatClient } from "./client.js";

const watcherCount = async (channelCID) => {
  try {
    // filter on a specific channel cid
    const filter = { cid: channelCID };
    // sort by most recent messages first
    const sort = { last_message_at: -1 };

    // retrieve our channels
    const channels = await chatClient.queryChannels(filter, sort);

    // each channel object has a state collection with a watcher_count property
    return channels[0].state.watcher_count;
  } catch (error) {
    console.log("error >>>", error);
  }
};

watcherCount(
  "messaging:test_unread_counts_1f41aacb-72a2-4fbf-b0a2-b495c630324d"
).then((r) => console.log(r));
